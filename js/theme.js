;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	
	/*----------------------------------------------------*/
    /*  Parallax Effect js
    /*----------------------------------------------------*/
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
    parallaxEffect();
    

	/*----------------------------------------------------*/
    /*  brand Slider
    /*----------------------------------------------------*/
	$(".brand-carousel").owlCarousel({
        items: 1,
        autoplay:false,
        loop:true,
        nav:false,
        dots:false,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            },
            768: {
                items: 3,
            },
            992: {
                items: 6,
            }
        }
    });
	/*----------------------------------------------------*/
    /*  Clients Slider
    /*----------------------------------------------------*/
    function active_testimonial() {
        if ($('.active_testimonial').length) {
            $('.active_testimonial').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots: true,
                responsiveClass: true
            })
        }
    }
    active_testimonial();

	$(".skill_main").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
	
	/*----------------------------------------------------*/
    /*  Isotope Fillter js
    /*----------------------------------------------------*/
	function projects_isotope(){
        if ( $('.projects_area').length ){
            // Activate isotope in container
			$(".projects_inner").imagesLoaded( function() {
                $(".projects_inner").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
			
            // Add isotope click function
            $(".filter li").on('click',function(){
                $(".filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".projects_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    projects_isotope();
	
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    // function testimonials_slider(){
    //     if ( $('.testi_slider').length ){
    //         $('.testi_slider').owlCarousel({
    //             loop:true,
    //             margin: 30,
    //             items: 2,
    //             nav: false,
    //             autoplay: true,
    //             smartSpeed: 1500,
    //             dots:false, 
    //             responsiveClass: true,
    //             responsive: {
    //                 0: {
    //                     items: 1,
    //                 },
    //                 768: {
    //                     items: 2,
    //                 },
    //             }
    //         })
    //     }
    // }
    // testimonials_slider();

    $('#free-trial,.get-started').click(function(){
        $('html, body').animate({
            scrollTop: ($('.impress_area').first().offset().top)
        },700);        
    })

        $('.loginTrigger').click(function(e){
            e.preventDefault();
            $('.login-parent').addClass('slideInUp')
            $('.login-parent').css('visibility' , 'visible')
            $('.login-parent').removeClass('slideOutDown')          
        })

        $('.close').click(function(){
            $('.login-parent').addClass('slideOutDown')
            setTimeout(function(){
                $('.login-parent').css('visibility' , 'hidden')
                $('.login-parent').removeClass('slideInUp')
            },800)
        })

        if($(window).width() > 991){
            $('.navbar-brand').html($('#logoDark'));
            $('#logoDark').show()
        }
        else{
            $('.navbar-brand').append($('#logoLight'));
            $('#logoLight').show()          
        }

        $('.chart_img').owlCarousel({
            items : 1,
            autoplay : true,
            margin: 0,
            autoplayTimeout: 1700,
            loop : true ,
            dots : true,
            nav: false,
            autoplayHoverPause : true,
            stagePadding:20,
            smartSpeed: 800
        })    
})(jQuery)