sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	
	return Controller.extend("sap.ui.i18n.demo.controller.App", {
		
		onShowLocale: function () {
			var sLocale = this.byId("idChangeLocaleInput").getValue();
			var sHost = window.location.host;
			var sPathname = window.location.pathname;
			var sTarget = "https://" + sHost + sPathname + "?sap-language=" + sLocale;
			parent.window.location.assign(sTarget);
		},
		
		onShowCompositeMessage: function () {
			if (! sap.ui.controller("sap.ui.i18n.demo.controller.App").validate(this)) {
				return;
			}// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var compositeMessageFormData = this.getView().getModel("compositeMessageFormData");
			var defaultEntriesNumber = compositeMessageFormData.getProperty("/defaultEntriesNumber");
			var totalEntriesNumber = compositeMessageFormData.getProperty("/totalEntriesNumber");
			var sMsg = oBundle.getText("concatenatedString1") + " " + defaultEntriesNumber + " " + oBundle.getText("concatenatedString2") + " " +
			totalEntriesNumber + " " + oBundle.getText("concatenatedString3");
			// show message
			MessageToast.show(sMsg);
		},
		
		onShowFullSentenceMessage: function () {
			if (! sap.ui.controller("sap.ui.i18n.demo.controller.App").validate(this)) {
				return;
			}// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var compositeMessageFormData = this.getView().getModel("compositeMessageFormData");
			var defaultEntriesNumber = compositeMessageFormData.getProperty("/defaultEntriesNumber");
			var totalEntriesNumber = compositeMessageFormData.getProperty("/totalEntriesNumber");
			var sMsg = oBundle.getText("fullSentenceMessage", [defaultEntriesNumber, totalEntriesNumber]);
			// show message
			MessageToast.show(sMsg);
		},
		
		validate: function (oController) {
			var isValid = false;
			var oBundle = oController.getView().getModel("i18n").getResourceBundle();
			var inputField = oController.byId("idDefaultEntriesNumber");
			var entriesValue = inputField.getValue();
			if ( ! sap.ui.controller("sap.ui.i18n.demo.controller.App").isNumberFieldValid(entriesValue) ){
			      inputField.setValueState(sap.ui.core.ValueState.Error);
			      inputField.setValueStateText(oBundle.getText("numberFieldValidationError"));
			      inputField.focus();
			} else {
				inputField.setValueState(sap.ui.core.ValueState.None);
				isValid = true;
			}
			return isValid;
		},
		
		isNumberFieldValid : function(testNumber){
		      var cleanedValue = testNumber.replace(/ +/, '');  // remove leading spaces
		      var isNum = /^\d+$/.test(cleanedValue); // test for numbers only and return true or false
		      if (isNum && parseInt(cleanedValue, 10) > 5000) {
				isNum = false;
		      }
		      return isNum; 
		},
		
		onShowTruncatedText: function () {
			var sText = this.byId("idTruncatedStringsInput").getValue();
			this.byId("idTruncatedStringsButton").setText(sText);
		}
	});
});
