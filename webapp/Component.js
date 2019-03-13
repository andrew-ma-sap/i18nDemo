sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";
	
	return UIComponent.extend("sap.ui.i18n.demo.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			var sQueryParameters = window.location.search;
			// if a locale has been queried explicitly
			if (sQueryParameters.indexOf("sap-language") !== -1) {
				var sLocale;
				var iLanguageParamStart = sQueryParameters.indexOf("sap-language") + "sap-language=".length;
				if (sQueryParameters.indexOf("&", iLanguageParamStart) === -1) {
					sLocale = sQueryParameters.substring(iLanguageParamStart);
				} else {
					var iLanguageParamEnd = sQueryParameters.indexOf("&", iLanguageParamStart);
					sLocale = sQueryParameters.substring(iLanguageParamStart, iLanguageParamEnd);
				}
				try {
					sap.ui.getCore().getConfiguration().setLanguage(sLocale);
				} catch (e) {
					// fall back to enUS
					sap.ui.getCore().getConfiguration().setLanguage("en_US");
				}
			} else {
				// set enUS as default
				sap.ui.getCore().getConfiguration().setLanguage("en_US");
			}
		}
	});
});
