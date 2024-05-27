$(document).ready(function () {
    $("button").click(function(){
        var square = $("#square");
        square.animate({height: '500px', opacity:'0.5'}, "1000");
        square.animate({height: '500px', opacity:'0.9'}, "500");
        square.animate({height: '200px', opacity:'0.5'}, "1000");
        square.animate({height: '200px', opacity:'0.9'}, "500");
    });
});