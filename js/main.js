        // loader 
      $(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
      })

        // Sticky Header
        $(window).scroll(function() {

            if ($(window).scrollTop() > 100) {
                $('.main_header').addClass('sticky');
            } else {
                $('.main_header').removeClass('sticky');
            }
        });

        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.main_header').removeClass('open-nav');
            } else {
                $('.main_header').addClass('open-nav');
            }
        });

        $('.main_header li a').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_header').removeClass('open-nav');
            }
        });

        // navigation scroll lijepo radi materem
        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });



        // wow js
    
    new WOW().init();

        // nice scroll

      $(document).ready(

        function() { 

          $("html").niceScroll({cursorwidth:"8",cursorborderradius:"none",cursorborder:"none",cursorcolor:"#3498db",mousescrollstep:"60"});

        }

      ); 

      // portfolio filter

      $(function () {
        
        var filterList = {
        
          init: function () {
          
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
              targetSelector: '.portfolio',
              filterSelector: '.filter',
              effects: ['fade'],
              easing: 'snap',
              // call the hover effect
              onMixEnd: filterList.hoverEffect()
            });       
          
          },
          
          hoverEffect: function () {
          
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
              function () {
                $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');       
              },
              function () {
                $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');               
              }   
            );        
          
          }

        };
        
        // Run the show!
        filterList.init();
        
        
      }); 


      // Skillset js 

      var object = [

        {

          'headline':'HTML & CSS',
          'value':8,
          'length':9,
          'description':'Significant experience and knowlage of HTML(5) and CSS functionality and use.'

        },
        {

          'headline':'JavaScript & Bootstrap',
          'value':6,
          'length':5,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'NodeJS & ReactJS',
          'value':3,
          'length':5,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        }

      ];

      $(document).ready(function(){

        $("#skillset").skillset({

          object:object,
          duration:40

        });

      });


        // Owl carousel

      $(document).ready(function() {
               
      $("#testimonial_carosule").owlCarousel({
               
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true,
                    autoPlay : true,
                    transitionStyle : "backSlide",
                    // "singleItem:true" is a shortcut for:
                    // items : 1, 
                    // itemsDesktop : false,
                    // itemsDesktopSmall : false,
                    // itemsTablet: false,
                    // itemsMobile : false
               
                });
               
      });

      // Up to top js

      $(document).ready(function() {
        
        $().UItoTop({ easingType: 'easeOutQuart' });
        
      });



