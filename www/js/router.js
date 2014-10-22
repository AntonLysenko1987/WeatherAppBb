define([
    'jquery',
    'underscore',
    'backbone',
    'views/NullStartView',
    'device'
], function ($, _, Backbone, StartView, device) {
        'use strict';
        var AppRouter = new Backbone.Router.extend({
            routes: {
                '':'nullStart'
            },
            nullStart: function() {
                console.log(1);
            }
        });

        new AppRouter();
        Backbone.history.start();
    }
);
