<?php

use Spatie\Async\Pool;

global $pipe;
$pipe['asyncWorkPool'] = Pool::create()->concurrency(10)->timeout(10);

$settings = \Cache::rememberForever('settings', function()
{ 
    try 
    {
        foreach(@\DB::table('settings')->get() as $setting)
        {
            $temp = $setting->value;
            $temp = helper('reverse_clear_string_for_db', $temp);
            $s[trim($setting->name)] = trim($temp);
        }
        
        return @$s;
    } 
    catch (Exception $exc) 
    {
        return [];
    }
});

if(count($settings) == 0) \Cache::forget('settings');

if(is_array($settings))
    foreach($settings as $key => $value)
        @define($key, $value);

/* Required Vars (If Not Exist) */
try 
{
    @define('DB_PROJECTION', 7932);
    $pipe['SHOW_DELETED_TABLES_AND_COLUMNS'] = SHOW_DELETED_TABLES_AND_COLUMNS;
} catch (\Exception $exc) {}

$pipe['translateData'] = require('/var/www/config/language/main.php');