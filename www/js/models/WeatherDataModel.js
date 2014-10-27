define([
	'jquery',
	'backbone'
], function ($, Backbone){
	'use strict';
	var weatherDataModel = Backbone.Model.extend({
        cloudcover: 'unknown',
        humidity: 'unknown',
        observation_time: 'unknown',
        pressure: 'unknown',
        temp_C: 'unknown',
        temp_F: 'unknown',
        visibility: 'unknown',
        weatherCode: 'unknown',
        weatherDesc: "unknown",
        winddir16Point: "unknown",
        winddirDegree: 'unknown',
        windspeedKmph: 'unknown',
        windspeedMiles: 'unknown'
    });
    return weatherDataModel;
});