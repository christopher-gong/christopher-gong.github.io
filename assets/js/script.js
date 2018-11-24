$(document).ready(function() {
    $(".floater").hover(function() {
        $(this).css("transform", $(this).css("transform") + " scale(1.1)");
    }, function() {
        $('#f1').css("transform", "translateY(" + $(window).scrollTop()/-10 + "px)");
        $('#f2').css("transform", "translateY(" + $(window).scrollTop()/-15 + "px)");
        $('#f3').css("transform", "translateY(" + $(window).scrollTop()/-5 + "px)");
        $('#f4').css("transform", "translateY(" + $(window).scrollTop()/-10 + "px)");
    });
    $(window).scroll(function(){
            console.log($(window).scrollTop());
            $('#f1').css("transform", "translateY(" + $(window).scrollTop()/-10 + "px)");
            $('#f2').css("transform", "translateY(" + $(window).scrollTop()/-15 + "px)");
            $('#f3').css("transform", "translateY(" + $(window).scrollTop()/-5 + "px)");
            $('#f4').css("transform", "translateY(" + $(window).scrollTop()/-10 + "px)");
    });
    setTimeout(function(){
        $(".handwriting-video").fadeOut(4000);
    }, 2000);
    });

