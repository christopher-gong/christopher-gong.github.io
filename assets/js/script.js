$(document).ready(function() {
    $(".floater").hover(function() {
        $(this).css("transform", $(this).css("transform") + " scale(1.1)");
    }, function() {
        $(this).css("transform", "translateY(" + $(window).scrollTop()/-10 + "px)");
    });
    $(window).scroll(function(){
            console.log($(window).scrollTop());
            $('.floater').css("transform", "translateY(" + $(window).scrollTop()/-10 + "px)");
    });
    setTimeout(function(){
        $(".handwriting-video").fadeOut(4000);
    }, 2000);
    });

