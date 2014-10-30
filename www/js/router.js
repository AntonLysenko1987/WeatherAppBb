define([
    'jquery',
    'underscore',
    'backbone',
    'views/NullStartView'
], function ($, _, Backbone, StartView) {
        //'use strict';

        var AppRouter = Backbone.Router.extend({
            routes:{
                '*actions':'nullStart'
            },
            nullStart: function() {
                StartView.initialize();
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
