<?php

namespace App\BaseModelTraits;

use App\Libraries\ColumnClassificationLibrary;

trait BaseModelGetDataWhereTrait 
{    
    use BaseModelWhereStringTrait;
    use BaseModelWhereIntegerTrait;
    use BaseModelWhereDateTimeTrait;
    use BaseModelWhereBooleanTrait;
    use BaseModelWhereGeoTrait;
    
    use BaseModelWhereJoinedColumnAsStringTrait;
    
    
    
    public function addWheres($model, $columns, $filters)
    {
        foreach($filters as $name => $filter)
            $this->addWhere($model, $columns->{$name}, $filter);
    }
    
    public function addWhere($model, $column, $filter)
    {        
        $params = helper('get_null_object');
        $params->filter = $filter;
        $params->column = $column;
        $params->model = $model;
        
        $params->column_name_with_alias = $column->name;        
        if(strlen($column->table_alias) > 0) 
            $params->column_name_with_alias = $column->table_alias . '.' . $params->column_name_with_alias;
        
        ColumnClassificationLibrary::relation($this, __FUNCTION__, $column, NULL, $params);
    }
    
    public function addWhereForBasicColumn($params)
    {
        if($params->filter->type < 100)
        {
            $dbType = $params->column->getRelationData('column_db_type_id');
        
            switch($dbType->name)
            {
                case 'string':
                case 'text':
                    return $this->addWhereForString($params);
                case 'integer': return $this->addWhereForInteger($params);
                case 'datetime': return $this->addWhereForDateTime($params);
                case 'boolean': return $this->addWhereForBoolean($params);
                case 'point': 
                case 'multipoint': 
                    return $this->addWhereForGeo($params);
                default: dd($dbType->name.' için where yap');
            } 
        }
        
        if($params->filter->type == 100)//NULL
            $where = '('.$params->column_name_with_alias.'::text = \'\') IS NOT FALSE';
        else if($params->filter->type == 101)//NOT NULL
            $where = 'length('.$params->column_name_with_alias.'::text) > 0';
        
        $params->model->whereRaw($where);
            
    }
    
    public function addWhereForRelationSql($params)
    {
        $params->column->column_name_with_alias = $params->column->table_alias.'.'.$params->column->name;
        
        if($params->filter->type == 100)
        {
            $where = '('.$params->column->column_name_with_alias.'::text = \'\') IS NOT FALSE';
            $params->model->whereRaw($where);
        }
        else if($params->filter->type == 101)
        {
            $where = 'length('.$params->column->column_name_with_alias.'::text) > 0';
            $params->model->whereRaw($where);
        }
        else
        {
            ColumnClassificationLibrary::relationDbTypes(   $this, 
                                                            __FUNCTION__, 
                                                            $params->column, 
                                                            NULL, 
                                                            $params);
        }
    }
    
    public function addWhereForRelationSqlForOneToOne($params)
    {
        switch ($params->filter->type)
        {
            case 1://table filter (basic)
                $params->model->whereIn($params->column->column_name_with_alias, $params->filter->filter);
                break;
            case 2://all element in same record
                $params->model->where(function ($query) use($params)
                {
                    foreach($params->filter->filter as $filter)
                        $query->where($params->column->column_name_with_alias, '=', $params->filter->filter);
                });
                break;
            default: abort(helper('response_error', 'undefined.filter.type:'.$params->filter->type));  
        }
    }
    
    public function addWhereForTableIdAndColumnIds($params)
    {
        $column = $params->column->table_alias.'.'.$params->column->name;
        
        switch ($params->filter->type)
        {
            case 1://table filter (basic)
                $params->where_word_for_filter = 'orWhereRaw';
                ColumnClassificationLibrary::relationDbTypes(   
                                                            $this, 
                                                            __FUNCTION__, 
                                                            $params->column, 
                                                            NULL, 
                                                            $params);
                break;
            case 2://has all
                $params->where_word_for_filter = 'whereRaw';
                ColumnClassificationLibrary::relationDbTypes(   
                                                            $this, 
                                                            __FUNCTION__, 
                                                            $params->column, 
                                                            NULL, 
                                                            $params);
                break;
            
            case 100:
                $where = '('.$column.'::text = \'\') IS NOT FALSE';
                $params->model->whereRaw($where);
                break;
            case 101:
                $where = 'length('.$column.'::text) > 0';
                $params->model->whereRaw($where);
                break;
            default: dd('filtre tipi eklenmmis5');
        }
    }
    
    public function addWhereForTableIdAndColumnIdsForOneToOne($params)
    {
        $column = $params->column->table_alias.'.'.$params->column->name;
        
        $params->model->where(function ($query) use ($column, $params) 
        {
            foreach($params->filter->filter as $filter)
                $query->{$params->where_word_for_filter}("$column = '$filter'");
        });
    }
    
    public function addWhereForTableIdAndColumnIdsForOneToMany($params)
    {
        $params->model->where(function ($query) use ($params) 
        {
            foreach($params->filter->filter as $filter)
                $query->{$params->where_word_for_filter}("$params->column_name_with_alias @> '$filter'");
        });
    }
    
    public function addWhereForDataSource($params)
    {
        if($params->filter->type < 100)
        {
            switch($params->column->db_type_name)
            {
                case 'jsonb': return $this->addWhereForDataSourceJsonb($params);
                default: dd('addWhereForDataSource db type: ' .$params->column->db_type_name);
            }
        }
        else if($params->filter->type == 100)//NULL
            $where = '('.$params->column_name_with_alias.'::text = \'\') IS NOT FALSE';
        else if($params->filter->type == 101)//NOT NULL
            $where = 'length('.$params->column_name_with_alias.'::text) > 0';
        
        $params->model->whereRaw($where);
    }
    
    private function addWhereForDataSourceJsonb($params)
    {
        $relation = $params->column->getRelationData('column_table_relation_id');
        $dataSource = $relation->getRelationData('data_source_id');
            
        $repository = NULL;
        eval(helper('clear_php_code', $dataSource->php_code));
                
        $temp = $repository->whereRecords($params->filter->filter);

        $params->model->where(function ($query) use ($params, $temp) 
        {
            $filters = json_decode($params->filter->filter);
            foreach($filters as $filter)
            {
                if(!is_numeric($filter))
                    $query->orWhere($params->column_name_with_alias, 'like', '%"'.$filter.'"%');
                else
                    $query->orWhereRaw($params->column_name_with_alias. ' @> \''.$filter.'\'::jsonb');
            }
            
            foreach($temp as $auth)
                $query->orWhereRaw($params->column_name_with_alias. ' @> \''.$auth.'\'::jsonb');
        });
    }
    
    
    
    
        
    public function addWhereForJoinedColumn($params)
    {
        return $this->addWhereForJoinedColumnAsString($params);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    public function add_where_for_join_table_ids($params)
    {
        dd('add_where_with_join_table_ids');
        //daha önce joined col eklendi add_where_for_joined_column
    }
}