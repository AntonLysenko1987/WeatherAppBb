define([
	'jquery',
    'underscore',
	'backbone',
    'models/WeatherDataModel',
    'text!templates/MainBlock/sliderData/WeatherExtendData.html'
], function ($, _, Backbone, WeatherDataModel, WeatherExtend) {
	'use strict';
    var FacebookShareView = Backbone.View.extend({
        id: 'facebookShareBlock',
        //template: _.template(WeatherExtend),
        events: {

        },
        initialize: function() {

        },
        render: function() {
            $(this.el).text('facebook');
            return this;
        }
    });
    return FacebookShareView;

});

