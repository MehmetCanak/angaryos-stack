<?php

$output = shell_exec('php /var/www/artisan db:seed');
if(strstr($output, 'Database seeding completed successfully.'))
{
    \Cache::flush();
    @rename('/var/www/app/HelperFunctions/initialize_db.php', '/var/www/app/HelperFunctions/initialize_db'.date("YmdHis").'.php');
    return TRUE;
}
else return $output;