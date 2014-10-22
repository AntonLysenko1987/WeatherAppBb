define([
    'jquery',
    'backbone',
    'views/NullStartView',
    'device'
], function ($, Backbone, StartView, device) {
        'use strict';
        var App = function () {
            this.initialize = function () {
                var startView = new StartView();
                $('div[data-role="page"]').height(device.height);
            };
        };
        return new App();

    }
);
