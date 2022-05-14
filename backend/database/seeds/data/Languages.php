<?php
use App\BaseModel;


$languages = [];

$languages['tr'] = 'Türkçe';
$languages['en'] = 'English';

$temp = $this->get_base_record();

foreach($languages as $name => $display_name)
{
    $temp['name'] = $name;
    $temp['display_name'] = $display_name;
    
    $languages[$name] = new BaseModel('languages', $temp);
    $languages[$name]->save();
}