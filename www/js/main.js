// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: 'libs/jquery/jquery-2.1.1.min',
        jqueryui: 'libs/jquery/jquery-ui.min',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
        hammerjs: 'libs/hammer/hammer.min',
        jqueryHammer: 'libs/hammer/jquery.hammer',
        backboneHammer: 'libs/hammer/backbone.hammer',
        text: 'libs/text',
        async: 'libs/requirejs/plugins/async'
	},
    config: {
        'views/MainView': {
            weather_api_key: 'ut4w8fn76amaghpvhr9tyzse'
        }
    }
});

require([
	'app',
    'jquery'
], function (App, $) {
    'use strict';
    App.initialize();
});
