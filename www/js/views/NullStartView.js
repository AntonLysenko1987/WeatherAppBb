define([
    'app',
	'jquery',
	'backbone',
    'models/LocationModel',
    'views/MainView',
    'device',
    'hammerjs',
    'async!https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyA87iJ_pjRHgy67v-LsIFzGJcKSxBa7liw&sensor=false'
], function (App, $, Backbone, LocationModel, MainView, device, hammer) {
	'use strict';
	var NullStartView = Backbone.View.extend({
		el: $('#mainBlock'),
        template: '#nullStartView',
        events: {
            'input #searchLocationInput': 'searchLocation',
            'click #getLocationButton': 'getLocation'
        },
        initialize: function() {
            this.currentLocation = new LocationModel();
            this.render();
            this.listenTo(this.currentLocation,'change',this.loadMainScreen);
        },
		render: function() {
            var content = $(this.template).html();
			this.$el.html(content);
            var nullStartBlock = $('#nullStart');
            var nullStartHeight = nullStartBlock.height();
            var nullStartVerticalPosition = (device.height - nullStartHeight)/2 + 'px';
            nullStartBlock.css('top',nullStartVerticalPosition);
		},
        searchLocation: function(e) {
            var inputValue = e.target.value;
            var inputValueLength = inputValue.length;
            var autocomplete;
            var autocompleteListener;

            if ( inputValueLength >= 2) {
                this.enableGoogleAutocomplete();
            } else {
                this.disableGoogleAutocomplete();
            }
        },
        enableGoogleAutocomplete: function() {
            var self = this;
            this.autocomplete = new google.maps.places.Autocomplete($("#searchLocationInput")[0]);
            this.autocompleteListener = google.maps.event.addListener(this.autocomplete, 'place_changed', function() {
                if (this.getPlace().geometry) {
                    self.currentLocationSet(this.getPlace().geometry.location.k,this.getPlace().geometry.location.B);
                }
            });
        },
        disableGoogleAutocomplete: function() {
            if (this.autocomplete !== undefined) {
                google.maps.event.removeListener(this.autocompleteListener);
                google.maps.event.clearInstanceListeners(this.autocomplete);
                $(".pac-container").remove();
            }
        },
        loadMainScreen: function (model) {
            var mainView = new MainView({model:model});
            this.$el.html(mainView.render().el);
        },
        currentLocationSet: function(lat,lng) {
            this.currentLocation.set({latitude:lat, longitude:lng});
        },
        getLocation: function() {
            var self = this;
            if( navigator.geolocation ) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    self.currentLocationSet(position.coords.latitude,position.coords.longitude);
                }, this.errorHandler);
            } else {
                alert("Sorry, browser does not support geolocation!");
            }
        },
        errorHandler: function(err) {
            if(err.code == 1) {
                alert("Error: Access is denied!");
            }else if( err.code == 2) {
                alert("Error: Position is unavailable!");
            }
        }

	});

    var initialize = function() {
        var nullStartView = new NullStartView();
        nullStartView.$('#getLocationButton').hammer().on('tap', function() {
            nullStartView.getLocation();
        });
    }
	return {
        initialize: initialize
    };

});

