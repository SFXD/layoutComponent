({
    doInit : function(component, event, helper) {
        var fieldNamesString = component.get("v.fieldNamesString");
        var array = fieldNamesString.split(",");
        component.set("v.fieldNames", array);
    },
    collapse : function(component, event, helper) {
        var section = component.find('collapseSection');
        for(var cmp in section) {
            $A.util.toggleClass(section[cmp], 'slds-show');
            $A.util.toggleClass(section[cmp], 'slds-hide');
        }
    }
})
