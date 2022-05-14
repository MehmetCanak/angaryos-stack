<?php

namespace App\Repositories;

class TestRepository 
{
    public function getDataForSelectElement($record)
    {
        dd('TestRepository:'.__FUNCTION__);
    }
    
    public function getRecordsBySourceData($data)
    {
        $temp1 = helper('get_null_object');
        $temp1->_source_column = '1';
        $temp1->_display_column = 'Bir';

        $temp1->_source_column_name = '_source_column';
        $temp1->_display_column_name = '_display_column';
        
        $temp1->tableName = NULL;
        $temp1->recordId = NULL;
        
        
        $temp2 = helper('get_null_object');
        $temp2->_source_column = '2';
        $temp2->_display_column = 'İki';
        
        $temp2->_source_column_name = '_source_column';
        $temp2->_display_column_name = '_display_column';
        
        $temp2->tableName = NULL;
        $temp2->recordId = NULL;

        return [$temp1, $temp2];
    }
    
    public function getRecordsForListBySourceData($record, $column)
    {
        $guiType = get_attr_from_cache('column_gui_types', 'id', $column->column_gui_type_id, 'name');
        
        if($guiType == 'select')
        {
            switch($record->{$column->name})
            {
                case 1: return "Bir";
                case 2: return "İki";
                default: return "Tanımsız";
            }
        }
        else if($guiType == 'multiselect')
            dd('gelen dataya göre kontrol et', $record->{$column->name}, $column->name);//return [['source' => '1', 'display' => 'Bir?']];
        else
            dd('unexpected.gui.type.'.$guiType);
    }
    
    public function searchRecords($serach, $page, $limit = REC_COUNT_PER_PAGE, $filters = [])
    {
        if(in_array('only.id.equal.two', $filters)) return ['records' => ['2' => 'İki'], 'more' => FALSE];
        
        return ['records' => ['1' => 'Bir', '2' => 'İki'], 'more' => FALSE];
    }
    
    public function whereRecords($serach)
    {
        return [1, 2];
    }
    
    public function ClearCache($tableName, $record, $type) { }
}
