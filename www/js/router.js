define([
    'jquery',
    'underscore',
    'backbone',
    'views/NullStartView',
    'device'
], function ($, _, Backbone, StartView, device) {
        //'use strict';

        var AppRouter = Backbone.Router.extend({
            routes:{
                '*actions':'nullStart'
            },
            nullStart: function() {
                new StartView();
            }
        });
        var initialize = function() {
            new AppRouter();
            Backbone.history.start();
        };
        return {
            initialize: initialize
        };
    }
);
