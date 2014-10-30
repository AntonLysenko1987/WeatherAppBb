define([
    'jquery',
    'underscore',
    'backbone',
    'views/NullStartView',
    'device'
], function ($, _, Backbone, StartView, device) {
        'use strict';
        var initialize = function(){
            var $el = $('#mainBlock');
            $el.height(device.height);
            StartView.initialize();
        }

        return {
            initialize: initialize
        };

    }
);
