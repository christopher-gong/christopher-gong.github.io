$(document).ready(function() {
    $('.btn').on('click', function(){
        var ease = 'easeInQuint';
        console.log("hid");
        $('.berkeleytreesbkgnd').slideDown(900, ease);
        window.setTimeout(function() {
            /*$('.berkeleytreesbkgnd').hide( "scale", {percent: 50, direction: 'horizontal'}, 2000 );*/
            $('.patternbkgnd').slideDown(900, ease);
            window.setTimeout(function() {
                /*$('.berkeleytreesbkgnd').hide( "scale", {percent: 50, direction: 'horizontal'}, 2000 );*/
                $('.nestbkgnd').slideDown(700, ease);
                window.setTimeout(function() {
                    /*$('.berkeleytreesbkgnd').hide( "scale", {percent: 50, direction: 'horizontal'}, 2000 );*/
                    $('.waterbkgnd').slideDown(700, ease);
                    window.setTimeout(function() {
                        /*$('.berkeleytreesbkgnd').hide( "scale", {percent: 50, direction: 'horizontal'}, 2000 );*/
                        $('.bwpotatobkgnd').slideDown(900, ease);
                    }, 600)
                }, 600)
            }, 600)
            
        }, 900)
    });
    });



