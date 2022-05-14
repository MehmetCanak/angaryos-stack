import { LanguageHelper } from './../helpers/language';
import { BaseHelper } from './../helpers/base';

BaseHelper.preLoad();

if (!String.prototype['tr']) 
{
  String.prototype['tr'] = function() 
  {
    var args = arguments;
    var tr = LanguageHelper.translateWithCache(this);
    return tr.format(args);
  };
}

if (!String.prototype['format']) 
{
  String.prototype['format'] = function() 
  {
    var args = arguments[0];
    return this.replace(/{(\d+)}/g, function(match, number) 
    { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

export const types = [
    
        {
            source: 'list',
            display: 'Liste'.tr(),
            title: 'Liste Yetkisi'.tr(),
            table: 'column_arrays',
            in_form_column: 'column_array_ids',
            description: 'Kullanıcıların kayıtları listelerken hengi kolonları göreceğini seçiniz. Bu yetkiyi boş bırakırsanız kullanıclar kayıtları <span class="badge badge-warning">listeleyemezler</span>'.tr(),
            search: 'tableName:list'
        },
        {
            source: 'create',
            display: 'Ekleme'.tr(),
            title: 'Ekleme Yetkisi'.tr(),
            table: 'column_sets',
            in_form_column: 'column_set_ids',
            description: 'Kayıt ekleme formunu ve görünecek kolonları burada belirleyebilirsiniz. Ekleme yetkisi <span class="badge badge-warning">vermemek</span> için boş geçiniz'.tr(),
            search: 'tableName:create'
        },
        {
            source: 'edit',
            display: 'Güncelleme'.tr(),
            title: 'Güncelleme Yetkisi'.tr(),
            table: 'column_sets',
            in_form_column: 'column_set_ids',
            description: 'Kullanıcı kaydı düzenlerken göreceği formu ve kolonları burada belirleyebilirsiniz. Düzenleme yetkisi <span class="badge badge-warning">vermemek</span> için boş geçiniz.'.tr(),
            search: 'tableName:edit'
        },
        {
            source: 'delete',
            display: 'Silme'.tr(),
            title: 'Silme Yetkisi'.tr(),
            table: 'data_filters',
            in_form_column: 'data_filter_ids',
            description: 'Kullanıcıların varsayılan olarak kayıt <span class="badge badge-warning">silme yetkisi yoktur</span>. Burada, bu yetkiyi ekleyebilir yada kısıtlayabilirsiniz.'.tr(),
            search: 'tableName:delete:'
        },        
        {
            source: 'show',
            display: 'Bilgi Kartı'.tr(),
            title: 'Bilgi Kartı Yetkisi'.tr(),
            table: 'column_sets',
            in_form_column: 'column_set_ids',
            description: 'Burada kullanıcılar için, zengin bilgi kartları tasarlayabilirsniz. Bilgi kartında farklı tablolardan veriler yada tümüyle tablo olabilir.'.tr(),
            search: 'tableName:show'
        },
        {
            source: 'querie',
            display: 'Sorgu'.tr(),
            title: 'Sorgu Yetkisi'.tr(),
            table: 'column_arrays',
            in_form_column: 'column_array_ids',
            description: 'Kullanıcıların listeleme esnasında görüdğü kolonlardan sorgu yapma yetkisi zaten vardır. Özel olarak sorgu yapabilmesini istediğiniz kolonlar varsa buradan ekleyebilirsiniz.'.tr(),
            search: 'tableName:querie'
        },             
        {
            source: 'restore',
            display: 'Geri Yükleme'.tr(),
            title: 'Geri Yükleme Yetkisi'.tr(),
            table: 'data_filters',
            in_form_column: 'data_filter_ids',
            description: 'Kullanıcıların varsayılan olarak kayıt <span class="badge badge-warning">geri yükleme yetkisi yoktur</span>. Burada, bu yetkiyi ekleyebilir yada kısıtlayabilirsiniz.'.tr(),
            search: 'tableName:restore:'
        },
        {
            source: 'deleted',
            display: 'Silinmiş Kayıtlar'.tr(),
            title: 'Silinmiş Kayıtlar Yetkisi'.tr(),
            table: 'column_arrays',
            in_form_column: 'column_array_ids',
            description: 'Kullanıcıların silinmiş kayıtları geri getirebilmesi için bu ekrandan yetki verebilirsiniz.'.tr(),
            search: 'tableName:deleted'
        },
        {
            source: 'export',
            display: 'Dışa aktarma'.tr(),
            title: 'Dışa aktarma Yetkisi'.tr(),
            table: 'data_filters',
            in_form_column: 'data_filter_ids',
            description: 'Kaydı dışa aktarma varsayılan olarak izinli <span class="badge badge-warning">değildir</span>. İsterseniz ekleyebilirsiniz.'.tr(),
            search: 'tableName:export:'
        },
        {
            source: 'filters',
            display: 'Diğer Filtreler'.tr(),
            title: 'Diğer Filtreler Yetkisi'.tr(),
            table: 'data_filters',
            in_form_column: 'data_filter_ids',
            description: 'İsterseniz diğer işlemler için filtreler oluşturabilirsiniz'.tr(),
            search: 'filters:tableName:'
        },
        {
            source: 'other',
            display: 'Diğer Yetkiler'.tr(),
            title: 'Diğer Yetkiler'.tr(),
            table: '',
            in_form_column: '',
            description: 'İsterseniz diğer yetkileri de ekleyebilirsiniz'.tr(),
            search: 'tableName:'
        }
];