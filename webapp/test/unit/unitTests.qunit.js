/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student11comsaptrainingux402smartfield/ux402smartfield/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
