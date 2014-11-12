define([
	'jquery',
    'underscore',
	'backbone',
    'models/WeatherDataModel',
    'text!templates/MainBlock/sliderData/WeatherExtendData.html'
], function ($, _, Backbone, WeatherDataModel, WeatherExtend) {
	'use strict';
	var test1 = Backbone.View.extend({
        events: {

        },
        initialize: function() {

        },
		render: function() {
            this.$el.text('Wazzzaaaa');
            return this;
		}
	});
	return test1;

});

