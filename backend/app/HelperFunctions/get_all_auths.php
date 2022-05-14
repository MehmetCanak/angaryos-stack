<?php

$langId = @\Auth::user()->language_id;
$key = 'allAuths|lang:'.$langId;

//Cache::flush();

return Cache::rememberForever($key, function()
{      
    $base = new \App\BaseModel();
    
    $geometryColumnTypes = ['point', 'linestring', 'polygon', 'multipoint', 'multilinestring', 'multipolygon'];
    
    $displays =
    [
        'creates' => tr('Ekleme'),
        'edits' => tr('Güncelleme'), 
        'lists' => tr('Liste'), 
        'deleteds' => tr('Silinen Geri Yükleme'),
        'queries' => tr('Sorgu'),
        'restore' => tr('Kaydın Geçmişi'), 
        'shows' => tr('Bilgi Kartı')
    ];

    $filterDisplays =
    [
        'list' => tr('Liste'),
        'update' => tr('Güncelleme'),
        'delete' => tr('Silme'), 
        'restore' => tr('Kaydın Geçmişi'), 
        'show' => tr('Bilgi Kartı'), 
        'export' => tr('Dışa Aktarma'),
        'selectColumnData' => tr('Seçim Kolonu Datası')
    ];
    
    $auths = [];

    
    
    /****        ****/
    
    $auths['admin:userImitation:0:0'] = tr('Kullanıcı taklit');
    $auths['admin:authWizard:0:0'] = tr('Yetki oluşturma yardımcısı');
    $auths['admin:dataEntegrator:0:0'] = tr('Veri Aktarıcı');
    $auths['admin:recordImport:0:0'] = tr('Kayıt İçe Aktarma');

    
    $auths['map:0:0:0'] = tr('Harita');    
    $auths['map:kmz:upload:0'] = tr('Upload KMZ');

    $auths['dashboards:RefreshableNumber:JobCount:0'] = tr('Göstergeler Bekleyen İş Sayısı');
    $auths['dashboards:GraphicXY:Test:0'] = tr('X/Y Grafiği Test Gösterge');
    $auths['dashboards:GraphicPie:Test:0'] = tr('Pasta Grafiği Test Gösterge');
    $auths['dashboards:ComboBoxList:Test:0'] = tr('ComboBoxList Test Gösterge');
    
    
    
    /****        ****/
    
    $dataFilters = \DB::table('data_filters')->get();
    foreach($dataFilters as $i => $dataFilter)
        $dataFilters[$i]->type = get_attr_from_cache('data_filter_types', 'id', $dataFilter->data_filter_type_id, 'name');

    foreach(\DB::table('tables')->get() as $table)
    {
        $displayName = $base->TranslateTableInfo($table);
        if(is_array($displayName)) $displayName = $displayName[0];
        
        $source = 'dashboards:RecordCount:'.$table->name.':0';
        $display = tr('Göstergeler Kayıt Sayısı %s', $displayName);
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
        
        
        $source = 'tables:'.$table->name.':option:0';
        $display = tr('Tablolar %s Özellik Menü Gizle', $displayName);
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
        
        
        $columnIds = json_decode($table->column_ids);
        foreach($columnIds as $columnId)
        {
            $columnDbTypeId = get_attr_from_cache('columns', 'id', $columnId, 'column_db_type_id');
            $columnDbType = get_attr_from_cache('column_db_types', 'id', $columnDbTypeId, 'name');
            
            if(!in_array($columnDbType, $geometryColumnTypes)) continue;

            $source = 'tables:'.$table->name.':maps:0';
            $display = tr('Tablolar %s Harita Tüm Yetkiler', $displayName);
            $auths[$source] = helper('reverse_clear_string_for_db', $display);
            
            $source = 'tables:'.$table->name.':maps:1';
            $display = tr('Tablolar %s Harita Katman', $displayName);
            $auths[$source] = helper('reverse_clear_string_for_db', $display);
            
            $source = 'tables:'.$table->name.':maps:2';
            $display = tr('Tablolar %s Harita Arama', $displayName);
            $auths[$source] = helper('reverse_clear_string_for_db', $display);
            
            $source = 'tables:'.$table->name.':maps:3';
            $display = tr('Tablolar %s Harita Filtre', $displayName);
            $auths[$source] = helper('reverse_clear_string_for_db', $display);
            
            break;
        }
        
        
        $source = 'tables:'.$table->name.':delete:0';
        $display = tr('Tablolar %s Kayıt Sil', $displayName);
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
        
        /*$source = 'tables:'.$table->name.':restore:0';
        $display = 'Tablolar ' . $table->display_name. ' Kayıt Geri Yükle';
        $auths[$source] = helper('reverse_clear_string_for_db', $display);*/
        
        $source = 'tables:'.$table->name.':export:0';
        $display = tr('Tablolar %s Kayıt Dışa Aktar', $displayName);
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
            
        foreach(['creates', 'lists', 'queries', 'edits', 'shows', 'deleteds', 'restore'] as $type)
        {
            $source = 'tables:'.$table->name.':'.$type.':0';
            $display = tr('Tablolar %s %s - Tüm Kolonlar', $displayName, $displays[$type]);
            $auths[$source] = helper('reverse_clear_string_for_db', $display);
        }

        foreach(\DB::table('column_arrays')->where('table_id', $table->id)->get() as $columnArray)
            foreach(['lists', 'queries', 'deleteds', 'restore'] as $type)
            {
                $source = 'tables:'.$table->name.':'.$type.':'.$columnArray->id;
                $display = tr('Tablolar %s %s', $displayName, $displays[$type]) . ' ' . tr($columnArray->name_basic) . ' (id: '.$columnArray->id.')';
                $auths[$source] = helper('reverse_clear_string_for_db', $display);
            }

        foreach(\DB::table('column_sets')->where('table_id', $table->id)->get() as $columnSet)
            foreach(['creates', 'edits', 'shows'] as $type)
            {
                $source = 'tables:'.$table->name.':'.$type.':'.$columnSet->id;
                $display = tr('Tablolar %s %s', $displayName, $displays[$type]) . ' ' . tr($columnSet->name_basic) . ' (id: '.$columnArray->id.')';
                $auths[$source] = helper('reverse_clear_string_for_db', $display);
            }

        foreach($dataFilters as $dataFilter)
        {
            $source = 'filters:'.$table->name.':'.$dataFilter->type.':'.$dataFilter->id;
            $display = tr('Tablolar %s %s Filtresi %s (id: %s)', $displayName, $filterDisplays[$dataFilter->type], tr($dataFilter->name_basic), $dataFilter->id);
            $auths[$source] = helper('reverse_clear_string_for_db', $display);
        }
    }
    
    foreach(\DB::table('missions')->get() as $mission)
    {
        $source = 'missions:'.$mission->id.':0:0';
        $display = tr('Görevler %s Tetikleme', tr($mission->name));
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
    }
    
    foreach(\DB::table('external_layers')->get() as $layer)
    {
        $source = 'external_layers:'.$layer->id.':0:0';
        $display = tr('Ek Katman %s', tr($layer->name));
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
    }
    
    foreach(\DB::table('custom_layers')->get() as $layer)
    {
        $source = 'custom_layers:'.$layer->id.':0:0';
        $display = tr('Revize Katman %s', tr($layer->name));
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
    }
    
    foreach(\DB::table('table_groups')->get() as $group)
    {
        $source = 'table_groups:0:0:'.$group->id;
        $display = tr('Tablo Grubu %s', tr($group->name_basic)) . ' (id: '.$group->id.')';
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
    }
    
    foreach(\DB::table('auth_groups')->get() as $auth)
        $auths[$auth->id] = helper('reverse_clear_string_for_db', tr($auth->name_basic));
   
    foreach(\DB::table('data_source_tbl_relations')->get() as $relation)
    {
        $source = 'dashboards:DataEntegratorStatus:'.$relation->id.':0';
        $display = tr('Göstergeler Veri Aktarıcı Durumu %s', $relation->id);
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
    }
    
    foreach(\DB::table('reports')->get() as $report)
    {
        $tableId = get_attr_from_cache('column_arrays', 'id', $report->column_array_id, 'table_id');
        $table = get_attr_from_cache('tables', 'id', $tableId, '*');
        
        $source = 'reports:'.$table->name.':'.$report->id.':0';
        $display = tr('Raporlar %s %s (%s)', tr($table->display_name), tr($report->name), $report->id);
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
    }
    
    foreach(\DB::table('additional_links')->get() as $link)
    {
        $type = get_attr_from_cache('additional_link_types', 'id', $link->additional_link_type_id, 'name');
        
        $source = 'additional_links:0:0:'.$link->id;
        $display = tr('Ek Link %s %s (%s)', $type, tr($link->name_basic), $link->id);
        $auths[$source] = helper('reverse_clear_string_for_db', $display);
    }

    return $auths;        
});