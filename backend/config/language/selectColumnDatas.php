<?php

$temp = require 'columnNames.php';
$columnIdsData = [];
        
foreach($temp as $columnaName => $tr)
{
    $key = $tr['tr'] . ' ('.$columnaName.')';
    $en = $tr['en'] . ' ('.$columnaName.')';
    $columnIdsData[$key] = 
    [
        'tr' => $key,
        'en' => $en
    ];    
}

return 
[
    /*'column_db_type_id' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' =>
        [
            'Kısa Yazı' =>
            [
                'tr' => 'Kısa Yazı',
                'en' => 'Short Text'
            ]
        ]
    ],
    
    'column_gui_type_id' =>
    [
        'tables' => ['*'],
        'function' =>   function($th, $rec)
        {
            switch($rec['text'])
            {
                case 'Uzun Yazı': return 'Long Text';
                default: return MARK_MISSING_LANGUAGE_DATA.$rec['text'];
            }
        }
    ]*/
    
    'column_ids' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => $columnIdsData
    ],    
    'column_id' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => $columnIdsData
    ],
    
    
    
    'column_db_type_id' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => 
        [
            'Kısa Yazı' => 
            [
                'tr' => 'Kısa Yazı',
                'en' => 'String',
            ],
            'Uzun Yazı' => 
            [
                'tr' => 'Uzun Yazı',
                'en' => 'Text',
            ],            
            'JSON' => 
            [
                'tr' => 'JSON',
                'en' => 'JSON',
            ],
            'JSON*' => 
            [
                'tr' => 'JSON*',
                'en' => 'JSON*',
            ],
            'Tam Sayı' => 
            [
                'tr' => 'Tam Sayı',
                'en' => 'Integer',
            ],
            'Virgüllü Sayı' => 
            [
                'tr' => 'Virgüllü Sayı',
                'en' => 'Float',
            ],
            'Tarih' => 
            [
                'tr' => 'Tarih',
                'en' => 'Date',
            ],
            'Saat' => 
            [
                'tr' => 'Saat',
                'en' => 'Hour',
            ],
            'Tarih/Saat' => 
            [
                'tr' => 'Tarih/Saat',
                'en' => 'Date/Time',
            ],
            'Mantıksal' => 
            [
                'tr' => 'Mantıksal',
                'en' => 'Logical',
            ],
            'Coğrafi Nokta' => 
            [
                'tr' => 'Coğrafi Nokta',
                'en' => 'Geo Point',
            ],
            'Coğrafi Çizgi' => 
            [
                'tr' => 'Coğrafi Çizgi',
                'en' => 'Geo Line',
            ],
            'Coğrafi Alan' => 
            [
                'tr' => 'Coğrafi Alan',
                'en' => 'Geo Area',
            ],
            'Coğrafi Nokta (Çoklu)' => 
            [
                'tr' => 'Coğrafi Nokta (Çoklu)',
                'en' => 'Geo Point (Multi)',
            ],
            'Coğrafi Çizgi (Çoklu)' => 
            [
                'tr' => 'Coğrafi Çizgi (Çoklu)',
                'en' => 'Geo Line (Multi)',
            ],
            'Coğrafi Alan (Çoklu)' => 
            [
                'tr' => 'Coğrafi Alan (Çoklu)',
                'en' => 'Geo Area (Multi)',
            ],
        ]
    ],
    
    
    
    'column_gui_type_id' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => 
        [
            'Kısa Yazı' => 
            [
                'tr' => 'Kısa Yazı',
                'en' => 'String',
            ],
            'Uzun Yazı' => 
            [
                'tr' => 'Uzun Yazı',
                'en' => 'Text',
            ],
            'Sayı' => 
            [
                'tr' => 'Sayı',
                'en' => 'Number',
            ],
            'Tarih' => 
            [
                'tr' => 'Tarih',
                'en' => 'Date',
            ],
            'Saat' => 
            [
                'tr' => 'Saat',
                'en' => 'Hour',
            ],
            'JSON*' => 
            [
                'tr' => 'JSON*',
                'en' => 'JSON*',
            ],
            'Tarih/Saat' => 
            [
                'tr' => 'Tarih/Saat',
                'en' => 'Date/Time',
            ],
            'Dinamik Açılır Liste' => 
            [
                'tr' => 'Dinamik Açılır Liste',
                'en' => 'Dynamic Dropdown List',
            ],
            'Static Açılır Liste' => 
            [
                'tr' => 'Static Açılır Liste',
                'en' => 'Static Drop-Down List',
            ],
            'Dinamik Açılır Liste (Çoklu)' => 
            [
                'tr' => 'Dinamik Açılır Liste (Çoklu)',
                'en' => 'Dynamic Drop-Down List (Multi)',
            ],
            'Static Açılır Liste (Çoklu)' => 
            [
                'tr' => 'Static Açılır Liste (Çoklu)',
                'en' => 'Static Drop-Down List (Multi)',
            ],
            'Mantıksal' => 
            [
                'tr' => 'Mantıksal',
                'en' => 'Logical',
            ],
            'Mantıksal (Hızlı Düzenleme)' => 
            [
                'tr' => 'Mantıksal (Hızlı Düzenleme)',
                'en' => 'Logical (Quick Edit)',
            ],
            'Şifre' => 
            [
                'tr' => 'Şifre',
                'en' => 'Password',
            ],
            'Dosya/Resim' => 
            [
                'tr' => 'Dosya/Resim',
                'en' => 'File/Image',
            ],
            'Coğrafi Nokta' => 
            [
                'tr' => 'Coğrafi Nokta',
                'en' => 'Geo Point',
            ],
            'Coğrafi Çizgi' => 
            [
                'tr' => 'Coğrafi Çizgi',
                'en' => 'Geo Line',
            ],
            'Coğrafi Alan' => 
            [
                'tr' => 'Coğrafi Alan',
                'en' => 'Geo Area',
            ],
            'Coğrafi Nokta (Çoklu)' => 
            [
                'tr' => 'Coğrafi Nokta (Çoklu)',
                'en' => 'Geo Point (Multi)',
            ],
            'Coğrafi Çizgi (Çoklu)' => 
            [
                'tr' => 'Coğrafi Çizgi (Çoklu)',
                'en' => 'Geo Line (Multi)',
            ],
            'Coğrafi Alan (Çoklu)' => 
            [
                'tr' => 'Coğrafi Alan (Çoklu)',
                'en' => 'Geo Area (Multi)',
            ],
            'Kod Editörü (PHP)' => 
            [
                'tr' => 'Kod Editörü (PHP)',
                'en' => 'Code Editor (PHP)',
            ],
            'Kod Editörü (SQL)' => 
            [
                'tr' => 'Kod Editörü (SQL)',
                'en' => 'Code Editor (SQL)',
            ],
            'Kod Editörü (HTML)' => 
            [
                'tr' => 'Kod Editörü (HTML)',
                'en' => 'Code Editor (HTML)',
            ],
            'Kod Editörü (JS)' => 
            [
                'tr' => 'Kod Editörü (JS)',
                'en' => 'Code Editor (JS)',
            ],
            'Dinamik Taşı Bırak Liste' => 
            [
                'tr' => 'Dinamik Taşı Bırak Liste',
                'en' => 'Dynamic Move Drop List',
            ],
            'Static Taşı Bırak Liste' => 
            [
                'tr' => 'Static Taşı Bırak Liste',
                'en' => 'Drop Static Move List',
            ],
            'Telefon' => 
            [
                'tr' => 'Telefon',
                'en' => 'Phone',
            ],
            'Para Birimi (TL)' => 
            [
                'tr' => 'Para Birimi (TL)',
                'en' => 'Currency (TL)',
            ],
            'Para Birimi (USD)' => 
            [
                'tr' => 'Para Birimi (USD)',
                'en' => 'Currency (USD)',
            ],
            'Zengin Metin Editörü' => 
            [
                'tr' => 'Zengin Metin Editörü',
                'en' => 'Rich Text Editor',
            ],
            'Json Görüntüleyici' => 
            [
                'tr' => 'Json Görüntüleyici',
                'en' => 'Json Viewer',
            ],
            'Json Görüntüleyici (Yeni Sayfa)' => 
            [
                'tr' => 'Json Görüntüleyici (Yeni Sayfa)',
                'en' => 'Json Viewer (New Page)',
            ],
        ]
    ],
    
    
    
    'subscriber_ids' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => 
        [
            'Veritabanı tablo işlemleri için trigger' => 
            [
                'tr' => 'Veritabanı tablo işlemleri için trigger',
                'en' => 'Trigger for database table operations',
            ],
            'Tabloyla ilişkili kolon işlemleri için trigger' => 
            [
                'tr' => 'Tabloyla ilişkili kolon işlemleri için trigger',
                'en' => 'Trigger for table-related column operations',
            ],
            'Yeni  GeoServer işlemleri için before trigger' => 
            [
                'tr' => 'Yeni  GeoServer işlemleri için before trigger',
                'en' => 'Before trigger for new GeoServer operations',
            ],
            'Yönetici için tam yetki oluşturma trigger' => 
            [
                'tr' => 'Yönetici için tam yetki oluşturma trigger',
                'en' => 'Create full authorization trigger for admin',
            ],
            'Veritabanı kolon işlemleri için trigger' => 
            [
                'tr' => 'Veritabanı kolon işlemleri için trigger',
                'en' => 'Trigger for database column operations',
            ],
            'Revize katman işlemleri için trigger' => 
            [
                'tr' => 'Revize katman işlemleri için trigger',
                'en' => 'Trigger for revised layer operations',
            ],
            'Veri kaynağından tabloları ve kolonları okumak için trigger' => 
            [
                'tr' => 'Veri kaynağından tabloları ve kolonları okumak için trigger',
                'en' => 'Trigger to read tables and columns from data source',
            ],
            'Kolon dizisi işlemleri için trigger' => 
            [
                'tr' => 'Kolon dizisi işlemleri için trigger',
                'en' => 'Trigger for column array operations',
            ],
            'Geoserver stil işlemleri için trigger' => 
            [
                'tr' => 'Geoserver stil işlemleri için trigger',
                'en' => 'Trigger for geoserver style operations',
            ],
            'Geoserver revize katman işlemleri için trigger' => 
            [
                'tr' => 'Geoserver revize katman işlemleri için trigger',
                'en' => 'Trigger for geoserver revision layer operations',
            ],
            'Tekrarsız bir ilişki ise veri tek sefer entegre etme işi oluşturma trigger' => 
            [
                'tr' => 'Tekrarsız bir ilişki ise veri tek sefer entegre etme işi oluşturma trigger',
                'en' => 'If it\'s a non-repeating relationship, create a one-time data integration job trigger',
            ],
            'Yöneticiye gösterge yetkisi tanımlama tetikleyici' => 
            [
                'tr' => 'Yöneticiye gösterge yetkisi tanımlama tetikleyici',
                'en' => 'Indicator authorization to admin trigger',
            ],
            'Yöneticiye görev tetikleme yetkisi atama' => 
            [
                'tr' => 'Yöneticiye görev tetikleme yetkisi atama',
                'en' => 'Assign task trigger authority to admin',
            ],
            'Duyuru için Bildirim/Sms/Mail takipçisi' => 
            [
                'tr' => 'Duyuru için Bildirim/Sms/Mail takipçisi',
                'en' => 'Notification/Sms/Mail follower for the announcement',
            ],
            'Dosya upload işlemleri için trigger' => 
            [
                'tr' => 'Dosya upload işlemleri için trigger',
                'en' => 'Trigger for file uploads',
            ],
            'Şifreleri şifrelemek için trigger' => 
            [
                'tr' => 'Şifreleri şifrelemek için trigger',
                'en' => 'Trigger to encrypt passwords',
            ],
            'e-imza işlemleri için trigger' => 
            [
                'tr' => 'e-imza işlemleri için trigger',
                'en' => 'trigger for e-signature transactions',
            ],
        ]
    ],
    
    
    
    'up_column_id' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => 
        [
            'Kolon(lar) kolonu için sadece seçili tablonun kolonları gelsin' => 
            [
                'tr' => 'Kolon(lar) kolonu için sadece seçili tablonun kolonları gelsin',
                'en' => 'For the column(s) column, only the columns of the selected table are returned',
            ],
            'Kolon Dizi(leri) kolonu için sadece seçili tablonun dizileri gelsin' => 
            [
                'tr' => 'Kolon Dizi(leri) kolonu için sadece seçili tablonun dizileri gelsin',
                'en' => 'For the Column Array(s) column, only the arrays of the selected table are returned',
            ],
            'Kolon kolonu için sadece seçili tablonun kolonları gelsin' => 
            [
                'tr' => 'Kolon kolonu için sadece seçili tablonun kolonları gelsin',
                'en' => 'For the column column, only the columns of the selected table come',
            ],
            'Uzak Tablo kolonu için sadece seçili veri kaynağının tabloları gelsin' => 
            [
                'tr' => 'Uzak Tablo kolonu için sadece seçili veri kaynağının tabloları gelsin',
                'en' => 'Get only the tables of the selected data source for the Remote Table column',
            ]
        ]
    ],
    
    
    
    'column_gui_trigger_ids' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => 
        [
            'Ad kolonu otomatik doldur' => 
            [
                'tr' => 'Ad kolonu otomatik doldur',
                'en' => 'Autofill Name column',
            ]
        ]
    ],
    
    
    
    'column_collective_info_id' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => 
        [
            'Toplam' => 
            [
                'tr' => 'Toplam',
                'en' => 'Sum',
            ],
            'Ortalama' => 
            [
                'tr' => 'Ortalama',
                'en' => 'Mean',
            ],
            'En çok' => 
            [
                'tr' => 'En çok',
                'en' => 'Max',
            ],
            'En az' => 
            [
                'tr' => 'En az',
                'en' => 'Min',
            ],
            'Adet' => 
            [
                'tr' => 'Adet',
                'en' => 'Count',
            ],
        ]
    ],
    
    
    
    'column_table_relation_id' =>
    [
        'sourceColumnName' => 'text',
        'tables' => ['*'],
        'data' => 
        [
            'Yetkiler kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Yetkiler kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Auths column',
            ],
            'Takipçi Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Takipçi Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Follower Type column',
            ],
            'Filtre Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Filtre Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Filter Type column',
            ],
            'Kolon Veri Kaynağı kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Veri Kaynağı kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Data Source column',
            ],
            'Alt Nokta Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Alt Nokta Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Subpoint Type column',
            ],
            'Alt Çizgi Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Alt Çizgi Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Subline Type column',
            ],
            'Alt Poligon Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Alt Poligon Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Subpolygon Type column',
            ],
            'Katman Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Katman Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Layer Type column',
            ],
            'Stil kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Stil kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Style column',
            ],
            'Veri Kaynağı Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Veri Kaynağı Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Data Source Type column',
            ],
            'Veri Kaynağı kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Veri Kaynağı kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Data Source column',
            ],
            'Veri Akış Yönü kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Veri Akış Yönü kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Data Flow Direction column',
            ],
            'Filtreler kolonu varsayılan tablo ilişkisi' => 
            [
                'tr' => 'Filtreler kolonu varsayılan tablo ilişkisi',
                'en' => 'Default table relation for Data Flow Direction column',
            ],
            'Kolon setleri kolonu varsayılan tablo ilişkisi' => 
            [
                'tr' => 'Kolon setleri kolonu varsayılan tablo ilişkisi',
                'en' => 'Default table relation for Data Flow Direction column',
            ],
            'İndiren Kullanıcı kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'İndiren Kullanıcı kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Download User column',
            ],
            'Kaydı Güncelleyen kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kaydı Güncelleyen kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Update User column',
            ],
            'Kullanıcılar kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kullanıcılar kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Users column',
            ],
            'Kaydın Sahibi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kaydın Sahibi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Own User column',
            ],
            'Üst Kolon kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Üst Kolon kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Upper Column column',
            ],
            'İlişkili Kaynak Kolon kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'İlişkili Kaynak Kolon kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Related Source Column column',
            ],
            'İlişkili Tablo kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'İlişkili Tablo kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Related Table column',
            ],
            'İlişkili Görüntüleme Kolonu kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'İlişkili Görüntüleme Kolonu kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Related Display Column column',
            ],
            'Kolon Veri Tabanı Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Veri Tabanı Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Database Type column',
            ],
            'Kolon Görüntüleme Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Görüntüleme Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Display Type column',
            ],
            'Kolon Tablo İlişkisi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Tablo İlişkisi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Table Relationship column',
            ],
            'Takipçi(ler) kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Takipçi(ler) kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Follower(s) column',
            ],
            'Kolon Doğrulamaları kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Doğrulamaları kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Validations column',
            ],
            'Kolon(lar) kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon(lar) kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column(s) column',
            ],
            'Kolon kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column column',
            ],
            'Kontrol kolon(ları) kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kontrol kolon(ları) kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Control column(s) column',
            ],
            'Tablo kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Tablo kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Table column',
            ],
            'Tablo(lar) kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Tablo(lar) kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Table(s) column',
            ],
            'Kolon Dizi(leri) kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Dizi(leri) kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Array(s) column',
            ],
            'Kolon Set Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Set Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Set Type column',
            ],
            'Join Tablo(lar)ı kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Join Tablo(lar)ı kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Join Table(s) column',
            ],
            'Join Tablo kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Join Tablo kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Join Table column',
            ],
            'Join Kolonu kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Join Kolonu kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Join Column column',
            ],
            'Müdürlüğü kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Müdürlüğü kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Department column',
            ],
            'Dili kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Dili kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Language column',
            ],
            'Müdürlükler kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Müdürlükler kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Directorates column',
            ],
            'Müdür kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Müdür kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Manager column',
            ],
            'Kolon Dizi Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Dizi Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Array Type column',
            ],
            'Kolon Arayüz Tetiklemeleri kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Arayüz Tetiklemeleri kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Interface Triggers column',
            ],
            'Toplu Bilgi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Toplu Bilgi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Collective Info column',
            ],
            'Alt Tablo kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Alt Tablo kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Sub Table column',
            ],
            'Uzak Tablo kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Uzak Tablo kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Remote Table column',
            ],
            'Uzak Kolon kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Uzak Kolon kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Remote Column column',
            ],
            'Kolon(lar) kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon(lar) kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column(s) column',
            ],
            'Rapor Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Rapor Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Report Type column',
            ],
            'Kolon Dizisi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Kolon Dizisi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Column Array column',
            ],
            'Rapor kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Rapor kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Report column',
            ],
            'Link Tipi kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Link Tipi kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Link Type column',
            ],
            'Tablo Grubu kolonu varsayilan tablo ilişkisi' => 
            [
                'tr' => 'Tablo Grubu kolonu varsayilan tablo ilişkisi',
                'en' => 'Default table relation for Table Group column',
            ],
        ]
    ],
];