({
    init : function(component, event, helper) {
	    
    },
	
    toggleIsView : function(component, event, helper) {
		component.set("v.isView", event.getParam("isView"));
	}
})