jQuery(window).on('load', function() {
    // HIDE PRELAODER
    $(".preloader").addClass("preloader-hidden");
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){
        $(".hero .animation-container").each(function(){
            var e = $(this);
            setTimeout(function(){
                e.addClass("run-animation");
            }, e.data("animation-delay") );
        });
    }, 900 );    
});
jQuery(document).ready(function($) {
	"use strict";
    $(window).on('load', function() {        
        // HIDE PRELAODER
        $(".preloader").addClass("preloader-hidden");        
        // SHOW/ANIMATE ANIMATION CONTAINER
        setTimeout(function(){            
            $(".hero .animation-container").each(function(){
                var e = $(this);
                setTimeout(function(){                    
                    e.addClass("run-animation");                    
                }, e.data("animation-delay") );
            });            
        }, 900 );        
    });    
    // INIT PARALLAX PLUGIN
    $(".hero .background-content.parallax-on").parallax({
        scalarX: 24,
        scalarY: 15,
        frictionX: 0.1,
        frictionY: 0.1,
    });    
    // OPEN POPUP SEQUENCE
    $(".open-popup0").click(function(){        
        $(".popup0").addClass("show");
        $(".popup0").append('<div class="close-popup0 backface"></div>');        
    });
    $(".open-popup1").click(function(){        
        $(".popup1").addClass("show");
        $(".popup1").append('<div class="close-popup1 backface"></div>');        
    });
    $(".open-popup2").click(function(){        
        $(".popup2").addClass("show");
        $(".popup2").append('<div class="close-popup2 backface"></div>');        
    });
    $(".open-popup3").click(function(){        
        $(".popup3").addClass("show");
        $(".popup3").append('<div class="close-popup3 backface"></div>');        
    });
    // CLOSE POPUP SEQUENCE
    $(document).on('click', '.close-popup0', function(){         
        $(".popup0").removeClass("show");
        $(".popup0 .backface").remove();        
    });
    $(document).on('click', '.close-popup1', function(){         
        $(".popup1").removeClass("show");
        $(".popup1 .backface").remove();        
    });
    $(document).on('click', '.close-popup2', function(){         
        $(".popup2").removeClass("show");
        $(".popup2 .backface").remove();        
    });
    $(document).on('click', '.close-popup3', function(){         
        $(".popup3").removeClass("show");
        $(".popup3 .backface").remove();        
    });
});