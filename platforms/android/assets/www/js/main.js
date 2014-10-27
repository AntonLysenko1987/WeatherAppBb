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
        jquerymobile: 'libs/jquery/jquerymobile',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
        backbonetouch: 'libs/backbone/backbone.touch',
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
    'jquery',
    'jquerymobile'
], function (App, $) {
    'use strict';
    $(document).on('mobileinit', function() {
        $.mobile.ajaxEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.pushStateEnabled = false;
    });

    App.initialize();
});
