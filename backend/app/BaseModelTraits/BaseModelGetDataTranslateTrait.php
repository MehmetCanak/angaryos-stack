<?php

namespace App\BaseModelTraits;

use App\Libraries\ColumnClassificationLibrary;
use App\BaseModel;
use Cache;
use DB;
    
trait BaseModelGetDataTranslateTrait 
{       
    public function TranslateColumnNames($tableName, $columns)
    {
        if(user_language_control()) return $columns;
     
        global $pipe;
        $langData = $pipe['translateData']['columnNames'];        
        $lang = get_attr_from_cache('languages', 'id', \Auth::user()->language_id, 'name');
        
        foreach($columns as $i => $column)
        {
            $temp = @$langData[$column->name];
            if(!$temp) continue;            
            if(!in_array('*', $temp['tables']) && !in_array($tableName, $temp['tables'])) continue;
            
            $temp = @$temp[$lang];
            if(!$temp) $temp = MARK_MISSING_LANGUAGE_DATA.$column->display_name;
            
            $columns->{$column->name}->display_name = $temp;
        }
        
        return $columns;
    }
    
    public function TranslateTableInfo($table)
    {
        $table->display_name = helper('reverse_clear_string_for_db', $table->display_name);
        if(user_language_control()) return $table->display_name;
        
        global $pipe;
        $langData = $pipe['translateData']['tableNames'];
        
        $lang = get_attr_from_cache('languages', 'id', \Auth::user()->language_id, 'name');
        $langData = @$langData[$table->name];
        
        if(!$langData) return $table->display_name;
        
        $langData = @$langData[$lang];
        if(!$langData) $langData = MARK_MISSING_LANGUAGE_DATA.$table->display_name;
        
        return $langData;
    }
    
    public function TranslateBasic($data)
    {
        if(user_language_control()) return $data;
        
        global $pipe;
        $langData = $pipe['translateData']['basic'];
        
        $lang = get_attr_from_cache('languages', 'id', \Auth::user()->language_id, 'name');
        $langData = @$langData[$data];
        
        if(!$langData) return MARK_MISSING_LANGUAGE_DATA.$data;
        
        $langData = @$langData[$lang];
        if(!$langData) $langData = MARK_MISSING_LANGUAGE_DATA.$data;
        
        return $langData;
    }
    
    public function TranslateSelectColumnData($tableName, $column, $data)
    {
        if(user_language_control()) return $data;
        
        global $pipe;
        $langData = $pipe['translateData']['selectColumnDatas'];
        
        $lang = get_attr_from_cache('languages', 'id', \Auth::user()->language_id, 'name');        
        $langData = @$langData[$column->name]; 
        
        if(!$langData) return $data;
        
        if(!in_array('*', $langData['tables']) && !in_array($tableName, $langData['tables']))
            return $data;
        
        $source = @$langData['sourceColumnName'];
        foreach($data['results'] as $i => $rec)
        {
            if(isset($langData['data']))
            {
                $search = $rec[$source];
                $temp = @$langData['data'][$search][$lang];
                
                if($temp) $translated = $temp;
                else $translated = MARK_MISSING_LANGUAGE_DATA.$rec['text']; 
            }
            else if(isset($langData['function'])) $translated = $langData['function']($this, $rec);
            else $translated = MARK_MISSING_LANGUAGE_DATA.$rec['text'];
                
            $data['results'][$i]['text'] = $translated;
        }
        
        return $data;
    }
    
    public function TranslateRecordsData($tableName, $column, $records)
    {
        if(user_language_control()) return $records;
        
        global $pipe;
        $langData = $pipe['translateData']['selectColumnDatas'];
        
        $lang = get_attr_from_cache('languages', 'id', \Auth::user()->language_id, 'name');        
        $langData = @$langData[$column->name]; 
        
        if(!$langData) return $records;
        
        if(!in_array('*', $langData['tables']) && !in_array($tableName, $langData['tables']))
            return $records;
        
        $params = helper('get_null_object');
        $params->lang = $lang;
        $params->langData = $langData;

        $source = @$langData['sourceColumnName'];
        if($source == 'text') $source = $column->name;
        $params->source = $source;

        foreach($records as $i => $rec)
        {
            $object = TRUE;
            if(is_array($rec))
            {
                $rec = (Object)$rec;
                $object = FALSE;
            }

            if(isset($langData['data']))
            {
                if(!in_array($source, array_keys((array)$rec)))
                {
                    dd('missing.column', $source, $rec, $records);
                }
                
                $search = $rec->{$source};
                $params->search = $search;               
                
                if(!is_array($search) && strlen($search) == 0) $translated = $search;
                else if(is_array($search) && count($search) == 0) $translated = $search;
                else $translated = ColumnClassificationLibrary::relationDbTypes(     $this, 
                                                                                __FUNCTION__, 
                                                                                $column, 
                                                                                NULL, 
                                                                                $params);
            }
            else if(isset($langData['function'])) $translated = $langData['function']($this, $rec);
            else 
            {

                $translated = ColumnClassificationLibrary::relationDbTypes(     $this, 
                                                                                __FUNCTION__.'ForMissingLangData', 
                                                                                $column, 
                                                                                NULL, 
                                                                                $params);
                //Onetoone için aşağıdkaki olabilir direk text geliyor ama one tomany için geçerli değil 
                //json decode yapıp foreach içinde önüne missing ekle
                //paramsı da bi elden geçirmen belki gerekir??
                //$translated = MARK_MISSING_LANGUAGE_DATA.$rec->{$column->name};
            }
            
            if($object) $records[$i]->{$column->name} = $translated;
            else  $records[$i][$column->name] = $translated;
        }
        
        return $records;
    }

    public function TranslateRecordsDataForOneToOne($params)
    {
        if(is_string($params->search)) return $this->TranslateRecordsDataForOneToOneString($params);        
        else if(is_array($params->search)) return $this->TranslateRecordsDataForOneToOneArray($params);
        else custom_abort('uncorrect.one.to.one.type.for.record.translate('.gettype($params->search).')');
    }

    public function TranslateRecordsDataForOneToOneString($params)
    {
        $source = @$params->langData['sourceColumnName'];
        $temp = @$params->langData['data'][$params->search][$params->lang];
        if($temp) return $temp;

        return MARK_MISSING_LANGUAGE_DATA.$params->search;
    }

    public function TranslateRecordsDataForOneToOneArray($params)
    {
        $source = @$params->langData['sourceColumnName'];
        
        $temp = @$params->langData['data'][$params->search[0]['display']][$params->lang];
        if(!$temp) $params->search[0]['display'] = MARK_MISSING_LANGUAGE_DATA.$params->search[0]['display'];
        else $params->search[0]['display'] = $temp;
        
        return $params->search;
    }

    public function TranslateRecordsDataForOneToMany($params)
    {
        $items = @json_decode($params->search);
        if(!$items) return $params->search;

        $itemColumnName = @$params->langData['sourceColumnName'];
        if($itemColumnName == 'id') $itemColumnName = 'source';
        else if($itemColumnName == 'text') $itemColumnName = 'display';
        else custom_abort('uncorrect.source.column.name(itemColumnName)');
        
        foreach($items as $i => $item)
        {
            $search = $item->{$itemColumnName};
            $temp = @$params->langData['data'][$search][$params->lang];
            if($temp) $translated = $temp;
            else $translated = MARK_MISSING_LANGUAGE_DATA.$item->display;

            $items->{$i}->display = $translated;
        }

        return json_encode($items);
    }
}