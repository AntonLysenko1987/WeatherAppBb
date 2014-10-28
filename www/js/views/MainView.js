define([
    'app',
	'jquery',
	'backbone',
    'models/LocationModel',
    'models/WeatherDataModel',
    'views/ExtendedWeatherDataView',
    'views/FacebookShareView',
    'views/ForecastView',
    'text!templates/MainBlock/Main.html',
    'module',
    'device',
    'backboneHammer',
    'async!https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyA87iJ_pjRHgy67v-LsIFzGJcKSxBa7liw&sensor=false'
], function (App, $, Backbone, LocationModel, WeatherDataModel, ExtendedWeatherDataView, FacebookShareView, ForecastView, Main, module, device) {
	'use strict';

	var MainView = Backbone.View.extend({
        id: 'mainAppContainer',
        events: {
            'click #sliderContent': 'handleSwipe'
        },
        hammerEvents: {
            'swipeleft': 'handleLeftSwipe',
            'swiperight': 'handleRightSwipe'
        },
        hammerOptions: {
            tap: true
        },
        handleLeftSwipe: function(){
            //alert('left');
            var facebookShareView = new FacebookShareView();
            $('#sliderData').html(facebookShareView.render().el);
        },
        handleRightSwipe: function(){
            alert('right');
        },
        initialize: function() {
            this.currentWeather = new WeatherDataModel();
            this.listenTo(this.currentWeather, 'change', this.loadCurrentWeather);
        },
		render: function() {
            $(this.el).html(Main);
            this.getWeather();
            return this;
		},

        getWeather: function () {
            var latitude = this.model.get('latitude'),
                longitude = this.model.get('longitude');
            var weather_api_key = module.config().weather_api_key;
            var self = this;
            var url = 'http://api.worldweatheronline.com/free/v1/weather.ashx?key=' + weather_api_key + '&q='+latitude+','+longitude+'&fx=no&format=json&callback=parseWeather';
            $.ajax({
                url: url,
                dataType: 'jsonp',
                jsonpCallback: 'parseWeather',
                jsonp: false,
                beforeSend: function() {

                },
                success: function(response) {
                    self.currentWeatherSet(response.data.current_condition[0]);
                    $('#mainWeatherData').append($('<p>'+ response.data.current_condition[0].temp_C +'</p>'));
                }
            });
        },
        currentWeatherSet: function (data) {
            this.currentWeather.set({
                cloudcover: data.cloudcover,
                humidity: data.humidity,
                observation_time: data.observation_time,
                pressure: data.pressure,
                temp_C: data.temp_C,
                temp_F: data.temp_F,
                visibility: data.visibility,
                weatherCode: data.weatherCode,
                weatherDesc: data.weatherDesc[0].value,
                winddir16Point: data.winddir16Point,
                winddirDegree: data.winddirDegree,
                windspeedKmph: data.windspeedKmph,
                windspeedMiles: data.windspeedMiles
            });
        },
        loadCurrentWeather: function() {

            var extendedWeather = new ExtendedWeatherDataView({model:this.currentWeather});
            $('#sliderData').html(extendedWeather.render().el);
        }
	});
	return MainView;

});

