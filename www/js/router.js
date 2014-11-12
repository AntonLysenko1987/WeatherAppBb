define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'views/StartView',
    'device',
    'views/test',
    'views/NullStartView'
], function ($, _, Backbone, App, StartView, device, Test, NullStartView) {
        //'use strict';
        Backbone.View.extend({

            remove: function() {
                // Empty the element and remove it from the DOM while preserving events
                $(this.el).empty().detach();
                return this;
            }

        });

        var Router = Backbone.Router.extend({
            initialize: function() {
                this.el = $('#mainBlock');
                var router = {router: this};
                this.startView = new StartView(router);
                this.nullStartView = new NullStartView(router);
                this.test = new Test();
            },
            routes:{
                '':'startPoint',
                'test1':'test1',
                'test2':'test2'
            },
            currentView: null,

            switchView: function(view) {
                if (this.currentView) {
                    // Detach the old view
                    this.currentView.remove();
                }
                // Move the view element into the DOM (replacing the old content)
                this.el.html(view.el);
                // Render view after it is in the DOM (styles are applied)
                view.render();
                view.delegateEvents();
                this.currentView = view;
            },

            startPoint: function() {
                var localStorageData = false;
                if (!localStorageData) {
                    this.switchView(this.nullStartView);
                }

            },
            test1: function() {
                this.switchView(this.test);
            },
            test2: function() {

            }
        });
        var initialize = function() {
            new Router();
            Backbone.history.start({
                pushState: true,
                root: "/weatherAppBb_v0.0.1/www/"
            });
        };
        return {
            initialize: initialize
        };
    }
);
