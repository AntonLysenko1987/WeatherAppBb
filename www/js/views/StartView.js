define([
	'jquery',
	'backbone',
    'router',
    'views/StartView'
], function ($, Backbone, Router, StartView) {
	'use strict';
    var trigger = {trigger: true};
	var startView = Backbone.View.extend({

        template: '#startView',
        events: {
            'click #test1': 'clickTest1',
            'click #test2': 'clickTest2'
        },
        initialize: function(opts) {
            this.router = opts.router;
        },
		render: function() {
            var content = $(this.template).html();
			this.$el.html(content);
            return this;
		},
        clickTest1: function() {
            this.router.navigate('test1', trigger);
        },
        clickTest2: function() {
            this.router.navigate('test2', trigger);
        }
	});

	return startView;

});

