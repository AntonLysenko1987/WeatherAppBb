define([
        'jquery',
        'underscore',
        'backbone',
        'views/sliderDataView'
    ], function ($, _, Backbone, SliderData) {
        //'use strict';

        var AppRouter = Backbone.Router.extend({
            initialize: function (el) {
                this.el = el;
                this.extendWeather = new SliderData({template: '#weatherExtendView'});
            },
            routes: {
                '*actions': 'nullStart',
                'page': 'test'
            },
            nullStart: function () {
                this.el.html(this.extendWeather.el);
                console.log(this.el);
                this.extendWeather.render();
            },
            test: function() {
                console.log(1);
            }
        });

        return AppRouter;

    }
);
