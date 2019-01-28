/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"whr/com/br/ZLARInfRendimentoEmpre/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});