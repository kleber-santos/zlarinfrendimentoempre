/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"whr/com/br/ZLARInfRendimentoEmpre/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
