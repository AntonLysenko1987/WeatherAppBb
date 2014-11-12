define([
	'jquery',
    'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';
	var test2 = Backbone.View.extend({
        events: {

        },
        initialize: function() {

        },
		render: function() {
            $(this.el).text('test2');
            return this;
		}
	});
	return test2;

});

