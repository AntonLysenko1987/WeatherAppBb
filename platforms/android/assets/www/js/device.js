define(['jquery'],function($){

    var $viewport = $(window);

    var deviceHeight = $viewport.height();
    var deviceWidth = $viewport.width();

    return {
        height: deviceHeight,
        width: deviceWidth
    };
});