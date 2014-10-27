define([
    'app',
	'jquery',
	'underscore',
	'backbone',
	'backboneLocalstorage',
	'models/UserModel'
], function ($, _, Backbone, Store, UserModel) {
	var MyLocations = Backbone.Collection.extend({
		model: UserModel
		//localStorage: new Store('My locations')
	});
	return MyLocations;
});