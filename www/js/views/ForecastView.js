define([
	'jquery',
    'underscore',
	'backbone',
    'models/WeatherDataModel',
    'text!templates/MainBlock/sliderData/WeatherExtendData.html'
], function ($, _, Backbone, WeatherDataModel, WeatherExtend) {
	'use strict';
	var ForecastView = Backbone.View.extend({
        id: 'forecastBlock',
        //template: _.template(WeatherExtend),
        events: {

        },
        initialize: function() {

        },
		render: function() {
            $(this.el).text('forecast');
            return this;
		}
	});
	return ForecastView;

});

