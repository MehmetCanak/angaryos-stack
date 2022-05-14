<?php

use App\Libraries\ExcelDataSourceLibrary;
use Maatwebsite\Excel\Facades\Excel;

global $pipe;
$pipe['excelData'] = [];

Excel::import(new ExcelDataSourceLibrary, $params);

$data = [];
$tempData = $pipe['excelData'];
unset($pipe['excelData']);

foreach($tempData as $pageName => $pageData)
{
    if($pageData[0][0] == NULL) continue;
    
    $data[$pageName] = 
    [
        'columns' => NULL,
        'data' => []
    ];
     
    foreach($pageData as $i => $row)
    {
        if($i == 0) 
            $data[$pageName]['columns'] = $row;
        else
        {
            $temp = [];
            $l = 'A';
            foreach($row as $j => $colData)
            {
                $colName = $data[$pageName]['columns'][$j];
                if($colName == NULL || strlen($colName) == 0) $colName = $l;
                $temp[$colName] = $colData;
                $l++;
            }
            
            array_push($data[$pageName]['data'], $temp);
        }   
    }
}
        
return $data;