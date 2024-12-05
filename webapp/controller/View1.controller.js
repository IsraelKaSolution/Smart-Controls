sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("student11.com.sap.training.ux402.smartfield.ux402smartfield.controller.View1", {
        onInit: function () {
            let sPath= "/FlightSet(Carrid='AA',Connid='0017',Fldate=datetime'2024-05-23T00%3A00%3A00')";
            this.byId("smartForm").bindElement(sPath);
        }
    });
});
