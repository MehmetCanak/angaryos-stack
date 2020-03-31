<?php
return;
use App\BaseModel;



$u = App\User::find(1);
\Auth::login($u);

$baseRecord = $this->get_base_record();
foreach($temps as $tableName => $records)
{
    foreach($records as $record)
    {
        $temp = array_merge($baseRecord, $record);
        $temp = new BaseModel($tableName, $temp);
        $temp->save();
        
        echo 'Data Source insert OK';

        $lib = new \App\Libraries\DataSourceOperationsLibrary();
        $lib->TableEvent(
        [
            'type' => 'create', 
            'record' => $temp
        ]);

        echo 'Data Source Tables and Columns insert OK';
    }
}