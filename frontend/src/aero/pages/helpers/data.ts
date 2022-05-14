import { BaseHelper } from './base';
import { LanguageHelper } from './language';

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

declare var $: any;

export abstract class DataHelper 
{ 
    /****    Variables    ****/   

    public static recordOperations = 
    [
        {
            'type': 'show',
            'icon': 'info-alt',
            'display_name' : 'Detay Göster'.tr(),
            'link': '[id]'
        },
        {
            'type': 'edit',
            'icon': 'pencil-alt2',
            'display_name' : 'Düzenle'.tr(),
            'link': '[id]/edit'
        }, 
        {
            'type': 'delete',
            'icon': 'trash',
            'display_name' : 'Sil'.tr(),
            'link': ''
        },
        {
            'type': 'archive',
            'icon': 'reload',
            'display_name' : 'Kaydın Geçmişi'.tr(),
            'link': '[id]/archive'
        },
        {
            'type': 'clone',
            'icon': 'files',
            'display_name' : 'Klonla'.tr(),
            'link': ''
        },
        {
            'type': 'export',
            'icon': 'export',
            'display_name' : 'Dışa Aktar'.tr(),
            'link': ''
        }
    ]; 



    /****    Data Functions    ****/

    public static getTitleOrDefault(title, defaultTitle)
    {
        if(title == null) return defaultTitle;
        if(title == "") return defaultTitle;        
        if(title.substr(0, 1) == " ") return defaultTitle;
        if(title.substr(0, 1) == "*") return defaultTitle;

        return title;
    }

    public static getData(data, path = '')
    {        
        var array = path.split(".");
        for(var i = 0; i < array.length; i++)
        {
            if(data == null) return null;
            else if(array[i] == "" && i+1 == array.length) return data;
            else if(typeof data[array[i]] == "undefined") return null;

            data = data[array[i]];
        }

        return data;    
    }

    public static deleteDataOnPipe(type, tableName, id = 0)
    {
        var localKey = "user:"+BaseHelper.loggedInUserInfo.user.id+".tables/";
       
        switch (type) 
        {
            case "list":
                localKey += tableName;
                break;
            case "archive":
                localKey += tableName +"/"+id+"/archive";
                break;
            case "show":
                localKey += tableName +".show."+id;
                break;
            case "deleted":
                localKey += tableName +"/deleted";
                break;
            default:
                console.log("no data type on pipe: " + type);
                return;
        }

        localKey +=  ".data";
        
        BaseHelper.deleteFromPipe(localKey);
    }



    /****    Filter Description Functions    ****/

    public static getFilterDescriptionByColumnGuiType(columnName, guiType, filterType, data, key, filter = null)
    {
        guiType = guiType.split(':')[0];
        
        switch (guiType) 
        { 
            case "text": return this.getFilterDescriptionForTextType(filterType, data);
            
            case "string":
            case "phone": 
                return this.getFilterDescriptionForStringType(filterType, data);
                
            case "numeric": return this.getFilterDescriptionForNumericType(filterType, data);
            case "money": return this.getFilterDescriptionForMoneyType(filterType, data);
            case "boolean": return this.getFilterDescriptionForBooleanType(filterType, guiType, data);
            case "datetime": return this.getFilterDescriptionForDateTimeType(filterType, data, filter);
            case "date": return this.getFilterDescriptionForDateType(filterType, data, filter);
            case "time": return this.getFilterDescriptionForTimeType(filterType, data, filter);
            case "jsonb": return this.getFilterDescriptionForJsonbType(columnName, filterType, data, key);
            
            case "select":
            case "multiselect": 
                return this.getFilterDescriptionForSelectType(columnName, filterType, data, key);
                
            case "point": 
            case "multipolygon": 
                return this.getFilterDescriptionForGeoType(filterType, data);
            
            default: return 'no desc type for ' + guiType;
        }
    }

    public static getFilterDescriptionForJsonbType(columnName, filterType, data, key)
    {
        return this.getFilterDescriptionForTextType(filterType, data);
    }

    public static getFilterDescriptionForStringType(filterType, data)
    {
        switch(filterType)
        {
            case 1: return "içinde '{0}' geçen".tr(data);
            case 2: return "'{0}' ile başlayan".tr(data);
            case 3: return "'{0}' ile biten".tr(data);
            case 4: return "'"+data+"'";
            case 5: return "'{0}' a eşit olmayan".tr(data);
            default: return "no string filter type for " + filterType;
        }
    }
    
    public static getFilterDescriptionForTextType(filterType, data)
    {
        return this.getFilterDescriptionForStringType(filterType, data);
        /*switch(filterType)
        {
            case 1: return "içinde '{0}' geçen".tr(data);
            case 2: return "'{0}' ile başlayan".tr(data);
            case 3: return "'{0}' ile biten".tr(data);
            case 4: return "'"+data+"'";
            case 5: return "'{0}' a eşit olmayan".tr(data);
            default: return "no string filter type for " + filterType;
        }*/
    }
    
    public static getFilterDescriptionForMoneyType(filterType, data)
    {
        return this.getFilterDescriptionForNumericType(filterType, data);
        /*switch(filterType)
        {
            case 1: return data;
            case 2: return "{0} olmayanlar".tr(data);
            case 3: return "{0} 'den küçük olanlar".tr(data);
            case 4: return "{0} 'den büyük olanlar".tr(data);
            default: return "no numeric filter type for " + filterType;
        }*/
    }

    public static getFilterDescriptionForNumericType(filterType, data)
    {
        switch(filterType)
        {
            case 1: return data;
            case 2: return "{0} olmayanlar".tr(data);
            case 3: return "{0} 'den küçük olanlar".tr(data);
            case 4: return "{0} 'den büyük olanlar".tr(data);
            default: return "no numeric filter type for " + filterType;
        }
    }

    public static getFilterDescriptionForSelectType(columnName, filterType, data, key)
    {
        key += ".selectQueryElementDataCache."+columnName+".";
        switch(filterType)
        {
            case 1: 
                var rt = "";
                for(var i = 0; i < data.length; i++)
                    rt += " "+"yada".tr()+" '" + BaseHelper.readFromLocal(key+data[i]) + "'";
                return rt.substr("yada".tr().length + 2);
            case 2: 
                var rt = "";
                for(var i = 0; i < data.length; i++)
                    rt += " "+"ve".tr()+" '" + BaseHelper.readFromLocal(key+data[i]) + "'";
                return rt.substr("yada".tr().length + 2);
            default: return "no select filter type for " + filterType;
        }
    }

    public static getFilterDescriptionForDateTimeType(filterType, data, filter)
    {
        data = BaseHelper.dBDateTimeStringToHumanDateTimeString(data);
        return this.getFilterDescriptionForTimeType(filterType, data, filter);
        
        /*switch(filterType)
        {
            case 1: return data;
            case 2: return "{0} 'dan önce".tr(data);
            case 3: return "{0} 'dan sonra".tr(data);
            case 4: return "{0} ve {1} arasında".tr(data, filter['filter2']);
            default: return "no datetime filter type for " + filterType;
        }*/
    }

    public static getFilterDescriptionForDateType(filterType, data, filter)
    {
        data = BaseHelper.dBDateStringToHumanDateString(data);
        return this.getFilterDescriptionForTimeType(filterType, data, filter);
        
        /*switch(filterType)
        {
            case 1: return data;
            case 2: return "{0} 'dan önce".tr(data);
            case 3: return "{0} 'dan sonra".tr(data);
            case 4: return "{0} ve {1} arasında".tr(data, filter['filter2']);
            default: return "no datetime filter type for " + filterType;
        }*/
    }

    public static getFilterDescriptionForTimeType(filterType, data, filter)
    {
        switch(filterType)
        {
            case 1: return data;
            case 2: return "{0} 'dan önce".tr(data);
            case 3: return "{0} 'dan sonra".tr(data);
            case 4: return "{0} ve {1} arasında".tr(data, filter['filter2']);
            default: return "no datetime filter type for " + filterType;
        }
    }

    public static getFilterDescriptionForBooleanType(filterType, guiType, data)
    {
        switch(filterType)
        {
            case 1: 
                return this.convertDataByGuiTypeBoolean(
                                                    null, 
                                                    null, 
                                                    guiType.split(':')[0], 
                                                    data);
                                                    
            default: return "no boolean filter type for " + filterType;
        }
    }

    public static getFilterDescriptionForGeoType(filterType, data)
    {
        switch(filterType)
        {
            case 1: return 'Herhangi bir alanla kesişen'.tr();
            case 2: return 'Tüm alanlarda aynı anda kesişen'.tr();
            default: return "no boolean filter type for " + filterType;
        }
    }




    /****    Gui Type Function    ****/

    public static convertDataForGui(record, columnName, type, show = false)
    {
        if(typeof type == "undefined") return "";
        if(type == null) return;

        var data = record[columnName];
        if(data == null) return "[Boş]".tr();
        
        switch(type.split(':')[0])
        {
            case "codeeditor":
                data = this.convertDataByGuiTypeText(type, data, show);
                
                if(show) return data;

                return BaseHelper.htmlStripTags(data).replace("\n", '<br>');
                break;
            case "text":
                data = this.convertDataByGuiTypeText(type, data, show);
                break;
            case "money":
                data = this.convertDataByGuiTypeMoney(type, data);
                break;
            case "files":
                data = this.convertDataByGuiTypeFiles(type, data);
                break;
            case "boolean":
                data = this.convertDataByGuiTypeBoolean(record, columnName, type, data);
                break;
            case "datetime":
            case "date":
                data = this.convertDataByGuiTypeDateTime(type, data);
                break;
            case "jsonb":
            case "json":
                data = this.convertDataByGuiTypeJsonb(type, data);
                break;
            //case "multiselect":
            //case "multiselectdragdrop":
            //    data = this.convertDataByGuiTypeMultiSelect(record, columnName, type, data);
            //    break;
            //case "select":
            //    data = this.convertDataByGuiTypeSelect(record, columnName, type, data);
            //    break;
        }
        return data;
    }

    public static convertDataByGuiTypeJsonb(guiType, data)
    {
        if(typeof data == "string") return data;
        return BaseHelper.objectToJsonStr(data);
    }

    public static convertDataByGuiTypeBoolean(record, columnName, guiType, data)
    {
        var id = 0;
        if(record != null) id = record['id'];
        
        if(data == "0") data = false;
        if(data == "1") data = true;
        
        switch(guiType)
        {
            case 'boolean': 
            case 'boolean:fastchange':
                return data ? 'Aktif'.tr() : 'Pasif'.tr();
            case 'boolean:gender':
                return data ? 'Erkek'.tr() : 'Kadın'.tr();
            default: return data.toString();
        }
    }

    public static convertDataByGuiTypeFiles(guiType, data)
    {
        if(data == null) return null;

        var rt = "";

        var temp = data;
        if(typeof temp == "string")
            temp = BaseHelper.jsonStrToObject(data);
            
        for(var i = 0; i < temp.length; i++)
        {
            rt += "<a data-fancybox='gallery' href='"+BaseHelper.getFileUrl(temp[i], 'b_')+"'>"
            //rt += "<a href='"+BaseHelper.getFileUrl(temp[i], 'b_')+"'>"
                rt += "<img src='"+BaseHelper.getFileUrl(temp[i], 's_')+"' class='rounded-circle file-preview' alt=''>";
            rt += "</a>"
        }

        return rt;
    }

    public static convertDataByGuiTypeText(guiType, data, show)
    {
        if(data == null) return null;
        
        if(show) return "<pre>"+data+"</pre>";

        return data.substr(0, 100) + (data.length > 100 ? '...' : '');
    }
    
    public static convertDataByGuiTypeMoney(guiType, data)
    {
        var unit = guiType.split(':')[1].toUpperCase();
        data = BaseHelper.formatMoney(data, 2, ',', '.')//data.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');  
        
        return  data + " " + unit;
    }
    
    public static convertDataByGuiTypeDateTime(guiType, data)
    {
        switch(guiType)
        {
            case 'datetime': return BaseHelper.dBDateTimeStringToHumanDateTimeString(data);
            case 'date': return BaseHelper.dBDateStringToHumanDateString(data);
            default: return data;
        }
    }



    /****    Clear Data Functions */

    public static changeDataForFormByGuiType(guiType, data)
    {
        switch (guiType.split(':')[0]) 
        {
            case 'boolean':
                data = this.changeDataForFormByGuiTypeBoolean(data);
                break;
            case 'multiselect':
            case 'multiselectdragdrop':
                data = this.changeDataForFormByGuiTypeMultiSelect(data);
                break;
            case 'datetime':
                data = BaseHelper.humanDateTimeStringToDBDateTimeString(data);
                break;
            case 'date':
                data = BaseHelper.humanDateStringToDBDateString(data);
                break;
            case 'point':
            case 'linestring':
            case 'polygon':
            case 'multipoint':
            case 'multilinestring':
            case 'multipolygon':
                data = this.changeDataForFormByGuiTypeGeo(guiType, data);
                
                if(data.length > 0 && guiType.indexOf("multi") > -1)
                    if(data.indexOf("MULTI") < 0)
                    {
                        data = guiType.toUpperCase()+"("+data+")";
                    }
                break;
        }

        return data;
    }

    public static changeDataForFormByGuiTypeGeo(guiType, data)
    {
        if(data.indexOf('["') < 0) return data;

        var obj = BaseHelper.jsonStrToObject(data);
        if(obj == null) return null;

        if(guiType.indexOf("multi") < 0) return obj[0];
        else
        {
            var wkt = guiType.toUpperCase() + "(";
            if(guiType == "multipolygon") wkt += "(";

            var temp = data.split('(');
            for(var i = 0; i < temp.length; i++)
                if(temp[i].indexOf(')') > -1)
                {
                    var coords = temp[i].split(')')[0];
                    wkt += "(" + coords + "),";
                }

            wkt = wkt.substr(0, wkt.length -1) + ")";            
            if(guiType == "multipolygon") wkt += ")";

            return wkt;
        } 
    }

    public static changeDataForFormByGuiTypeMultiSelect(data)
    {
        if(typeof data == "undefined") return "";
        if(data.length == 1 && data[0] == "") return "[]";
        
        return BaseHelper.objectToJsonStr(data);
    }

    public static changeDataForFormByGuiTypeBoolean(data)
    {
        if(typeof data == "undefined") return "";
        
        switch (data) 
        {
            case null:
            case "":
            case "null":
                return "";
            case "true": 
            case true: 
                return "1";
            case "false": 
            case false: 
                return "0";        
            default:
                alert("changeDataForFormByGuiTypeBoolean type error");
                return data;
                break;
        }
    }



    public static changeDataForFilterByGuiType(guiType, data, elementName, columnName, localKey)
    {
        switch (guiType) 
        {
            case 'boolean':
                data = this.changeDataForFilterByGuiTypeBoolean(data);
                break;
            case 'date':
                data = this.changeDataForFilterByGuiTypeDate(data);
                break;
            case 'datetime':
                data = this.changeDataForFilterByGuiTypeDateTime(data);
                break;
            case 'select':
            case 'multiselect':
                data = this.changeDataForFilterByGuiTypeSelectAndMultiSelect(columnName, elementName, localKey);
                break;
        }

        return data;
    }

    public static changeDataForFilterByGuiTypeBoolean(data)
    {
        if(data == null || data == "") return "";
        return data == "true";
    }

    public static changeDataForFilterByGuiTypeDateTime(data)
    {
        data = data.replace('_', '');
        if(data.length < 19) return "";
        
        return BaseHelper.humanDateTimeStringToDBDateTimeString(data);
    }

    public static changeDataForFilterByGuiTypeDate(data)
    {
        if(data == null) return "";
        
        data = data.replace('_', '');
        if(data.length < 10) return "";
        
        return BaseHelper.humanDateStringToDBDateString(data);
    }

    public static changeDataForFilterByGuiTypeSelectAndMultiSelect(columnName, elementName, localKey)
    {
        var data = [];
        var temp = $('[name="'+elementName+'"]').val(); 
        for(var i = 0; i < temp.length; i++)
        {
            if(temp[i] == null || temp[i] == "")
            {
                $('[name="'+elementName+'"] option[value=""]').remove();
                continue;
            }

            var text = $("[name='"+elementName+"'] option[value='"+temp[i]+"']").html().trim();    
            var key = localKey+".selectQueryElementDataCache."+columnName+"."+temp[i];
            BaseHelper.writeToLocal(key, text);

            data.push(temp[i]);
        } 

        return data;
    }
    
    
    
    /****    Additional Link Functions   ****/

    public static getUrlFromAdditionalLink(al)
    {
        var url = al['url'];
        
        if(url == null || url.length == 0) return "";
        
        url = url.replaceAll('***baseUrl***', BaseHelper.backendBaseUrl);
        url = url.replaceAll('***token***', BaseHelper.token);
        
        url = url.replaceAll('//', '/');
        url = url.replaceAll(':/', '://');
        
        if(url == null || url.length == 0) return "";
        
        var user = BaseHelper.loggedInUserInfo['user'];
        var keys = Object.keys(user);
        for(var i = 0; i < keys.length; i++)
        {
            var key = keys[i];
            url = url.replaceAll('***user.'+key+'***', user[key]);
        }
        
        return url;
    }
	
	public static loadAdditionalLinkPayload(th, al)
    {
    
        if(typeof al['payload'] == "undefined") return;
        if(al['payload'] == null) return;
        if(al['payload'].length == 0) return;

        th['BaseHelper'] = BaseHelper;
        
        var payload = al['payload'];

        payload = payload.replaceAll('BaseHelper', 'th.BaseHelper');
        payload = payload.replaceAll('this', 'th');

        eval(payload);
    }
}