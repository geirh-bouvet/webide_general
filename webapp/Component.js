jQuery.sap.declare("ui.s2p.mm.purord.tracking.MM_PURORD_TPO_EXT.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "ui.s2p.mm.purord.tracking",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/MM_PURORD_TPO"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.ui.s2p.mm.purord.tracking.Component.extend("ui.s2p.mm.purord.tracking.MM_PURORD_TPO_EXT.Component", {
	metadata: {
		version: "1.0.0",
		config: {},

		customizing: {}
	}
});