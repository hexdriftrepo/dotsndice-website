/*-----------------------------------------------------------------------------------

    Template Name: Leading Software, Website & App Development Company | SLBB
    Description: IT Solutions & Digital Agency HTML Template
    Author: Website Design Templates
    Version: 1.0.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Wow animation - on scroll
        06. Video
        07. Resize function
        08. FullScreenHeight function
        09. ScreenFixedHeight function
        10. FullScreenHeight and screenHeight with resize function
        11. Skrollr animation
        12. Owl Carousel Sliders
        13. Tabs
        14. Countdown
        15. Current Year
        16. Odometer
        17. GSAP ScrollTrigger
        18. Cursor Helper
        19. Portfolio
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($("header.header-static-light").length) {
                return;
            }
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 175) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logo_white.png');
                logodefault.attr('src', 'img/logo_white.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logo_black.png');
                logodefault.attr('src', 'img/logo_black.png');
            }
        });
        $window.trigger('scroll');

        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        function scrollIndicator() {
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 200) {
                $('.scroll-bar').addClass('visible');
            } else {
                $('.scroll-bar').removeClass('visible');
            }

            var scrollHeight = document.documentElement.scrollHeight;
            var windowHeight = document.documentElement.clientHeight;
            var maxScrollTop = scrollHeight - windowHeight;
            var scrollTop = document.documentElement.scrollTop;
            var scrollPercentage = (scrollTop / (maxScrollTop - 200)) * 100;

            $('.scroll-indicate').css('height', Math.min(scrollPercentage, 100) + '%');
        }

        $(window).scroll(function () {
            scrollIndicator();
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /*------------------------------------
            05. Wow animation - on scroll
        --------------------------------------*/
        
        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: false, // default
            live: true // default
        })
        wow.init();

        /*------------------------------------
            06. Video
        --------------------------------------*/

        // It is for local video
        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        /*------------------------------------
            07. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            08. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            09. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            10. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        /*------------------------------------
            11. Skrollr animation
        --------------------------------------*/        

        var skroller;

        function initSkrollr() {
            if (typeof skrollr !== 'undefined' && skrollr !== null) {
                skroller = skrollr.init({
                    forceHeight: false,
                    smoothScrollingDuration: 1000,
                    mobileCheck: function () {
                        return false; // Force-enable on mobile
                    }
                });
            }
        }

        function destroySkrollr() {
            if (skroller && typeof skroller.destroy === 'function') {
                skroller.destroy();
                skroller = null;
            }
        }

        function reInitSkrollr() {
            destroySkrollr();
            if ($(window).width() >= 1200) {
                setTimeout(function () {
                    initSkrollr();
                }, 1000); // Delay ensures DOM/images are ready
            }
        }

        // Initial Skrollr run for large screens
        if ($(window).width() >= 1200) {
            initSkrollr();
        }

        // Re-run on full page load
        $(window).on('load', function () {
            if ($(window).width() >= 1200) {
                reInitSkrollr();
            }
        });

        // Throttled refresh on window resize
        let resizeTimeout;
        $(window).on('resize', function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                reInitSkrollr();
            }, 300); // Adjust delay as needed
        });
 

    // === when document ready === //
    $(document).ready(function(){

        /*------------------------------------
            12. Owl Carousel Sliders
        --------------------------------------*/        
        $('.owl-carousel').each(function () {
            const $carousel = $(this);
            const rawData = $carousel.attr('data-owl');
            let options = {};

            // Parse data-owl JSON if available
            if (rawData) {
                try {
                    options = JSON.parse(rawData);
                } catch (e) {
                    return; // Skip initializing this carousel
                }
            }

            // Initialize the Owl Carousel without counter
            try {
                $carousel.owlCarousel(options);
            } catch (e) {
                
            }
        });
                 
        /*------------------------------------
            13. Tabs
        --------------------------------------*/

        //Vertical Tab
        if ($(".verticaltab").length !== 0) {
            $('.verticaltab').easyResponsiveTabs({
                type: 'vertical', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                closed: 'accordion', // Start closed if in accordion view
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo2');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            14. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Oct 2028 00:01:00", //set your date and time. EX: 15 May 2024 12:00:00
            format: "on"
        });

        /*------------------------------------
            15. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());

        /*------------------------------------
            16. Odometer
        --------------------------------------*/

        $('.odometer').waypoint(function(direction) {
            if (direction === 'down') {
                let countNumber = $(this.element).attr("data-count");
                $(this.element).html(countNumber);
            }
        }, {
            offset: '80%'
        });

        /*------------------------------------
            17. GSAP ScrollTrigger
        --------------------------------------*/

        if ($(".portfolio-container").length !== 0) {
            var width = $(window).width();
            if (width > 991) {

                gsap.registerPlugin(ScrollTrigger);

                let sections = gsap.utils.toArray(".portfolio-wrap");

                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".portfolio-container",
                        pin: true,
                        scrub: 1,
                        // snap: 1 / (sections.length - 1),
                        end: () => "+=" + document.querySelector(".portfolio-container").offsetWidth
                    }
                });

            }
        }

        /*------------------------------------
            18. Cursor Helper
        --------------------------------------*/
        
         if ($(".cursor-helper").length) {

            var cursor = document.querySelector('.cursor-helper-outer');
            var cursorinner = document.querySelector('.cursor-helper-inner');
            var a = document.querySelectorAll('a');
            var h2 = document.querySelectorAll('h2');
            var footer = document.querySelectorAll('footer');
            var owlcarousel = document.querySelectorAll('.owl-carousel');
            
            document.addEventListener('mousemove', function (e) {
              var x = e.clientX;
              var y = e.clientY;
              cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
            });

            document.addEventListener('mousemove', function (e) {
              var x = e.clientX;
              var y = e.clientY;
              cursorinner.style.left = x + 'px';
              cursorinner.style.top = y + 'px';
            });

            document.addEventListener('mousedown', function () {
              cursor.classList.add('click');
              cursorinner.classList.add('cursor-helper-innerhover')
            });

            document.addEventListener('mouseup', function () {
              cursor.classList.remove('click')
              cursorinner.classList.remove('cursor-helper-innerhover')
            });

            a.forEach(item => {
              item.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-link');
              });
              item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-link');
              });
            });

            h2.forEach(item => {
              item.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-title');
                 $("h2").css({ "cursor": "none" });
              });
              item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-title');
              });
            });

            footer.forEach(item => {
              item.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-light');
              });
              item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-light');
              });
            });

            owlcarousel.forEach(item => {
              item.addEventListener('mouseover', () => {
                cursor.classList.add('cursor-slider');
              });
              item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-slider');
              });
            });

          };

    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            19. Portfolio
        --------------------------------------*/

        $('.portfolio-gallery,.portfolio-gallery-isotope').lightGallery();

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        });

    });

})(jQuery);