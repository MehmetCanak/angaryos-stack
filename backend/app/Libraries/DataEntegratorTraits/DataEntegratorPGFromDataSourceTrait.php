<?php

namespace App\Libraries\DataEntegratorTraits;

use DB;

trait DataEntegratorPGFromDataSourceTrait 
{    
    private function EntegratePostgresqlFromDataSourceUpdateRecords($remoteConnection, $table, $remoteTable, $columnRelations)
    {
        $start = 0;
        while(TRUE)
        {
            $remoteRecords = $remoteConnection->table($remoteTable->name_basic)->limit(100)->offset($start)->get();
            if(count($remoteRecords) == 0) break;
            $start += 100;
            
            foreach($remoteRecords as $remoteRecord)
                $this->EntegratePostgresqlFromDataSourceUpdateRecord(
                                                                    $remoteConnection, 
                                                                    $table,
                                                                    $remoteTable, 
                                                                    $columnRelations, 
                                                                    $remoteRecord);
        }
    }
    
    private function EntegratePostgresqlFromDataSourceUpdateRecord($remoteConnection, $table, $remoteTable, $columnRelations, $remoteRecord)
    {    
        $currentRecords = $this->GetRecordsFromDBByRemoteRecordId($table, $remoteRecord);
        if($currentRecords === FALSE) return;
      
        $count = count($currentRecords);
        if($count == 1)
            if($this->CompareUpdatedAtTime($columnRelations, $currentRecords[0], $remoteRecord))
                return;
        
        $newRecord = $this->GetNewRecordDataFromRemoteRecord($columnRelations, $remoteRecord);
           
        if($count == 0)
            $this->CreateRecordOnDB($table->name, $newRecord);
        else if($count == 1)
            $this->UpdateRecordOnDB($currentRecords[0], $table->name, $newRecord);
    }
}