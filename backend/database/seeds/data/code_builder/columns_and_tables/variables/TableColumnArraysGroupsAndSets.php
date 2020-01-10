<?php

$join_tables['departments'] = 
[
    //Bu özel join. Tablo buradan başlıyor. Bilgi kartı içinde liste göstermek için
    [
        'name_basic' => 'Bilgi kartında gösterilecek olan bu müdürlükteki personeller tablosu için tablo ilişkisi',
        
        'join_table_id' => 2,//'user', Tablo yada kolon eklenme sıralaması değişirse yeni id yazılması gerekir
        'join_table_alias' => 'mudurlukteki_personeller',
        
        'connection_column_with_alias' => 'departments.id',
        'join_connection_type' => '=',
        'join_column_id' => 17//'department_id' Tablo yada kolon eklenme sırası değişirse güncellenmesi gerekir
    ],
];

$column_arrays['departments'] =
[
    [
        'name_basic' => 'Dizi',
        'column_array_type_id' => $column_array_types['direct_data']->id,
        'table_id' => 'departments',
        'column_ids' => ['id', 'name_basic', 'manager_id', 'state', 'own_id', 'created_at', 'user_id', 'updated_at'],
        'join_table_ids' => [],
        'join_columns' => '',
    ],
    [
        'name_basic' => 'Bu müdürlüğün personelleri',
        'column_array_type_id' => $column_array_types['table_from_data']->id,
        'table_id' => 'departments',
        'column_ids' => ['id', 'name_basic', /*'surname'*/16, 'state'],//Tablo yada kolon eklenme sırası değişirse güncellenmesi gerekir
        'join_table_ids' => [0],
        'join_columns' => '',
    ],
];

$column_groups['departments'] =
[
    [
        'name_basic' => '',
        'column_array_ids' => [0, 1],
        'color_class_id' => 'primary'
    ]
];

$column_sets['departments'] =
[
    [
        'name_basic' => 'Müdürlükler Bilgi Kartı',
        'table_id' => 'departments',
        'column_set_type_id' => 'none',
        'column_group_ids' => [0]
    ]
];



$join_tables['columns'] = 
[
    //Bu özel join. Tablo buradan başlıyor. Bilgi kartı içinde liste göstermek için
    [
        'name_basic' => 'Bilgi kartında gösterilecek olan bu bu kolonu içeren tablolar tablosu için tablo ilişkisi',
        
        'join_table_id' => 19,//'tables', Tablo yada kolon eklenme sıralaması değişirse yeni id yazılması gerekir
        'join_table_alias' => 'kolonu_iceren_tablolar',
        
        'connection_column_with_alias' => 'columns.id',
        'join_connection_type' => '@>',
        'join_column_id' => 58//'column_ids' Tablo yada kolon eklenme sırası değişirse güncellenmesi gerekir
    ],
];

$column_arrays['columns'] =
[
    [
        'name_basic' => '-Direk Data',
        'column_array_type_id' => $column_array_types['direct_data']->id,
        'table_id' => 'columns',
        'column_ids' => 
        [
            'id', 'display_name', 'name', 'column_db_type_id', 'column_gui_type_id',
            'srid', 'up_column_id',
            'column_table_relation_id', 'subscriber_ids', 'column_validation_ids', 
            'column_gui_trigger_ids', 'column_collective_info_id', 'default', 'description',
            'state', 'own_id', 'created_at', 'user_id', 'updated_at'],
        'join_table_ids' => [],
        'join_columns' => '',
    ],
    [
        'name_basic' => 'Bu kolonu içeren tablolar',
        'column_array_type_id' => $column_array_types['table_from_data']->id,
        'table_id' => 'columns',
        'column_ids' => ['id', 'display_name', 'name', 'description', 'state'],
        'join_table_ids' => [0],
        'join_columns' => '',
    ],
];

$column_groups['columns'] =
[
    [
        'name_basic' => '-Bilgi kartı için grup',
        'column_array_ids' => [0, 1],
        'color_class_id' => 'primary'
    ]
];

$column_sets['columns'] =
[
    [
        'name_basic' => 'Kolonlar Bilgi Kartı',
        'table_id' => 'columns',
        'column_set_type_id' => 'none',
        'column_group_ids' => [0]
    ]
];
