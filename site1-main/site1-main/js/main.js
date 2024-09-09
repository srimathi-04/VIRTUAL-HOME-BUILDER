/**
 *
 * ---------------------------------------------------------------------------
 *
 * Template Name: oXe - Responsive HTML5 Personal Portfolio Template. 
 * Template URL:  http://lovesome.biz/oxe
 * Author : urosd
 * Version : 1.0
 *
 * --------------------------------------------------------------------------- 
 *
 */

(function ($) {
    'use strict';

    /*-----------------------
         Scroll Menu bg
      -----------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.header-area').addClass('menu-bg');
        } else {
            $('.header-area').removeClass('menu-bg');
        }
    });

    /*-----------------------
        smooth scroll
      -----------------------*/
    $('a.nav-link').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    /*-----------------------
        slider
      -----------------------*/
    $('.slider-area').vegas({
        delay: 7000,
        overlay: true,
        animation: ['kenburns', 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight', 'kenburnsUpLeft', 'kenburnsUpRight', 'kenburnsDownLeft', 'kenburnsDownRight'],
        slides: [{
                src: 'img/slider/01.jpg'
        },
            {
                src: 'img/slider/02.jpg'
            },
            {
                src: 'img/slider/03.jpg'
            }
            ]
    });

    /*---------- client slider ---------*/
    var client_slider = $('.client-comment-info');
    client_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*---------- blog slider ---------*/
    var blog_slider = $('.blog-slide');
    blog_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*-----------------------
        parallax
      -----------------------*/
    var parallax_effect = $('.parallax');
    parallax_effect.jarallax({
        speed: 0.5
    });

	/*-----------------------
        Circle Progress
      -----------------------*/
    function animateProgressBar() {
        // First circle Progress
        $('.first.circle').circleProgress({
            value: 0.75,
            size: 150,
            startAngle: 3,
            thickness: 5,
            emptyFill: "#1F1F1F",
            animation: {
                duration: 2200
            },
            fill: {
                color: "#777"
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
        });
        // Second circle Progress
        $('.second.circle').circleProgress({
            value: 0.80,
            size: 150,
            startAngle: 3,
            thickness: 5,
            emptyFill: "#1F1F1F",
            animation: {
                duration: 2200
            },
            fill: {
                color: "#777"
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
        });
        // Third circle Progress
        $('.third.circle').circleProgress({
            value: .95,
            size: 150,
            startAngle: 3,
            thickness: 5,
            emptyFill: "#1F1F1F",
            animation: {
                duration: 2200
            },
            fill: {
                color: "#777"
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
        });
        // Four Circle Progress
        $('.four.circle').circleProgress({
            value: .79,
            size: 150,
            startAngle: 3,
            thickness: 5,
            emptyFill: "#1F1F1F",
            animation: {
                duration: 2200
            },
            fill: {
                color: "#777"
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(79 * progress) + '<i>%</i>');
        });
    }

    if ($('.progress-area').length > 0) {
        var waypoint = new Waypoint({
            element: document.getElementById('progress'),
            handler: function (direction) {
                animateProgressBar();
                this.destroy();
            },
            offset: '75%'
        });
    };
	
	/*-----------------------
        google map
      -----------------------*/
    if ($('#map').length > 0) {
        var myCenter = new google.maps.LatLng(-33.7654872, 150.9103569);

        function initialize() {
            var mapProp = {
                zoom: 16,
                center: myCenter,
                scrollwheel: false,
                styles: [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                                "saturation": 36
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    }
                ],
                mapTpeIdy: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapProp);
            //add your location marker here 
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(-33.7654872, 150.9103569),
                map: map,
                draggable: true
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    };

	/*-----------------------
        Scroll Up
      -----------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<a class="hvr-icon-bob click-top"></a>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


    $(window).on('load', function () {

		/*-----------------------
			preloader
		  -----------------------*/
        $('.preloader').fadeOut('500');

		/*-----------------------
			Isotope
		  -----------------------*/
        // init Isotope        
        $('.iso-content').isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });
        // filter items on button click
        $('.iso-nav ul li').on('click', function () {
            $('.iso-nav ul li').removeClass('portfolio-active');
            $(this).addClass('portfolio-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });

    });
}(jQuery));
