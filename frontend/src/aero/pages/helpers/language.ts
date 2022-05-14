import {BaseHelper} from './base';

export abstract class LanguageHelper
{
  private static translatedData = {};
  
  private static translates = 
  {
    "Kaydın Geçmişi": 
    {
        "tr": "Kaydın Geçmişi",
        "en": "Record History"
    },
    "Yetki Oluşturma Yardımcısı": 
    {
        "tr": "Yetki Oluşturma Yardımcısı",
        "en": "Authorization Assistant"
    },
    "XXX Tablosu XXX İçin XXX Yetki Grubu": 
    {
        "tr": "XXX Tablosu XXX İçin XXX Yetki Grubu",
        "en": "Table XXX XXX Authority Group for XXX"
    },
    "Ad": 
    {
        "tr": "Ad",
        "en": "Name"
    },
    "Sunucudan güncel yetkiniz istenecek": 
    {
        "tr": "Sunucudan güncel yetkiniz istenecek",
        "en": "You will be asked for your current authorization from the server"
    },
    "Yetkiniz başarı ile yenilendi": 
    {
        "tr": "Yetkiniz başarı ile yenilendi",
        "en": "Your authorization has been successfully renewed"
    },
    "Tamam": 
    {
        "tr": "Tamam",
        "en": "OK"
    },
    "Bilgi": 
    {
        "tr": "Bilgi",
        "en": "Info"
    },
    "Evet": 
    {
        "tr": "Evet",
        "en": "Yes"
    },
    "Hayır": 
    {
        "tr": "Hayır",
        "en": "No"
    },
    "Açıklama": 
    {
        "tr": "Açıklama",
        "en": "Description"
    },
    "Ekle": 
    {
        "tr": "Ekle",
        "en": "Create"
    },
    "Yetki Arama": 
    {
        "tr": "Yetki Arama",
        "en": "Seeking Authority"
    },
    "Yetki Atanacak": 
    {
        "tr": "Yetki Atanacak",
        "en": "Authority to be assigned"
    },
    "Tüm kullanıcılara ata": 
    {
        "tr": "Tüm kullanıcılara ata",
        "en": "Assign to all users"
    },
    "Şu kullanıcılara ata": 
    {
        "tr": "Şu kullanıcılara ata",
        "en": "Assign to users"
    },
    "Kullanıcılar": 
    {
        "tr": "Kullanıcılar",
        "en": "Users"
    },
    "Müdürlüklerdeki tüm kullanıcılara ata": 
    {
        "tr": "Müdürlüklerdeki tüm kullanıcılara ata",
        "en": "Assign to all users in directorates"
    },
    "Müdürlükler": 
    {
        "tr": "Müdürlükler",
        "en": "Directorates"
    },
    "Şu yetkiye sahip tüm kullanıcılara ata": 
    {
        "tr": "Şu yetkiye sahip tüm kullanıcılara ata",
        "en": "Assign to all users with authorization"
    },
    "Yetkiler": 
    {
        "tr": "Yetkiler",
        "en": "powers"
    },
    "Yetki Oluştur": 
    {
        "tr": "Yetki Oluştur",
        "en": "Create Authorization"
    },
    "İptal": 
    {
        "tr": "İptal",
        "en": "Cancel"
    },
    "Bu gruba ekleyemezsiniz! ({0})": 
    {
        "tr": "Bu gruba ekleyemezsiniz! ({0})",
        "en": "You cannot add to this group! ({0})"
    },
    "Liste": 
    {
        "tr": "Liste",
        "en": "List"
    },
    "Liste Yetkisi": 
    {
        "tr": "Liste Yetkisi",
        "en": "List Authority"
    },
    "Kullanıcıların kayıtları listelerken hengi kolonları göreceğini seçiniz. Bu yetkiyi boş bırakırsanız kullanıclar kayıtları listeleyemezler": 
    {
        "tr": "Kullanıcıların kayıtları listelerken hengi kolonları göreceğini seçiniz. Bu yetkiyi boş bırakırsanız kullanıclar kayıtları listeleyemezler",
        "en": "Select which columns users will see when listing records. If you leave this permission blank, users cannot list records."
    },
    "Ekleme": 
    {
        "tr": "Ekleme",
        "en": "Adding"
    },
    "Ekleme Yetkisi": 
    {
        "tr": "Ekleme Yetkisi",
        "en": "Add Authorization"
    },
    "Kayıt ekleme formunu ve görünecek kolonları burada belirleyebilirsiniz. Ekleme yetkisi vermemek için boş geçiniz": 
    {
        "tr": "Kayıt ekleme formunu ve görünecek kolonları burada belirleyebilirsiniz. Ekleme yetkisi vermemek için boş geçiniz",
        "en": "Here you can specify the record adding form and the columns that will appear. Leave blank to not authorize adding"
    },
    "Güncelleme": 
    {
        "tr": "Güncelleme",
        "en": "update"
    },
    "Güncelleme Yetkisi": 
    {
        "tr": "Güncelleme Yetkisi",
        "en": "Update Authority"
    },
    "Kullanıcı kaydı düzenlerken göreceği formu ve kolonları burada belirleyebilirsiniz. Düzenleme yetkisi vermemek için boş geçiniz.": 
    {
        "tr": "Kullanıcı kaydı düzenlerken göreceği formu ve kolonları burada belirleyebilirsiniz. Düzenleme yetkisi vermemek için boş geçiniz.",
        "en": "Here you can specify the form and columns that the user will see while editing the record. Leave blank to not authorize editing."
    },
    "Silme": 
    {
        "tr": "Silme",
        "en": "Deletion"
    },
    "Silme Yetkisi": 
    {
        "tr": "Silme Yetkisi",
        "en": "Deletion Authority"
    },
    "Kullanıcıların varsayılan olarak kayıt silme yetkisi yoktur. Burada, bu yetkiyi ekleyebilir yada kısıtlayabilirsiniz.": 
    {
        "tr": "Kullanıcıların varsayılan olarak kayıt silme yetkisi yoktur. Burada, bu yetkiyi ekleyebilir yada kısıtlayabilirsiniz.",
        "en": "Users are not authorized to delete records by default . Here you can add or restrict this authorization."
    },
    "Bilgi Kartı": 
    {
        "tr": "Bilgi Kartı",
        "en": "Information Card"
    },
    "Bilgi Kartı Yetkisi": 
    {
        "tr": "Bilgi Kartı Yetkisi",
        "en": "Information Card Authority"
    },
    "Burada kullanıcılar için, zengin bilgi kartları tasarlayabilirsniz. Bilgi kartında farklı tablolardan veriler yada tümüyle tablo olabilir.": 
    {
        "tr": "Burada kullanıcılar için, zengin bilgi kartları tasarlayabilirsniz. Bilgi kartında farklı tablolardan veriler yada tümüyle tablo olabilir.",
        "en": "Here you can design rich flashcards for users. The information card can contain data from different tables or a whole table."
    },
    "Sorgu": 
    {
        "tr": "Sorgu",
        "en": "Query"
    },
    "Sorgu Yetkisi": 
    {
        "tr": "Sorgu Yetkisi",
        "en": "Query Authority"
    },
    "Kullanıcıların listeleme esnasında görüdğü kolonlardan sorgu yapma yetkisi zaten vardır. Özel olarak sorgu yapabilmesini istediğiniz kolonlar varsa buradan ekleyebilirsiniz.": 
    {
        "tr": "Kullanıcıların listeleme esnasında görüdğü kolonlardan sorgu yapma yetkisi zaten vardır. Özel olarak sorgu yapabilmesini istediğiniz kolonlar varsa buradan ekleyebilirsiniz.",
        "en": "Users already have the authority to query from the columns they see during listing. If there are columns that you want to be able to query specifically, you can add them here."
    },
    "Geri Yükleme": 
    {
        "tr": "Geri Yükleme",
        "en": "Restore"
    },
    "Geri Yükleme Yetkisi": 
    {
        "tr": "Geri Yükleme Yetkisi",
        "en": "Restore Authority"
    },
    "Kullanıcıların varsayılan olarak kayıt geri yükleme yetkisi yoktur. Burada, bu yetkiyi ekleyebilir yada kısıtlayabilirsiniz.": 
    {
        "tr": "Kullanıcıların varsayılan olarak kayıt geri yükleme yetkisi yoktur. Burada, bu yetkiyi ekleyebilir yada kısıtlayabilirsiniz.",
        "en": "Users are not authorized to restore registry by default . Here you can add or restrict this authorization."
    },
    "Silinmiş Kayıtlar": 
    {
        "tr": "Silinmiş Kayıtlar",
        "en": "Deleted Records"
    },
    "Silinmiş Kayıtlar Yetkisi": 
    {
        "tr": "Silinmiş Kayıtlar Yetkisi",
        "en": "Deleted Records Authorization"
    },
    "Kullanıcıların silinmiş kayıtları geri getirebilmesi için bu ekrandan yetki verebilirsiniz.": 
    {
        "tr": "Kullanıcıların silinmiş kayıtları geri getirebilmesi için bu ekrandan yetki verebilirsiniz.",
        "en": "You can authorize users to restore deleted records from this screen."
    },
    "Dışa aktarma": 
    {
        "tr": "Dışa aktarma",
        "en": "export"
    },
    "Dışa aktarma Yetkisi": 
    {
        "tr": "Dışa aktarma Yetkisi",
        "en": "Export Authorization"
    },
    "Kaydı dışa aktarma varsayılan olarak izinli değildir. İsterseniz ekleyebilirsiniz.": 
    {
        "tr": "Kaydı dışa aktarma varsayılan olarak izinli değildir. İsterseniz ekleyebilirsiniz.",
        "en": "Record export is not allowed by default . You can add it if you want."
    },
    "Diğer Filtreler": 
    {
        "tr": "Diğer Filtreler",
        "en": "Other Filters"
    },
    "Diğer Filtreler Yetkisi": 
    {
        "tr": "Diğer Filtreler Yetkisi",
        "en": "Other Filters Authorization"
    },
    "İsterseniz diğer işlemler için filtreler oluşturabilirsiniz": 
    {
        "tr": "İsterseniz diğer işlemler için filtreler oluşturabilirsiniz",
        "en": "You can create filters for other actions if you want"
    },
    "Diğer Yetkiler": 
    {
        "tr": "Diğer Yetkiler",
        "en": "Other Powers"
    },
    "İsterseniz diğer yetkileri de ekleyebilirsiniz": 
    {
        "tr": "İsterseniz diğer yetkileri de ekleyebilirsiniz",
        "en": "You can add other permissions if you want."
    },
    "Göstergeler": 
    {
        "tr": "Göstergeler",
        "en": "Dashboards"
    },
    "Gösterge Ekle": 
    {
        "tr": "Gösterge Ekle",
        "en": "Add Dashboard"
    },
    "Göstergeleri sıfırla": 
    {
        "tr": "Göstergeleri sıfırla",
        "en": "Reset Dashboards"
    },
    "Hiçbir gösterge paneliniz yok": 
    {
        "tr": "Hiçbir gösterge paneliniz yok",
        "en": "You don't have any dashboard"
    },
    "kayıt": 
    {
        "tr": "kayıt",
        "en": "records"
    },
    "Toplam kayıt sayısının %{0} 'i": 
    {
        "tr": "Toplam kayıt sayısının %{0} 'i",
        "en": "{0}% of the total number of records"
    },
    "adet": 
    {
        "tr": "adet",
        "en": "number"
    },
    "Tamamlandı": 
    {
        "tr": "Tamamlandı",
        "en": "Completed"
    },
    "Hata oluştu": 
    {
        "tr": "Hata oluştu",
        "en": "An error occurred"
    },
    "Aktarım hiç başlamadı": 
    {
        "tr": "Aktarım hiç başlamadı",
        "en": "Transfer never started"
    },
    "Bekleyin": 
    {
        "tr": "Bekleyin",
        "en": "Wait"
    },
    "Veri Aktarma Yardımcısı": 
    {
        "tr": "Veri Aktarma Yardımcısı",
        "en": "Data Transfer Assistant"
    },
    "Veri Kaynağı": 
    {
        "tr": "Veri Kaynağı",
        "en": "Data Source"
    },
    "Veri Akış Yönü": 
    {
        "tr": "Veri Akış Yönü",
        "en": "Data Flow Direction"
    },
    "Tekrar (cron)": 
    {
        "tr": "Tekrar (cron)",
        "en": "repeat (cron)"
    },
    "Uzak Tablo": 
    {
        "tr": "Uzak Tablo",
        "en": "Remote Table"
    },
    "Otomatik Seçim": 
    {
        "tr": "Otomatik Seçim",
        "en": "Auto Select"
    },
    "Kolonu Kopyala": 
    {
        "tr": "Kolonu Kopyala",
        "en": "Copy Column"
    },
    "Seçimi Temizle": 
    {
        "tr": "Seçimi Temizle",
        "en": "Clear Selection"
    },
    "Kod Ekle": 
    {
        "tr": "Kod Ekle",
        "en": "Add Code"
    },
    "Veri Aktarımı Başlat": 
    {
        "tr": "Veri Aktarımı Başlat",
        "en": "Start Data Transfer"
    },
    "Kayıt No": 
    {
        "tr": "Kayıt No",
        "en": "Record ID"
    },
    "Bir hata oluştu: {0}": 
    {
        "tr": "Bir hata oluştu: {0}",
        "en": "An error occurred: {0}"
    },
    "Kayıt Ekle ({0})": 
    {
        "tr": "Kayıt Ekle ({0})",
        "en": "Add Record ({0})"
    },
    "Kayıt Düzenle ({0})": 
    {
        "tr": "Kayıt Düzenle ({0})",
        "en": "Edit Record ({0})"
    },
    "Panel Anasayfa": 
    {
        "tr": "Panel Anasayfa",
        "en": "Panel Home"
    },
    "Harita": 
    {
        "tr": "Harita",
        "en": "Map"
    },
    "İçe Aktar": 
    {
        "tr": "İçe Aktar",
        "en": "Import"
    },
    "Sunucu Logları": 
    {
        "tr": "Sunucu Logları",
        "en": "Server Logs"
    },
    "Düzenle": 
    {
        "tr": "Düzenle",
        "en": "Edit"
    },
    "Klonla": 
    {
        "tr": "Klonla",
        "en": "Clone"
    },
    "Seçenekler": 
    {
        "tr": "Seçenekler",
        "en": "Options"
    },
    "Klon esnasında bazı hatalar oluştu!": 
    {
        "tr": "Klon esnasında bazı hatalar oluştu!",
        "en": "There were some errors during the clone!"
    },
    "Grup Modu": 
    {
        "tr": "Grup Modu",
        "en": "Group Mode"
    },
    "Yeni Ekle": 
    {
        "tr": "Yeni Ekle",
        "en": "Add New"
    },
    "Detaylı Arama": 
    {
        "tr": "Detaylı Arama",
        "en": "Detailed Search"
    },
    "Raporlar": 
    {
        "tr": "Raporlar",
        "en": "Reports"
    },
    "Standart Rapor": 
    {
        "tr": "Standart Rapor",
        "en": "Standard Report"
    },
    "Kolon Gizle/Aç": 
    {
        "tr": "Kolon Gizle/Aç",
        "en": "Column Hide/Open"
    },
    "Kullanıcıyı taklit et": 
    {
        "tr": "Kullanıcıyı taklit et",
        "en": "Imitate user"
    },
    "Yetki oluşturma yardımcısı": 
    {
        "tr": "Yetki oluşturma yardımcısı",
        "en": "Authorization helper"
    },
    "Bu kayıt e-imza bekliyor": 
    {
        "tr": "Bu kayıt e-imza bekliyor",
        "en": "This record is awaiting e-signature"
    },
    "Bu kolon e-imza bekliyor": 
    {
        "tr": "Bu kolon e-imza bekliyor",
        "en": "This column is waiting for e-signature"
    },
    "e-imza tamamlandı": 
    {
        "tr": "e-imza tamamlandı",
        "en": "e-signature completed"
    },
    "Kayıt Yok": 
    {
        "tr": "Kayıt Yok",
        "en": "No record"
    },
    "{0} Kayıt": 
    {
        "tr": "{0} Kayıt",
        "en": "{0} Record(s)"
    },
    "Kayıt": 
    {
        "tr": "Kayıt",
        "en": "Record"
    },
    "Önceki": 
    {
        "tr": "Önceki",
        "en": "Prev"
    },
    "Sonraki": 
    {
        "tr": "Sonraki",
        "en": "Next"
    },
    "Görevi tetikle": 
    {
        "tr": "Görevi tetikle",
        "en": "Trigger this task"
    },
    "Kolon Göster/Gizle": 
    {
        "tr": "Kolon Göster/Gizle",
        "en": "Show/Hide Column"
    },
    "Tümünü Göster": 
    {
        "tr": "Tümünü Göster",
        "en": "Show all of them"
    },
    "Tümünü Gizle": 
    {
        "tr": "Tümünü Gizle",
        "en": "Hide All"
    },
    "Kolon Grubu Ayarları": 
    {
        "tr": "Kolon Grubu Ayarları",
        "en": "Column Group Settings"
    },
    "Seçiniz": 
    {
        "tr": "Seçiniz",
        "en": "Choose"
    },
    "Hangi formatta indirmek istersiniz? (xlsx, csv yada pdf)": 
    {
        "tr": "Hangi formatta indirmek istersiniz? (xlsx, csv yada pdf)",
        "en": "In what format would you like to download it? (xlsx, csv or pdf)"
    },
    "Toplam": 
    {
        "tr": "Toplam",
        "en": "Total"
    },
    "Ortalama": 
    {
        "tr": "Ortalama",
        "en": "Average"
    },
    "En az": 
    {
        "tr": "En az",
        "en": "Min"
    },
    "En çok": 
    {
        "tr": "En çok",
        "en": "Max"
    },
    "Adet": 
    {
        "tr": "Adet",
        "en": "Number"
    },
    "{0} id 'li kaydı geri yüklemek istediğinize emin misiniz?": 
    {
        "tr": "{0} id 'li kaydı geri yüklemek istediğinize emin misiniz?",
        "en": "Are you sure you want to restore the record with id {0}?"
    },
    "Kayıt silinecek": 
    {
        "tr": "Kayıt silinecek",
        "en": "The record will be deleted"
    },
    "Kaydı simek istediğinize emin misiniz? ID: {0}": 
    {
        "tr": "Kaydı simek istediğinize emin misiniz? ID: {0}",
        "en": "Are you sure you want to delete the recording? ID: {0}"
    },
    "{0} kayıt silinecek": 
    {
        "tr": "{0} kayıt silinecek",
        "en": "{0} records will be deleted"
    },
    "Kayıtları simek istediğinize emin misiniz? ID: {0}": 
    {
        "tr": "Kayıtları simek istediğinize emin misiniz? ID: {0}",
        "en": "Are you sure you want to delete the records? ID: {0}"
    },
    "Tetikleme cevabı": 
    {
        "tr": "Tetikleme cevabı",
        "en": "Trigger response"
    },
    "Tümü": 
    {
        "tr": "Tümü",
        "en": "All"
    },
    "Boş Olanlar": 
    {
        "tr": "Boş Olanlar",
        "en": "Blanks"
    },
    "Boş Olmayanlar": 
    {
        "tr": "Boş Olmayanlar",
        "en": "Non-Blanks"
    },
    "Filtrele": 
    {
        "tr": "Filtrele",
        "en": "Filter"
    },
    "İkinci Tarih": 
    {
        "tr": "İkinci Tarih",
        "en": "Second Date"
    },
    "Buna eşit": 
    {
        "tr": "Buna eşit",
        "en": "Equal to"
    },
    "Bundan önce": 
    {
        "tr": "Bundan önce",
        "en": "Before this"
    },
    "Bundan sonra": 
    {
        "tr": "Bundan sonra",
        "en": "After this"
    },
    "İki tarih arasında": 
    {
        "tr": "İki tarih arasında",
        "en": "between two dates"
    },
    "İkinci Tarih/Saat": 
    {
        "tr": "İkinci Tarih/Saat",
        "en": "Second Date/Time"
    },
    "İki tarih/saat arasında": 
    {
        "tr": "İki tarih/saat arasında",
        "en": "Between two dates/times"
    },
    "Nokta": 
    {
        "tr": "Nokta",
        "en": "Point"
    },
    "Çizgi": 
    {
        "tr": "Çizgi",
        "en": "Line"
    },
    "Alan": 
    {
        "tr": "Alan",
        "en": "Domain"
    },
    "Nokta(lar)": 
    {
        "tr": "Nokta(lar)",
        "en": "Point(s)"
    },
    "Çizgi(ler)": 
    {
        "tr": "Çizgi(ler)",
        "en": "Line(s)"
    },
    "Alan(lar)": 
    {
        "tr": "Alan(lar)",
        "en": "Polygon(s)"
    },
    "Arama": 
    {
        "tr": "Arama",
        "en": "Search"
    },
    "Tümünü Seç": 
    {
        "tr": "Tümünü Seç",
        "en": "Select all"
    },
    "Tümünü Kaldır": 
    {
        "tr": "Tümünü Kaldır",
        "en": "Remove All"
    },
    "En az biri": 
    {
        "tr": "En az biri",
        "en": "at least one"
    },
    "Hepsi": 
    {
        "tr": "Hepsi",
        "en": "All"
    },
    "içinde {0} geçen": 
    {
        "tr": "içinde {0} geçen",
        "en": "in {0}"
    },
    "{0} ile başlayan": 
    {
        "tr": "{0} ile başlayan",
        "en": "starting with {0}"
    },
    "{0} ile biten": 
    {
        "tr": "{0} ile biten",
        "en": "ending with {0}"
    },
    "özel": 
    {
        "tr": "özel",
        "en": "special"
    },
    "İkinci zaman": 
    {
        "tr": "İkinci zaman",
        "en": "second time"
    },
    "İki zaman arasında": 
    {
        "tr": "İki zaman arasında",
        "en": "between two times"
    },
    "Noktalar": 
    {
        "tr": "Noktalar",
        "en": "Points"
    },
    "Çizgiler": 
    {
        "tr": "Çizgiler",
        "en": "Lines"
    },
    "Alanlar": 
    {
        "tr": "Alanlar",
        "en": "fields"
    },
    "Çizimi Bitir": 
    {
        "tr": "Çizimi Bitir",
        "en": "Finish Drawing"
    },
    "Netcad 'den Yükle": 
    {
        "tr": "Netcad 'den Yükle",
        "en": "Load from Netcad"
    },
    "KMZ Yükle": 
    {
        "tr": "KMZ Yükle",
        "en": "Upload KMZ"
    },
    "Nesneler": 
    {
        "tr": "Nesneler",
        "en": "Objects"
    },
    "Dönüştür": 
    {
        "tr": "Dönüştür",
        "en": "Convert"
    },
    "Noktaya Dönüştür": 
    {
        "tr": "Noktaya Dönüştür",
        "en": "Convert to Point"
    },
    "Data Aktar": 
    {
        "tr": "Data Aktar",
        "en": "Transfer Data"
    },
    "Seçilmiş": 
    {
        "tr": "Seçilmiş",
        "en": "Selected"
    },
    "Seçilmemiş": 
    {
        "tr": "Seçilmemiş",
        "en": "Not selected"
    },
    "Panel": 
    {
        "tr": "Panel",
        "en": "Panel"
    },
    "Arama Yap": 
    {
        "tr": "Arama Yap",
        "en": "Search"
    },
    "Katmanlar": 
    {
        "tr": "Katmanlar",
        "en": "Layers"
    },
    "Araç Çubuğu": 
    {
        "tr": "Araç Çubuğu",
        "en": "Toolbar"
    },
    "Nesne Ağacı": 
    {
        "tr": "Nesne Ağacı",
        "en": "Object Tree"
    },
    "Arama Sonuçları": 
    {
        "tr": "Arama Sonuçları",
        "en": "Search Results"
    },
    "Tablo": 
    {
        "tr": "Tablo",
        "en": "Table"
    },
    "Kayıt ID": 
    {
        "tr": "Kayıt ID",
        "en": "Record ID"
    },
    "Özet": 
    {
        "tr": "Özet",
        "en": "summary"
    },
    "**Yalnızca açık olan katmanlar içinde yapılan arama sonuçlarıdır": 
    {
        "tr": "**Yalnızca açık olan katmanlar içinde yapılan arama sonuçlarıdır",
        "en": "**Only search results within open layers"
    },
    "Detay Bilgiler": 
    {
        "tr": "Detay Bilgiler",
        "en": "Detail Information"
    },
    "Seçmek istediğiniz tip": 
    {
        "tr": "Seçmek istediğiniz tip",
        "en": "The type you want to choose"
    },
    "Tip seçiniz": 
    {
        "tr": "Tip seçiniz",
        "en": "Please choose type"
    },
    "Yerel Nesneler": 
    {
        "tr": "Yerel Nesneler",
        "en": "Local Objects"
    },
    "Çizimler": 
    {
        "tr": "Çizimler",
        "en": "drawings"
    },
    "{0} tablosunun {1} kolonuna": 
    {
        "tr": "{0} tablosunun {1} kolonuna",
        "en": "To column {1} of table {0}"
    },
    "Aktarmak istediğiniz tablo ve kolon": 
    {
        "tr": "Aktarmak istediğiniz tablo ve kolon",
        "en": "The table and column you want to transfer"
    },
    "Detay Göster": 
    {
        "tr": "Detay Göster",
        "en": "Show Details"
    },
     "Sil": 
    {
        "tr": "Sil",
        "en": "Delete"
    },
    "Dışa Aktar": 
    {
        "tr": "Dışa Aktar",
        "en": "Export"
    },
    "içinde '{0}' geçen": 
    {
        "tr": "içinde '{0}' geçen",
        "en": "with '{0}' in it"
    },
    "'{0}' ile başlayan": 
    {
        "tr": "'{0}' ile başlayan",
        "en": "starting with '{0}'"
    },
    "'{0}' ile biten": 
    {
        "tr": "'{0}' ile biten",
        "en": "ending with '{0}'"
    },
    "'{0}' a eşit olmayan": 
    {
        "tr": "'{0}' a eşit olmayan",
        "en": "not equal to '{0}'"
    },
    "{0} olmayanlar": 
    {
        "tr": "{0} olmayanlar",
        "en": "those without {0}"
    },
    "{0} 'den küçük olanlar": 
    {
        "tr": "{0} 'den küçük olanlar",
        "en": "Less than {0}"
    },
    "{0} 'den büyük olanlar": 
    {
        "tr": "{0} 'den büyük olanlar",
        "en": "greater than {0}"
    },
    "yada": 
    {
        "tr": "yada",
        "en": "or"
    },
    "ve": 
    {
        "tr": "ve",
        "en": "and"
    },
    "{0} 'dan önce": 
    {
        "tr": "{0} 'dan önce",
        "en": "before {0}"
    },
    "{0} 'dan sonra": 
    {
        "tr": "{0} 'dan sonra",
        "en": "after {0}"
    },
    "{0} ve {1} arasında": 
    {
        "tr": "{0} ve {1} arasında",
        "en": "between {0} and {1}"
    },
    "Herhangi bir alanla kesişen": 
    {
        "tr": "Herhangi bir alanla kesişen",
        "en": "intersecting any area"
    },
    "Tüm alanlarda aynı anda kesişen": 
    {
        "tr": "Tüm alanlarda aynı anda kesişen",
        "en": "intersecting at the same time in all areas"
    },
    "[Boş]": 
    {
        "tr": "[Boş]",
        "en": "[null]"
    },
    "Aktif": 
    {
        "tr": "Aktif",
        "en": "Active"
    },
    "Pasif": 
    {
        "tr": "Pasif",
        "en": "Passive"
    },
    "Erkek": 
    {
        "tr": "Erkek",
        "en": "Male"
    },
    "Bekleyin...": 
    {
        "tr": "Bekleyin...",
        "en": "Wait..."
    },
    "Tamamlandı...": 
    {
        "tr": "Tamamlandı...",
        "en": "Completed..."
    },
    "Emin misiniz?": 
    {
        "tr": "Emin misiniz?",
        "en": "Are you sure?"
    },
    "Bu nesneyi ekleyebilmek için eski nesneler silinecek!": 
    {
        "tr": "Bu nesneyi ekleyebilmek için eski nesneler silinecek!",
        "en": "Old objects will be deleted before you can add this object!"
    },
    "İlk kurulum": 
    {
        "tr": "İlk kurulum",
        "en": "Initial setup"
    },
    "Veritabanı daha önce kurulmamış. Şimdi ilk kurulumu yapmak ister misiniz? Dikkat edin! bu işlem tüm veritabanını siler yeniden oluşturur!": 
    {
        "tr": "Veritabanı daha önce kurulmamış. Şimdi ilk kurulumu yapmak ister misiniz? Dikkat edin! bu işlem tüm veritabanını siler yeniden oluşturur!",
        "en": "The database has not been set up before. Would you like to do the initial setup now? Be careful! This operation deletes and recreates the entire database!"
    },
    "Evet şimdi yapacağım!": 
    {
        "tr": "Evet şimdi yapacağım!",
        "en": "Yes I will now!"
    },
    "Tebrikler kurulum başarılı!": 
    {
        "tr": "Tebrikler kurulum başarılı!",
        "en": "Congratulations, the installation was successful!"
    },
    "Başarılı!": 
    {
        "tr": "Başarılı!",
        "en": "Successful!"
    },
    "Malesef veritabanı başlatılamadı! Tarayıcınızın geliştirici araçlarından network geçmişinize bakabilir yada destek sayfamızı ziyaret edebilirsiniz.": 
    {
        "tr": "Malesef veritabanı başlatılamadı! Tarayıcınızın geliştirici araçlarından network geçmişinize bakabilir yada destek sayfamızı ziyaret edebilirsiniz.",
        "en": "Malesef veritabanı başlatılamadı! Tarayıcınızın geliştirici araçlarından network geçmişinize bakabilir yada destek sayfamızı ziyaret edebilirsiniz."
    },
    "Yapılamadı!": 
    {
        "tr": "Yapılamadı!",
        "en": "Failed!"
    },
    "Mail yada şifre hatalı": 
    {
        "tr": "Mail yada şifre hatalı",
        "en": "Email or password is incorrect"
    },
    "Yetkiniz Yok!": 
    {
        "tr": "Yetkiniz Yok!",
        "en": "You are not authorized!"
    },
    "Kullanıcı Girişi": 
    {
        "tr": "Kullanıcı Girişi",
        "en": "user login"
    },
    "E-mail yada Kimlik No": 
    {
        "tr": "E-mail yada Kimlik No",
        "en": "E-mail or ID No."
    },
    "Şifre": 
    {
        "tr": "Şifre",
        "en": "Password"
    },
    "Şifremi Unuttum": 
    {
        "tr": "Şifremi Unuttum",
        "en": "I forgot my password"
    },
    "Giriş Yap": 
    {
        "tr": "Giriş Yap",
        "en": "Login"
    },
    "KVKK Aydınlatma Metni": 
    {
        "tr": "KVKK Aydınlatma Metni",
        "en": "KVKK Illumination Text"
    },
    "Gizlilik Politikamız": 
    {
        "tr": "Gizlilik Politikamız",
        "en": "Our Privacy Policy"
    },
    "Şifre Hatırlatıcı": 
    {
        "tr": "Şifre Hatırlatıcı",
        "en": "Password Reminder"
    },
    "E-mail yada TC No": 
    {
        "tr": "E-mail yada TC No",
        "en": "E-mail or TR No."
    },
    "Şifremi Sıfırla": 
    {
        "tr": "Şifremi Sıfırla",
        "en": "Reset My Password"
    },
    "Mail boş geçilemez": 
    {
        "tr": "Mail boş geçilemez",
        "en": "Email cannot be empty"
    },
    "Veri Sorumlusu": 
    {
        "tr": "Veri Sorumlusu",
        "en": "Data Controller"
    },
    "Kişisel Verilerin İşlenme Amacı": 
    {
        "tr": "Kişisel Verilerin İşlenme Amacı",
        "en": "Purpose of Processing Personal Data"
    },
    "KVKK’nın 4., 5. ve 6. maddeleri uyarınca kişisel verileriniz;": 
    {
        "tr": "KVKK’nın 4., 5. ve 6. maddeleri uyarınca kişisel verileriniz;",
        "en": "Your personal data in accordance with Articles 4, 5 and 6 of the KVKK;"
    },
    "Hukuka ve dürüstlük kurallarına uygun": 
    {
        "tr": "Hukuka ve dürüstlük kurallarına uygun",
        "en": "Compliant with the law and honesty rules"
    },
    "Doğru ve gerektiğinde güncel": 
    {
        "tr": "Doğru ve gerektiğinde güncel",
        "en": "Accurate and up-to-date when needed"
    },
    "Belirli, açık ve meşru amaçlar için": 
    {
        "tr": "Belirli, açık ve meşru amaçlar için",
        "en": "For specific, explicit and legitimate purposes"
    },
    "İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü": 
    {
        "tr": "İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü",
        "en": "Relating to the purpose for which they are processed, limited and restrained"
    },
    "İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme": 
    {
        "tr": "İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme",
        "en": "To be stored for the period required by the relevant legislation or for the purpose for which they are processed."
    },
    "kurallarına uygun bir şekilde Kütahya İl Özel İdaresi\’nin faaliyetleri ile bağlantılı olacak şekilde işlenecektir.": 
    {
        "tr": "kurallarına uygun bir şekilde Kütahya İl Özel İdaresi\’nin faaliyetleri ile bağlantılı olacak şekilde işlenecektir.",
        "en": "It will be processed in accordance with the rules of Kütahya Special Provincial Administration in connection with the activities."
    },
    "Kişisel Verilerin Aktarımı": 
    {
        "tr": "Kişisel Verilerin Aktarımı",
        "en": "Transfer of Personal Data"
    },
    "KVKK’nın 8. ve 9. maddeleri uyarınca kişisel verileriniz yukarıda sayılan amaçlar dahilinde,": 
    {
        "tr": "KVKK’nın 8. ve 9. maddeleri uyarınca kişisel verileriniz yukarıda sayılan amaçlar dahilinde,",
        "en": "Pursuant to Articles 8 and 9 of the KVKK, your personal data is for the purposes listed above,"
    },
    "hukuk kişileri ya da yurt dışı ülkeler) aktarılabilecektir.": 
    {
        "tr": "hukuk kişileri ya da yurt dışı ülkeler) aktarılabilecektir.",
        "en": "legal persons or foreign countries) can be transferred."
    },
    "Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi": 
    {
        "tr": "Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi",
        "en": "Personal Data Collection Method and Legal Reason"
    },
    "Kişisel verileriniz, Kütahya İl Özel İdaresi tarafından": 
    {
        "tr": "Kişisel verileriniz, Kütahya İl Özel İdaresi tarafından",
        "en": "Your personal data is processed by Kütahya Special Provincial Administration."
    },
    "Burs/Staj/Yurt Başvuru Formları": 
    {
        "tr": "Burs/Staj/Yurt Başvuru Formları",
        "en": "Scholarship/Internship/Dormitory Application Forms"
    },
    "Kamu Bilgi Sistemi ve Kütahya İl Özel İdaresi Web Siteleri İletişim Formları": 
    {
        "tr": "Kamu Bilgi Sistemi ve Kütahya İl Özel İdaresi Web Siteleri İletişim Formları",
        "en": "Public Information System and Kütahya Special Provincial Administration Websites Contact Forms"
    },
    "Kamu Bilgi Sistemi ve Kütahya İl Özel İdaresi Web Siteleri E-Bülten Kayıt Formları": 
    {
        "tr": "Kamu Bilgi Sistemi ve Kütahya İl Özel İdaresi Web Siteleri E-Bülten Kayıt Formları",
        "en": "Public Information System and Kütahya Special Provincial Administration Websites E-Bulletin Registration Forms"
    },
    "Hibe Programı Başvuru Formları": 
    {
        "tr": "Hibe Programı Başvuru Formları",
        "en": "Grant Program Application Forms"
    },
    "İş Başvuru Formları": 
    {
        "tr": "İş Başvuru Formları",
        "en": "Job Application Forms"
    },
    "Metninde belirtilen amaçlarla da toplanabilmekte, işlenebilmekte ve aktarılabilmektedir.": 
    {
        "tr": "Metninde belirtilen amaçlarla da toplanabilmekte, işlenebilmekte ve aktarılabilmektedir.",
        "en": "It can also be collected, processed and transferred for the purposes specified in the text."
    },
    "Kişisel Veri Sahibinin Hakları": 
    {
        "tr": "Kişisel Veri Sahibinin Hakları",
        "en": "Rights of Personal Data Owner"
    },
    "KVKK’nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili;": 
    {
        "tr": "KVKK’nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili;",
        "en": "In accordance with Article 11 of the KVKK, everyone can apply to the data controller;"
    },
    "a) Kişisel verilerinin işlenip işlenmediğini öğrenme,": 
    {
        "tr": "a) Kişisel verilerinin işlenip işlenmediğini öğrenme,",
        "en": "a) Learning whether their personal data is processed or not,"
    },
    "b) Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,": 
    {
        "tr": "b) Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,",
        "en": "b) If personal data has been processed, requesting information about it,"
    },
    "ç) Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,": 
    {
        "tr": "ç) Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,",
        "en": "ç) To know the third parties to whom personal data is transferred in the country or abroad,"
    },
    "d) Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,": 
    {
        "tr": "d) Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
        "en": "d) Requesting correction of personal data in case of incomplete or incorrect processing,"
    },
    "e) KVKK 7. maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok": 
    {
        "tr": "e) KVKK 7. maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok",
        "en": "e) Deletion or destruction of personal data within the framework of the conditions stipulated in Article 7 of the KVKK"
    },
    "Formda hata var!": 
    {
        "tr": "Formda hata var!",
        "en": "There is an error in the form!"
    },
    "Yazan": 
    {
        "tr": "Yazan",
        "en": "by"
    },
    "Devamını Oku": 
    {
        "tr": "Devamını Oku",
        "en": "Read more"
    },
    "Nasıl yardımcı olabilirim?": 
    {
        "tr": "Nasıl yardımcı olabilirim?",
        "en": "How can I help you?"
    },
    "Kısayollar": 
    {
        "tr": "Kısayollar",
        "en": "Shortcuts"
    },
    "Çıkış Yap": 
    {
        "tr": "Çıkış Yap",
        "en": "Sign out"
    },
    "Elektronik İmza": 
    {
        "tr": "Elektronik İmza",
        "en": "Electronic signature"
    },
    "E-imza şifreniz": 
    {
        "tr": "E-imza şifreniz",
        "en": "Your e-signature password"
    },
    "Hatırla": 
    {
        "tr": "Hatırla",
        "en": "Remember"
    },
    "Tümünü İmzala": 
    {
        "tr": "Tümünü İmzala",
        "en": "Sign All"
    },
    "İmzala": 
    {
        "tr": "İmzala",
        "en": "sign it"
    },
    "İmzalamayı Reddet": 
    {
        "tr": "İmzalamayı Reddet",
        "en": "Decline to Sign"
    },
    "E-imza boş geçilemez": 
    {
        "tr": "E-imza boş geçilemez",
        "en": "E-signature cannot be empty"
    },
    "Gizlilik Politikası": 
    {
        "tr": "Gizlilik Politikası",
        "en": "Privacy Policy"
    },
    "Web sitemize girilen bilgilerin güvenliği açısından kurumumuz sistem ve internet altyapısı en güvenilir seviyede tutularak gerekli önlemler alınmıştır. Sitemize kişisel bilgi girilmesi durumunda bu bilgiler Bilgi Güvenliği Yönetim Sistemi kapsamında güvenli bir şekilde korunmaktadır.": 
    {
        "tr": "Web sitemize girilen bilgilerin güvenliği açısından kurumumuz sistem ve internet altyapısı en güvenilir seviyede tutularak gerekli önlemler alınmıştır. Sitemize kişisel bilgi girilmesi durumunda bu bilgiler Bilgi Güvenliği Yönetim Sistemi kapsamında güvenli bir şekilde korunmaktadır.",
        "en": "In terms of the security of the information entered on our website, the system and internet infrastructure of our institution are kept at the most reliable level and necessary precautions have been taken. If personal information is entered on our site, this information is securely protected within the scope of the Information Security Management System."
    },
    "Kişisel bilgiler yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları, yasal istisnalar ve kişinin kendine ait kişisel bilgilerini üçüncü kişilere vermek yönündeki açık yazılı onayı dışında, hiçbir şekilde üçüncü kişilere verilmez. Ancak, Kütahya Valiliği meydana gelebilecek bir sahtecilik/dolandırıcılık ya da herhangi bir soruşturma ya da bilgi güvenliği ihlali konusunda yasal merciler ve diğer ilgili kurumlar ile işbirliği yapabilir ve yasalar tarafından gerekli görülen hallerde ya da adli makamların talebini yerine getirmek maksadıyla, elde edilen her türlü bilgiyi (kişisel veriler dahil) ifşa etme hakkını da saklı tutar.": 
    {
        "tr": "Kişisel bilgiler yasalara uygun olarak verilmiş Mahkeme/Savcılık kararları, yasal istisnalar ve kişinin kendine ait kişisel bilgilerini üçüncü kişilere vermek yönündeki açık yazılı onayı dışında, hiçbir şekilde üçüncü kişilere verilmez. Ancak, Kütahya Valiliği meydana gelebilecek bir sahtecilik/dolandırıcılık ya da herhangi bir soruşturma ya da bilgi güvenliği ihlali konusunda yasal merciler ve diğer ilgili kurumlar ile işbirliği yapabilir ve yasalar tarafından gerekli görülen hallerde ya da adli makamların talebini yerine getirmek maksadıyla, elde edilen her türlü bilgiyi (kişisel veriler dahil) ifşa etme hakkını da saklı tutar.",
        "en": "Personal information is not given to third parties in any way, except for the court/prosecutor's decisions made in accordance with the law, legal exceptions and the express written consent of the person to give his/her personal information to third parties. However, the Governorship of Kütahya may cooperate with legal authorities and other relevant institutions regarding any fraud/fraud or any investigation or violation of information security, and in cases deemed necessary by law or in order to fulfill the request of judicial authorities, any information obtained. (including personal data) also reserves the right to disclose."
    },
    "{0} tablosunda {1} numaralı kayıt": 
    {
        "tr": "{0} tablosunda {1} numaralı kayıt",
        "en": "Record {1} in table {0}"
    },
    "Arama yapılacak tabloları seçiniz": 
    {
        "tr": "Arama yapılacak tabloları seçiniz",
        "en": "Select the tables to search"
    },
    "Hiçbirini Seçme": 
    {
        "tr": "Hiçbirini Seçme",
        "en": "Select None"
    },
    "Kısayollarımı Düzenle": 
    {
        "tr": "Kısayollarımı Düzenle",
        "en": "Edit My Shortcuts"
    },
    "Standart Link": 
    {
        "tr": "Standart Link",
        "en": "Standard Link"
    },
    "Ek Link": 
    {
        "tr": "Ek Link",
        "en": "Additional Link"
    },
    "{0}. Görevi Tetikle": 
    {
        "tr": "{0}. Görevi Tetikle",
        "en": "{0}. Trigger Task"
    },
    "Görev Tetikleme": 
    {
        "tr": "Görev Tetikleme",
        "en": "Task Trigger"
    },
    "{0} Listesi": 
    {
        "tr": "{0} Listesi",
        "en": "{0} List"
    },
    "{0} Yeni Kayıt Ekle": 
    {
        "tr": "{0} Yeni Kayıt Ekle",
        "en": "{0} Add New Record"
    },
    "Tetikleme başarılı:": 
    {
        "tr": "Tetikleme başarılı:",
        "en": "Trigger successful:"
    },
    "Beklenmedik cevap geldi!": 
    {
        "tr": "Beklenmedik cevap geldi!",
        "en": "The unexpected answer has arrived!"
    },
    "Hata": 
    {
        "tr": "Hata",
        "en": "Error"
    },
    "Yetkiler başarı ile atandı!": 
    {
        "tr": "Yetkiler başarı ile atandı!",
        "en": "Authorizations have been successfully assigned!"
    },
    "Başarılı": 
    {
        "tr": "Başarılı",
        "en": "Successful"
    },
    "Veri aktarma görevi başarı ile oluşturuldu!": 
    {
        "tr": "Veri aktarma görevi başarı ile oluşturuldu!",
        "en": "Data transfer task created successfully!"
    },
    "Başarı": 
    {
        "tr": "Başarı",
        "en": "Success"
    },
    "Formda bazı hatalar var! Kontrol edin.": 
    {
        "tr": "Formda bazı hatalar var! Kontrol edin.",
        "en": "There are some errors in the form! Check."
    },
    "Kaydı güncellemek için önce geri yüklemelisiniz": 
    {
        "tr": "Kaydı güncellemek için önce geri yüklemelisiniz",
        "en": "To update the record, you must first restore it"
    },
    "Klonlama yapıldı ama yeni kayıt bilgisi alınırken beklenmedik bir cevap geldi!": 
    {
        "tr": "Klonlama yapıldı ama yeni kayıt bilgisi alınırken beklenmedik bir cevap geldi!",
        "en": "Cloning done but unexpected response while retrieving new registration information!"
    },
    "Geçersiz doya tipi!": 
    {
        "tr": "Geçersiz doya tipi!",
        "en": "Invalid file type!"
    },
    "Sunucudan 'multi-select' için data getirilirken hata oluştu": 
    {
        "tr": "Sunucudan 'multi-select' için data getirilirken hata oluştu",
        "en": "Error fetching data for 'multi-select' from server"
    },
    "Sunucudan selectElement için data seti alınamadı!": 
    {
        "tr": "Sunucudan selectElement için data seti alınamadı!",
        "en": "Failed to get dataset for selectElement from server!"
    },
    "Kolon listesi alınırken bir hata oluştu": 
    {
        "tr": "Kolon listesi alınırken bir hata oluştu",
        "en": "An error occurred while retrieving the column list"
    },
    "Beklenmedik bir hata oluştu": 
    {
        "tr": "Beklenmedik bir hata oluştu",
        "en": "An unexpected error has occurred"
    },
    "Haritada tarih/saat tipi için geçersiz filtre tipi:": 
    {
        "tr": "Haritada tarih/saat tipi için geçersiz filtre tipi:",
        "en": "Invalid filter type for date/time type in map:"
    },
    "Haritada sayı tipi için geçersiz filtre tipi:": 
    {
        "tr": "Haritada sayı tipi için geçersiz filtre tipi:",
        "en": "Invalid filter type for number type in map:"
    },
    "Haritada metin tipi için \"özel\" filtre kullanılamaz!": 
    {
        "tr": "Haritada metin tipi için \"özel\" filtre kullanılamaz!",
        "en": "The \"custom\" filter cannot be used for text type on the map!"
    },
    "Geçersiz Filtre": 
    {
        "tr": "Geçersiz Filtre",
        "en": "Invalid Filter"
    },
    "Haritada metin tipi için geçersiz filtre tipi:": 
    {
        "tr": "Haritada metin tipi için geçersiz filtre tipi:",
        "en": "Invalid filter type for text type in map:"
    },
    "Filtre varken taşıma yapılamaz!": 
    {
        "tr": "Filtre varken taşıma yapılamaz!",
        "en": "It is not possible to transport with the filter!"
    },
    "Bu katmanın lejantı yok!": 
    {
        "tr": "Bu katmanın lejantı yok!",
        "en": "This layer has no legend!"
    },
    "Lejant bulunamadı": 
    {
        "tr": "Lejant bulunamadı",
        "en": "Legend not found"
    },
    "Arama yapmak için bir hiç bir tablo yetkiniz yok!": 
    {
        "tr": "Arama yapmak için bir hiç bir tablo yetkiniz yok!",
        "en": "You do not have any permissions to search a table!"
    },
    "Bu özellik henüz mobil uygulamar için geçerli değil!": 
    {
        "tr": "Bu özellik henüz mobil uygulamar için geçerli değil!",
        "en": "This feature is not available for mobile apps yet!"
    },
    "Bu özellik yalnızca mobil uygulamada kullanılabilir!": 
    {
        "tr": "Bu özellik yalnızca mobil uygulamada kullanılabilir!",
        "en": "This feature is only available in the mobile app!"
    },
    "Malesef telefonunuzda NFC özelliği yok!": 
    {
        "tr": "Malesef telefonunuzda NFC özelliği yok!",
        "en": "Unfortunately your phone does not have NFC feature!"
    },
    "Şuan NFC kapalı. Ayarlara giderek önce onu açınız!": 
    {
        "tr": "Şuan NFC kapalı. Ayarlara giderek önce onu açınız!",
        "en": "NFC is now turned off. Go to settings and turn it on first!"
    },
    "Konumunuz alınamadı! Cihazının konum ayarının açık olduğundan emin olun.": 
    {
        "tr": "Konumunuz alınamadı! Cihazının konum ayarının açık olduğundan emin olun.",
        "en": "Could not get your location! Make sure your device's location setting is turned on."
    },
    "Konum Alınamadı": 
    {
        "tr": "Konum Alınamadı",
        "en": "Failed to Get Location"
    },
    "Sunucu servisleri şuan çalışmıyor olabilir. Sorun yaşarsanız bir süre sonra tekrar deneyin.": 
    {
        "tr": "Sunucu servisleri şuan çalışmıyor olabilir. Sorun yaşarsanız bir süre sonra tekrar deneyin.",
        "en": "Server services may not be running right now. If you have problems, try again after a while."
    },
    "Sunucuya erişilemedi": 
    {
        "tr": "Sunucuya erişilemedi",
        "en": "The server could not be reached"
    },
    "Sunucuyla iletişimde bir hata oldu:": 
    {
        "tr": "Sunucuyla iletişimde bir hata oldu:",
        "en": "There was an error communicating with the server:"
    },
    "İmzalama reddederken hata oluştu!": 
    {
        "tr": "İmzalama reddederken hata oluştu!",
        "en": "Error refusing to sign!"
    },
    "Mail adresinize gönderilen link ile şifre sıfırlama yapabilirsiniz.": 
    {
        "tr": "Mail adresinize gönderilen link ile şifre sıfırlama yapabilirsiniz.",
        "en": "You can reset your password with the link sent to your e-mail address."
    },
    "Şifre Hatırlatma": 
    {
        "tr": "Şifre Hatırlatma",
        "en": "Password Reminder"
    },
    "Bu portaldan en iyi şekilde faydalanabilmeniz için çerezler kullanılmaktadır. Bu portala giriş yaparak çerez kullanımını kabul etmiş sayılıyorsunuz. Daha fazla bilgi için 'Güvenlik politikası' ve 'Aydınlatma Metni' sayfamızı ziyaret edebilirsiniz": 
    {
        "tr": "Bu portaldan en iyi şekilde faydalanabilmeniz için çerezler kullanılmaktadır. Bu portala giriş yaparak çerez kullanımını kabul etmiş sayılıyorsunuz. Daha fazla bilgi için 'Güvenlik politikası' ve 'Aydınlatma Metni' sayfamızı ziyaret edebilirsiniz",
        "en": "Cookies are used to make the most of this portal. By logging into this portal, you are deemed to have accepted the use of cookies. For more information you can visit our 'Security policy' and 'Lighting Text' page"
    },
    "Çerez ve Lokal Data Kullanımı": 
    {
        "tr": "Çerez ve Lokal Data Kullanımı",
        "en": "Use of Cookies and Local Data"
    },
    "Ad soyad boş geçilemez!": 
    {
        "tr": "Ad soyad boş geçilemez!",
        "en": "Name and surname cannot be blank!"
    },
    "Telefon numarası doğru girilmelidir!": 
    {
        "tr": "Telefon numarası doğru girilmelidir!",
        "en": "Phone number must be entered correctly!"
    },
    "E-mail doğru girilmelidir!": 
    {
        "tr": "E-mail doğru girilmelidir!",
        "en": "E-mail must be entered correctly!"
    },
    "Açıklama en az 10 karakter olmalıdır!": 
    {
        "tr": "Açıklama en az 10 karakter olmalıdır!",
        "en": "Description must be at least 10 characters!"
    },
    "Beklenmedik cevap geldi!!": 
    {
        "tr": "Beklenmedik cevap geldi!!",
        "en": "Unexpected reply!!"
    },
    "Beklenmedik bir hata oluştu! (catch)": 
    {
        "tr": "Beklenmedik bir hata oluştu! (catch)",
        "en": "An unexpected error has occurred! (catch)"
    },
    "Geri bildiriminiz başarı ile iletilmiştir": 
    {
        "tr": "Geri bildiriminiz başarı ile iletilmiştir",
        "en": "Your feedback has been sent successfully"
    },
    "Sunucudan haberler alınırken bir hata oluştu! Lütfen daha sonra tekrar deneyin.": 
    {
        "tr": "Sunucudan haberler alınırken bir hata oluştu! Lütfen daha sonra tekrar deneyin.",
        "en": "An error occurred while receiving news from the server! Please try again later."
    },
    "Aradığınız haber bulunamadı!": 
    {
        "tr": "Aradığınız haber bulunamadı!",
        "en": "The news you were looking for was not found!"
    },
    "Sunucudan haber alınırken bir hata oluştu! Lütfen daha sonra tekrar deneyin.": 
    {
        "tr": "Sunucudan haber alınırken bir hata oluştu! Lütfen daha sonra tekrar deneyin.",
        "en": "An error occurred while receiving news from the server! Please try again later."
    },
    "İmzalama başarılı": 
    {
        "tr": "İmzalama başarılı",
        "en": "Signing successful"
    },
    "İmzalama esnasında hata oluştu!": 
    {
        "tr": "İmzalama esnasında hata oluştu!",
        "en": "Error occurred while signing!"
    },
    "Hata!": 
    {
        "tr": "Hata!",
        "en": "Error!"
    },
    "E-imza programına erişim yok! Programı başka bir uygulama yada sekme kullanıyor olabilir. Tüm sekmeleri ve uygulamarı kapatıp bu pencereyi yenilemeyi deneyin.": 
    {
        "tr": "E-imza programına erişim yok! Programı başka bir uygulama yada sekme kullanıyor olabilir. Tüm sekmeleri ve uygulamarı kapatıp bu pencereyi yenilemeyi deneyin.",
        "en": "No access to the e-signature program! The program may be using another application or tab. Try closing all tabs and applications and refreshing this window."
    },
    "Beklenmedik bir hata oluştu!": 
    {
        "tr": "Beklenmedik bir hata oluştu!",
        "en": "An unexpected error has occurred!"
    },
    "İçe Aktarma": 
    {
        "tr": "İçe Aktarma",
        "en": "Import"
    },
    "İçe aktarma tamamlandı ama bazı hatalar oluştu!": 
    {
        "tr": "İçe aktarma tamamlandı ama bazı hatalar oluştu!",
        "en": "Import completed but some errors occured!"
    },
    "İşlem başarı ile gerçekleştirildi": 
    {
        "tr": "İşlem başarı ile gerçekleştirildi",
        "en": "Transaction performed successfully"
    },
    "Aramak için birşeyler yazmalısınız!": 
    {
        "tr": "Aramak için birşeyler yazmalısınız!",
        "en": "You have to type something to search!"
    },
    "Ad boş geçilemez!": 
    {
        "tr": "Ad boş geçilemez!",
        "en": "Name cannot be empty!"
    },
    "Bir hata oluştu": 
    {
        "tr": "Bir hata oluştu",
        "en": "Something went wrong"
    },
    "Sonuç bulunamadı": 
    {
        "tr": "Sonuç bulunamadı",
        "en": "There were no results"
    },
    "Bazı göstergeler için data alınamadı!": 
    {
        "tr": "Bazı göstergeler için data alınamadı!",
        "en": "Failed to get data for some dashboard(s)!"
    },
    "Güncellenme Zamanı kolonu boş geçilemez!": 
    {
        "tr": "Güncellenme Zamanı kolonu boş geçilemez!",
        "en": "Updated column cannot be empty!"
    },
    "Bir sorun oluştu": 
    {
        "tr": "Bir sorun oluştu",
        "en": "There is a problem"
    },
    "Kayıt başarılı": 
    {
        "tr": "Kayıt başarılı",
        "en": "Save Successful"
    },
    "Tetikleme fonksiyonu yok:": 
    {
        "tr": "Tetikleme fonksiyonu yok:",
        "en": "No trigger function:"
    },
    "Bir kayıt seçmelisiniz!": 
    {
        "tr": "Bir kayıt seçmelisiniz!",
        "en": "You must choose a recording!"
    },
    "Bir sorun oluştu!": 
    {
        "tr": "Bir sorun oluştu!",
        "en": "There is a problem!"
    },
    "Seçili eleman getirilemedi!": 
    {
        "tr": "Seçili eleman getirilemedi!",
        "en": "Failed to fetch selected element!"
    },
    "Klonlama başarılı": 
    {
        "tr": "Klonlama başarılı",
        "en": "Cloning successful"
    },
    "Kopyalandı!": 
    {
        "tr": "Kopyalandı!",
        "en": "Copied!"
    },
    "Kolon tipi uyumsuz!": 
    {
        "tr": "Kolon tipi uyumsuz!",
        "en": "Column type incompatible!"
    },
    "Yapıştırıldı!": 
    {
        "tr": "Yapıştırıldı!",
        "en": "Glued on!"
    },
    "Düzenleme modu aktif": 
    {
        "tr": "Düzenleme modu aktif",
        "en": "Edit mode is active"
    },
    "Düzenleme modu pasif": 
    {
        "tr": "Düzenleme modu pasif",
        "en": "Edit mode is disabled"
    },
    "Canlı veri modu aktif": 
    {
        "tr": "Canlı veri modu aktif",
        "en": "Live data mode active"
    },
    "Canlı veri modu pasif": 
    {
        "tr": "Canlı veri modu pasif",
        "en": "Live data mode inactive"
    },
    "Geri yükleme başarılı": 
    {
        "tr": "Geri yükleme başarılı",
        "en": "Restore successful"
    },
    "Silme başarılı": 
    {
        "tr": "Silme başarılı",
        "en": "Deletion successful"
    },
    "Veri aktarılacak kayıt olarak belirlendi": 
    {
        "tr": "Veri aktarılacak kayıt olarak belirlendi",
        "en": "Data set as record to be transferred"
    },
    "Aranan tipte nesne bulunamadı!": 
    {
        "tr": "Aranan tipte nesne bulunamadı!",
        "en": "The object of the requested type was not found!"
    },
    "Bu kolona birden fazla nesne ekleyemezsiniz!": 
    {
        "tr": "Bu kolona birden fazla nesne ekleyemezsiniz!",
        "en": "You cannot add more than one object to this column!"
    },
    "Bulunan bazı sonuçlar zaten listenizde": 
    {
        "tr": "Bulunan bazı sonuçlar zaten listenizde",
        "en": "Some results found are already in your list"
    },
    "Aradığınız nesneler getirilirken hata oluştu!": 
    {
        "tr": "Aradığınız nesneler getirilirken hata oluştu!",
        "en": "An error occurred while fetching the objects you are looking for!"
    },
    "Tıklanılan noktadaki nesneler getirilirken hata oluştu!": 
    {
        "tr": "Tıklanılan noktadaki nesneler getirilirken hata oluştu!",
        "en": "An error occurred while fetching objects at the clicked point!"
    },
    "Aktarmak için seçilmiş nesne yok!": 
    {
        "tr": "Aktarmak için seçilmiş nesne yok!",
        "en": "No objects selected to transfer!"
    },
    "Önce bir kaydı veri aktarılacak kayıt olarak belirlemelisiniz!": 
    {
        "tr": "Önce bir kaydı veri aktarılacak kayıt olarak belirlemelisiniz!",
        "en": "You must first specify a record as the record to be transferred!"
    },
    "Bu tür için yetiniz bulunan bir tablo yok": 
    {
        "tr": "Bu tür için yetiniz bulunan bir tablo yok",
        "en": "You do not have a table for this type"
    },
    "Aktarım esnasında bir hata oluştu. Aktarım durduruldu": 
    {
        "tr": "Aktarım esnasında bir hata oluştu. Aktarım durduruldu",
        "en": "An error occurred during the transfer. Transfer stopped"
    },
    "Aktarım başarılı!": 
    {
        "tr": "Aktarım başarılı!",
        "en": "Transfer successful!"
    },
    "Bu kaydın bilgi kartı gösterilemez": 
    {
        "tr": "Bu kaydın bilgi kartı gösterilemez",
        "en": "The information card for this record cannot be displayed"
    },
    "Bilgi kartı için yetkiniz yok": 
    {
        "tr": "Bilgi kartı için yetkiniz yok",
        "en": "You do not have authorization for the information card"
    },
    "Bu işlem zaman alabilir tamamlandığında size bildirilecek...": 
    {
        "tr": "Bu işlem zaman alabilir tamamlandığında size bildirilecek...",
        "en": "This process may take time, you will be notified when it is completed..."
    },
    "Kullanıcı taklit ediliyor": 
    {
        "tr": "Kullanıcı taklit ediliyor",
        "en": "The user is being impersonated"
    },
    "Gerçek kullanıcıya dönüldü": 
    {
        "tr": "Gerçek kullanıcıya dönüldü",
        "en": "Back to real user"
    },
    "Bu uygulama sanal cihazla kullanılamaz!": 
    {
        "tr": "Bu uygulama sanal cihazla kullanılamaz!",
        "en": "This app cannot be used with virtual device!"
    },
    "Bu uygulama root yapılmış cihazla kullanılamaz!": 
    {
        "tr": "Bu uygulama root yapılmış cihazla kullanılamaz!",
        "en": "This app cannot be used with rooted device!"
    },
    "Şifre en az 4 karakter olmalı": 
    {
        "tr": "Şifre en az 4 karakter olmalı",
        "en": "Password must be at least 4 characters"
    },
    "Mail en az 4 karakter olmalı": 
    {
        "tr": "Mail en az 4 karakter olmalı",
        "en": "Email must be at least 4 characters"
    },
    "Doğrulama Hatası:": 
    {
        "tr": "Doğrulama Hatası:",
        "en": "Validation Error:"
    },
    "Bir hata oluştu. Sonra tekrar deneyin": 
    {
        "tr": "Bir hata oluştu. Sonra tekrar deneyin",
        "en": "Something went wrong. try again later"
    },
    "Bazı hatalar oluştu. Tüm sonuçlar görüntülenmiyor olabilir": 
    {
        "tr": "Bazı hatalar oluştu. Tüm sonuçlar görüntülenmiyor olabilir",
        "en": "Some errors have occurred. Not all results may be displayed"
    },
    "Tetikleme görevi için veri girmek ister misiniz?": 
    {
        "tr": "Tetikleme görevi için veri girmek ister misiniz?",
        "en": "Do you want to enter data for the trigger task?"
    },
    "Netcad nokta dizisi:": 
    {
        "tr": "Netcad nokta dizisi:",
        "en": "Netcad point array:"
    },
    "Arama yap": 
    {
        "tr": "Arama yap",
        "en": "Call"
    },
    "Nesne tipi": 
    {
        "tr": "Nesne tipi",
        "en": "Object type"
    },
    "Tüm göstergeleriniz varsayılan yerlerine ve ayarlarına geri yüklenecek.": 
    {
        "tr": "Tüm göstergeleriniz varsayılan yerlerine ve ayarlarına geri yüklenecek.",
        "en": "All your dashboards will be restored to their default places and settings."
    },
    "Bu kaydı klonlamak istediğinize emin misiniz?": 
    {
        "tr": "Bu kaydı klonlamak istediğinize emin misiniz?",
        "en": "Are you sure you want to clone this record?"
    },
    "Kayıt geri yüklenecek": 
    {
        "tr": "Kayıt geri yüklenecek",
        "en": "Record will be restored"
    },
    "Lejant kapatılacak": 
    {
        "tr": "Lejant kapatılacak",
        "en": "Legend will be closed"
    },
    "Katman ljantını kapatmak istediğinize emin misiniz?": 
    {
        "tr": "Katman ljantını kapatmak istediğinize emin misiniz?",
        "en": "Are you sure you want to turn off the layer link?"
    },
    "Aynı kelimeler ile tekrar arama yapmak istediğinize emin misiniz?": 
    {
        "tr": "Aynı kelimeler ile tekrar arama yapmak istediğinize emin misiniz?",
        "en": "Are you sure you want to search again with the same words?"
    },
    "Kütahya İl Özel İdaresi’nın faaliyetlerinin sürdürülebilmesi için Kişisel Veri işleme şartları ve amaçları çerçevesinde gerekli görülen üçüncü kişilere (program ortağı, işbirliği yapılan kurum, tedarikçi, bağışçı, kurum yöneticileri/çalışanları, Kütahya valiliği,  yönetimi/güvenlik birimi, hukuken yetkili kamu kurumu ve kuruluşları, hukuken yetkili özel hukuk kişileri ya da yurt dışı ülkeler) aktarılabilecektir.": 
    {
        "tr": "Kütahya İl Özel İdaresi’nın faaliyetlerinin sürdürülebilmesi için Kişisel Veri işleme şartları ve amaçları çerçevesinde gerekli görülen üçüncü kişilere (program ortağı, işbirliği yapılan kurum, tedarikçi, bağışçı, kurum yöneticileri/çalışanları, Kütahya valiliği,  yönetimi/güvenlik birimi, hukuken yetkili kamu kurumu ve kuruluşları, hukuken yetkili özel hukuk kişileri ya da yurt dışı ülkeler) aktarılabilecektir.",
        "en": "In order to continue the activities of Kütahya Special Provincial Administration, third parties (program partner, collaborating institution, supplier, donor, institution managers/employees, Kütahya governorship, management/security unit, legally authorized public institution and institutions, legally authorized private law persons or foreign countries)."
    },
    "KVKK uyarınca muhatap, üye, bağışçı, bursiyer, stajyer, tedarikçi, ziyaretçi, hibe alan, ödül alan, desteklenen, Fark Yaratan, program ortağı ve/veya vakıf çalışanı/yöneticisi sıfatıyla paylaştığınız kişisel verileriniz; veri sorumlusu olarak belirlenen Kütaha İl Özel İdaresi tarafından aşağıda belirtilen kapsamda değerlendirilecektir.": 
    {
        "tr": "KVKK uyarınca muhatap, üye, bağışçı, bursiyer, stajyer, tedarikçi, ziyaretçi, hibe alan, ödül alan, desteklenen, Fark Yaratan, program ortağı ve/veya vakıf çalışanı/yöneticisi sıfatıyla paylaştığınız kişisel verileriniz; veri sorumlusu olarak belirlenen Kütaha İl Özel İdaresi tarafından aşağıda belirtilen kapsamda değerlendirilecektir.",
        "en": "Your personal data that you share as the addressee, member, donor, scholar, trainee, supplier, visitor, grant recipient, award recipient, supported, Changemaker, program partner and/or foundation employee/manager pursuant to the KVKK; It will be evaluated within the scope specified below by the Kütaha Special Provincial Administration, which is determined as the data controller."
    },
    "Kütahya İl Özel İdaresi’nın faaliyetlerinin sürdürülebilmesi için Kişisel Veri işleme şartları ve amaçları çerçevesinde gerekli görülen üçüncü kişilere (program ortağı, işbirliği yapılan kurum, tedarikçi, bağışçı, kurum yöneticileri/çalışanları, Kütahya valiliği,  yönetimi/güvenlik birimi, hukuk kişileri ya da yurt dışı ülkeler) aktarılabilecektir.": 
    {
        "tr": "Kütahya İl Özel İdaresi’nın faaliyetlerinin sürdürülebilmesi için Kişisel Veri işleme şartları ve amaçları çerçevesinde gerekli görülen üçüncü kişilere (program ortağı, işbirliği yapılan kurum, tedarikçi, bağışçı, kurum yöneticileri/çalışanları, Kütahya valiliği,  yönetimi/güvenlik birimi, hukuk kişileri ya da yurt dışı ülkeler) aktarılabilecektir.",
        "en": "In order to continue the activities of Kütahya Special Provincial Administration, third parties (program partner, collaborating institution, supplier, donor, institution managers/employees, Kütahya governorship, management/security unit, legal persons or dormitories) are deemed necessary within the framework of Personal Data processing conditions and purposes. countries) can be transferred."
    },
    "gibi kanallarla ve farklı hukuki sebeplere dayanarak Kütahya İl Özel İdaresi’nın faaliyetlerini sürdürülebilmesi için KVKK tarafından öngörülen temel ilkelere uygun olarak, KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında işbu Aydınlatma Metninde belirtilen amaçlarla da toplanabilmekte, işlenebilmekte ve aktarılabilmektedir.": 
    {
        "tr": "gibi kanallarla ve farklı hukuki sebeplere dayanarak Kütahya İl Özel İdaresi’nın faaliyetlerini sürdürülebilmesi için KVKK tarafından öngörülen temel ilkelere uygun olarak, KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında işbu Aydınlatma Metninde belirtilen amaçlarla da toplanabilmekte, işlenebilmekte ve aktarılabilmektedir.",
        "en": "In accordance with the basic principles stipulated by the KVKK in order for the Kütahya Special Provincial Administration to continue its activities and based on different legal reasons, it can also be collected and processed for the purposes specified in this Clarification Text within the scope of the personal data processing conditions and purposes specified in Articles 5 and 6 of the KVKK. and transferable."
    },
    "c) Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,": 
    {
        "tr": "c) Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
        "en": "c) Learning the purpose of processing personal data and whether they are used in accordance with its purpose,"
    },
    "e) KVKK 7. maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,": 
    {
        "tr": "e) KVKK 7. maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,",
        "en": "e) Requesting the deletion or destruction of personal data within the framework of the conditions stipulated in Article 7 of the KVKK,"
    },
    "f) (d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,": 
    {
        "tr": "f) (d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
        "en": "f) Requesting notification of the transactions made pursuant to subparagraphs (d) and (e) to third parties to whom personal data has been transferred,"
    },
    "g) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,": 
    {
        "tr": "g) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,",
        "en": "g) Objecting to the emergence of a result against the person himself by analyzing the processed data exclusively through automated systems,"
    },
    "ğ) Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme,": 
    {
        "tr": "ğ) Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme,",
        "en": "ğ) To request the compensation of the damage in case of loss due to unlawful processing of personal data,"
    },
    "Yukarıda belirtilen haklarınız ile ilgili Kütahya İl Özel İdaresi’na yazılı olarak başvurmanız halinde, talebinizin niteliğine göre en geç 30 (otuz) gün içerisinde ücretsiz olarak yanıt verilecektir. Başvurunuzu açık, anlaşır bir şekilde ve kimlik ve adres bilgilerini tespit edici belgeleri de ekleyerek, yazılı ve ıslak imzalı olarak elden, postayla ya da noter kanalıyla Kütahya İl Özel İdaresi Dumlupınar Bulv. No 111 Kütahya Türkiye adresine ulaştırmanız gerekmektedir.": 
    {
        "tr": "Yukarıda belirtilen haklarınız ile ilgili Kütahya İl Özel İdaresi’na yazılı olarak başvurmanız halinde, talebinizin niteliğine göre en geç 30 (otuz) gün içerisinde ücretsiz olarak yanıt verilecektir. Başvurunuzu açık, anlaşır bir şekilde ve kimlik ve adres bilgilerini tespit edici belgeleri de ekleyerek, yazılı ve ıslak imzalı olarak elden, postayla ya da noter kanalıyla Kütahya İl Özel İdaresi Dumlupınar Bulv. No 111 Kütahya Türkiye adresine ulaştırmanız gerekmektedir.",
        "en": "If you apply in writing to the Kütahya Special Provincial Administration regarding your above-mentioned rights, a free response will be given within 30 (thirty) days at the latest, depending on the nature of your request. You can send your application to Kütahya Special Provincial Administration Dumlupınar Bulv. No. 111 Kütahya Turkey address."
    },
    "assets/ext_modules/select2/select2.min.js":
    {
        "tr": "assets/ext_modules/select2/select2.tr.min.js",
        "en": "assets/ext_modules/select2/select2.en.min.js"
    },
    "Dil güncellme esnasında hata oluştu!":
    {
        "tr": "Dil güncellme esnasında hata oluştu!",
        "en": "Error occurred while updating language!"
    }
  };
 
 
  /****        ****/
  
  public static translateWithCache(key)
  {
    if(!LanguageHelper.translatedData.hasOwnProperty(key))
        LanguageHelper.translatedData[key] = LanguageHelper.translate(key);
    
    return LanguageHelper.translatedData[key];
  }
  
  public static translate(key)
  {
    key = key.trim();
    
    var lang = "tr";
    if(BaseHelper.loggedInUserInfo != null)
        lang = BaseHelper.loggedInUserInfo.user.language;
    
    if(LanguageHelper.translates.hasOwnProperty(key))
        if(LanguageHelper.translates[key].hasOwnProperty(lang))
            return LanguageHelper.translates[key][lang];
            
    //return lang+":"+key;
    return key;
  } 
}