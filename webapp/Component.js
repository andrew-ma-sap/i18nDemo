sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
	
	return UIComponent.extend("sap.ui.demo.i18n.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// additional initialization can be done here
			var sQueryParameters = window.location.search;
			if (sQueryParameters.indexOf("sap-language") !== -1) {
				var sLocale;
				var iLanguageParamStart = sQueryParameters.indexOf("sap-language") + "sap-language=".length;
				if (sQueryParameters.indexOf("&", iLanguageParamStart) === -1) {
					sLocale = sQueryParameters.substring(iLanguageParamStart);
				} else {
					var iLanguageParamEnd = sQueryParameters.indexOf("&", iLanguageParamStart);
					sLocale = sQueryParameters.substring(iLanguageParamStart, iLanguageParamEnd);
				}
				sap.ui.getCore().getConfiguration().setLanguage(sLocale);
			} else {
				// set enUS as default
				sap.ui.getCore().getConfiguration().setLanguage("en_US");
			}
		}

	});
});
