define([
	'jquery',
    'underscore',
	'backbone',
    'models/WeatherDataModel',
    'text!templates/MainBlock/sliderData/WeatherExtendData.html'
], function ($, _, Backbone, WeatherDataModel, WeatherExtend) {
	'use strict';
	var ExtendWeatherData = Backbone.View.extend({
		tagName: 'div',
        id: 'weatherDataExtend',
        template: _.template(WeatherExtend),
        events: {

        },
        initialize: function() {

        },
		render: function() {
            $(this.el).html(this.template(this.model.attributes));
            console.log(this.model.attributes);
            return this;
		}
	});
	return ExtendWeatherData;

});

