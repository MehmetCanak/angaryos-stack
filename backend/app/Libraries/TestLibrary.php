<?php

namespace App\Libraries;

use DB;

class TestLibrary 
{
    private function AddStringIntoValidateRecord($str)
    {
        $temp = DB::table('settings')->where('name', 'TEST')->first();
        $temp->value .= '|'.$str.'|';
        
        DB::table('settings')->where('name', 'TEST')->update(['value' => $temp->value]);
    }
    
    public function TableTriggerTest($type, $record)
    {
        $this->AddStringIntoValidateRecord('table.'.$type);
    }
    
    public function ColumnTriggerTest($type, $record)
    {
        $this->AddStringIntoValidateRecord('column.'.$type);
    }
    
    public function TableESignTest($type, $record)
    {
        $id = $record->id;
        if($type == 'restore') $id = $record->record_id;
        
        return 'table.'.$type.'.'.$id;
    }
    
    public function ColumnESignTest($type, $record)
    {
        $id = $record->id;
        if($type == 'restore') $id = $record->record_id;
        
        return 'column.'.$type.'.'.$id;
    }
}