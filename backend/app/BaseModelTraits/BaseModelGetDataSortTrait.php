<?php

namespace App\BaseModelTraits;

use App\Libraries\ColumnClassificationLibrary;

use DB;

trait BaseModelGetDataSortTrait 
{    
    public function addSorts($model, $columns, $sorts)
    {
        $added = FALSE;
        foreach($sorts as $name => $direction)
        {
            $direction = $direction ? 'asc' : 'desc';
            $added = TRUE;
            $this->addSort($model, $columns->{$name}, $direction);
        }
        
        if(!$added) $model->orderBy($this->getTable().'.id', 'desc');
    }
    
    private function addSort($model, $column, $direction)
    {
        $params = helper('get_null_object');
        $params->model = $model;
        
        $params->column = $column;
        $params->column->select_raw = @helper('reverse_clear_string_for_db', @$params->column->select_raw);

        $params->direction = $direction;
        
        ColumnClassificationLibrary::relation($this, __FUNCTION__, $column, NULL, $params);
    }
    
    public function addSortForBasicColumn($params)
    {
        $columnName = $params->column->table_alias . '.' . $params->column->name;        
        $params->model->orderBy($columnName, $params->direction);
    }
    
    public function addSortForRelationSql($params)
    {
        $columnName = $params->column->name.'___sql_relation'.$params->relation->id.'.'.$params->relation->relation_display_column;
        $params->model->orderBy(DB::raw("string_agg($columnName, ' ')"), $params->direction);
    }
    
    public function addSortForJoinedColumn($params)
    {
        global $pipe;
        $table = $pipe['table'];

        $params->column->select_raw  = str_replace('("', '( "', $params->column->select_raw);
        $params->column->select_raw  = str_replace(' "', ' '.$table.'."', ' '.$params->column->select_raw);
        
        $temp = helper('get_column_data_for_joined_column', $params->column->select_raw);
        $params->model->orderBy(DB::raw($temp[0]), $params->direction);
    }
    
    public function addSortForDataSource($params)
    {
        $this->addSortForBasicColumn($params);
    }
    
    public function addSortForTableIdAndColumnIds($params)
    {
        $tableName = get_attr_from_cache('tables', 'id', $params->relation->relation_table_id, 'name');
        $displayName = get_attr_from_cache('columns', 'id', $params->relation->relation_display_column_id, 'name');
        
        $columnWithAlias = $params->column->name . '___' . $tableName.$params->relation->id.'.'.$displayName;
        $params->model->orderBy(DB::raw("string_agg($columnWithAlias, ' ')"), $params->direction);
    }

    public function addSortForTableIdAndColumnNames($params)
    {
        $tableName = get_attr_from_cache('tables', 'id', $params->relation->relation_table_id, 'name');
        $displayName = $params->relation->relation_display_column;
        
        $alias = $params->column->name . '___' . $tableName.$params->relation->id;
        
        if(strstr($displayName, '"'))
            $columnWithAlias = str_replace(' "', ' '.$alias.'."', ' '.$displayName);
        else
            $columnWithAlias = $alias.'.'.$displayName;
        
        $params->model->orderBy(DB::raw("string_agg($columnWithAlias, ' ')"), $params->direction);
    }
    
    public function addSortForJoinTableIds($params)
    {
        $params->model->orderBy($params->column->name);
    }
}