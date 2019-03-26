({
    doInit : function(component, event, helper) {
        let headerString = component.get("v.header");
        if(headerString == null || headerString == undefined || headerString == ''){
            component.set("v.headerBoolean", true);
        } else {
            component.set("v.headerBoolean", false);
        }
        let newFieldsArray = [];
        let fieldNamesString = component.get("v.fieldNamesString");
        if(fieldNamesString !== null && fieldNamesString !== undefined){
            let fieldsArray = fieldNamesString.split(",");
            for(let field of fieldsArray){
                field = field.trim();
                newFieldsArray.push(field);
            }
            component.set("v.fieldNames", newFieldsArray);
        }
    }
})