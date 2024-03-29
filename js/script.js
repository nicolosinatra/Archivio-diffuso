mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xvc2luYXRyYSIsImEiOiJjbGs4ZTd0aWowaXNqM2ZybzEzYmplaGF3In0.zJYGpj2MF2Nw8M8XHuXc8Q';



$( document ).ready(function() {
  
  var fileName = location.href.split("/").slice(-1); 

  /* ----------------------------------------------------------------------------------- per tutti ------------------------------------- */  

  $('.link').hover(
    function(){
      anime({
        targets: '.underline',
        translateX: [0, 120], 
        easing: 'easeInOutQuad',
        duration: 500
      })
    },function(){
      anime({
        targets: '.underline',
        translateX: [120, 0], 
        easing: 'easeInOutQuad',
        duration: 500
      })
    }
  );

  $('.menu-button').click(function() {
    anime({
      targets: '.div-menu',
      translateX: [0, '100vw'], 
      easing: 'easeInOutQuad',
      duration: 600
    })
  });

  $('.close-button').click(function() {
    anime({
      targets: '.div-menu',
      translateX: ['100vw', '0'], 
      easing: 'easeInOutQuad',
    })
  });

  /* ------------------------------------------------------------------------------------------ selezione itinerario ------------------------------------- */  
  if(fileName[0] == 'scelta_itinerario.html'){
      
    // map.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');

    if (window.innerWidth > 400){
      map_scelta_itinerario = new mapboxgl.Map({
        container: 'map-scelta-itinerario', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        // style: 'mapbox://styles/mapbox/streets-v12', // style URL
        style: 'mapbox://styles/nicolosinatra/clmnjwye901wi01r4h6n9fekx', // style URL
        center: [12.909,  43.9075], // starting center in [lng, lat]
        zoom: 15.3 // starting zoom
      });
    }else{ 
      map_scelta_itinerario = new mapboxgl.Map({
        container: 'map-scelta-itinerario', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        // style: 'mapbox://styles/mapbox/streets-v12', // style URL
        style: 'mapbox://styles/nicolosinatra/clmnjwye901wi01r4h6n9fekx', // style URL
        center: [12.909,  43.9075], // starting center in [lng, lat]
        zoom: 14.2 // starting zoom
      });
    }

    map_scelta_itinerario.on('load', function(){
      map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'visible');
      map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'visible');
      map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'visible');
      map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'visible');
    })
    

    // quanto mostrare dei div affianco
    var div_width_off = '50px';

    // --------------------------------------------- breakpoints
    if(window.innerWidth > 500){
      div_width_off = '100px';
    }
    else if (window.innerWidth > 756){
      div_width_off = '350px';
    }
    // --------------------------------------------- breakpoints

    var altezzacontenitore;
    var larghezzacontenitore;

    $(document).ready(function() {
      altezzacontenitore = $(".slick-slide").outerHeight();
      $(".container-tappe").css('height',altezzacontenitore);
      larghezzacontenitore = $(".slick-slide").outerWidth();
      $(".container-tappe").css("width",larghezzacontenitore);
    });


    $('.slider').slick({
      centerMode: true,
      centerPadding: div_width_off,
      slidesToShow: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: div_width_off,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: div_width_off,
            slidesToShow: 1
          }
        }
      ]
    });

    $('.slider-nav-thumbnails').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider',
      dots: true,
      focusOnSelect: true
    });

    //set active class to first thumbnail slides
    $('.slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $('.slick-slide').removeClass('slick-active');
      $('.slick-slide').eq(mySlideNumber).addClass('slick-active');
    });

    var slide = 0;

    //UPDATED 
    $('.slider').on('afterChange', function(event, slick, currentSlide){  
      console.log(currentSlide);
      slide = currentSlide;

      
      if (window.innerWidth > 400){
        // 0 --> edifici primo novecento
        if(currentSlide == 0){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909,  43.9075], 
            duration: 1000,
            essential: true,
            zoom: 15.3
          });

        // 1 --> edifici secondo novecento
        }else if(currentSlide == 1){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.9095, 43.908],
            duration: 1000,
            essential: true,
            zoom: 15
          });

        // 2 --> architetture manifesto
        }else if(currentSlide == 2){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909, 43.9098],
            duration: 1000,
            essential: true,
            zoom: 15.5
          });

        // 3 --> edifici aymonino
        }else if(currentSlide == 3){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.902, 43.8995],
            duration: 1000,
            essential: true,
            zoom: 13.9
          });

        // 4 --> edifici fuori dal centro
        }else if(currentSlide == 4){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'visible');

          map_scelta_itinerario.flyTo({
            center: [12.881, 43.883],
            duration: 1000,
            essential: true,
            zoom: 13.65
          });

        }
      }
      else{
         // 0 --> edifici primo novecento
        if(currentSlide == 0){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909,  43.9075], 
            duration: 1000,
            essential: true,
            zoom: 14.2
          });

        // 1 --> edifici secondo novecento
        }else if(currentSlide == 1){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909, 43.907],
            duration: 1000,
            essential: true,
            zoom: 13.8
          });
        
        // 2 --> architetture manifesto
        }else if(currentSlide == 2){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909, 43.9095],
            duration: 1000,
            essential: true,
            zoom: 14.1
          });
        
        // 3 --> edifici aymonino
        }else if(currentSlide == 3){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.902, 43.898],
            duration: 1000,
            essential: true,
            zoom: 12.7
          });

        // 4 --> edifici fuori dal centro
        }else if(currentSlide == 4){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'visible');

          map_scelta_itinerario.flyTo({
            center: [12.882, 43.882],
            duration: 1000,
            essential: true,
            zoom: 12.3
          });

        }
      }
   

      
    });

    var winHeight = window.innerHeight;

    $('.content-slider').click(function() {
      console.log(slide);
      // mostrare div con capitoli itinerario
      if (slide == 0){
        $('.container-tappe.primo-novecento').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-primo-novecento', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.primo-novecento',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.primo-novecento').addClass('active');
      }
      else if (slide == 1){
        $('.container-tappe.secondo-novecento').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-secondo-novecento', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.secondo-novecento',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.secondo-novecento').addClass('active');
      }
      else if (slide == 2){
        $('.container-tappe.manifesto').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-manifesto', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.manifesto',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.manifesto').addClass('active');
      }
      else if (slide == 3){
        $('.container-tappe.aymonino').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-aymonino', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.aymonino',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.aymonino').addClass('active');
      }
      else if (slide == 4){
        $('.container-tappe.fuori-centro').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-fuori-centro', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.fuori-centro',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.fuori-centro').addClass('active');
      }
      $('.container-tappe').css('pointer-events', 'all');
          
    });


    
    $('.close-button-tappe').click(function() {
      $('.container-tappe').css('pointer-events', 'none');
      setTimeout(() => {
        anime({targets: '.container-tappe', opacity: 0, easing: 'easeInOutQuad', duration: 300});
      }, 200);
      setTimeout(() => {
        anime({targets: '.container-contenuti-tappa', opacity: 0, easing: 'easeInOutQuad', duration: 200});
      }, 10);
      if(slide == 0){
        anime({
          targets: '.container-tappe.primo-novecento',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }
      else if(slide == 1){
        anime({
          targets: '.container-tappe.secondo-novecento',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }
      else if(slide == 2){
        anime({
          targets: '.container-tappe.manifesto',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }
      else if(slide == 3){
        anime({
          targets: '.container-tappe.aymonino',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }
      else if(slide == 4){
        anime({
          targets: '.container-tappe.fuori-centro',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }      
    });

    $('.menu-button').click(function() {
      anime({
        targets: '.div-menu',
        translateX: [0, '100vw'], 
        easing: 'easeInOutQuad',
        duration: 600
      })
    });
  
    $('.close-button').click(function() {
      anime({
        targets: '.div-menu',
        translateX: ['100vw', '0'], 
        easing: 'easeInOutQuad',
      })
    });
  }

  

  /* ------------------------------------------------------------------------------------------ selezione itinerario test mode -------------------------------------- */  

  else if(fileName[0] == 'scelta_itinerario_2.html'){
    
    // map.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
    if (window.innerWidth > 400){
      map_scelta_itinerario = new mapboxgl.Map({
        container: 'map-scelta-itinerario', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        // style: 'mapbox://styles/mapbox/streets-v12', // style URL
        style: 'mapbox://styles/nicolosinatra/clmnjwye901wi01r4h6n9fekx', // style URL
        center: [12.909,  43.9075], // starting center in [lng, lat]
        zoom: 15.3 // starting zoom
      });
    }else{ 
      map_scelta_itinerario = new mapboxgl.Map({
        container: 'map-scelta-itinerario', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        // style: 'mapbox://styles/mapbox/streets-v12', // style URL
        style: 'mapbox://styles/nicolosinatra/clmnjwye901wi01r4h6n9fekx', // style URL
        center: [12.909,  43.9075], // starting center in [lng, lat]
        zoom: 14.2 // starting zoom
      });
    }

    

    map_scelta_itinerario.on('load', function(){
      map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'visible');
      map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'visible');
      map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'visible');
      map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'visible');
    })
    

    // quanto mostrare dei div affianco
    var div_width_off = '50px';

    // --------------------------------------------- breakpoints
    if(window.innerWidth > 500){
      div_width_off = '100px';
    }
    else if (window.innerWidth > 756){
      div_width_off = '350px';
    }
    // --------------------------------------------- breakpoints

    var altezzacontenitore;
    var larghezzacontenitore;

    $(document).ready(function() {
      altezzacontenitore = $(".slick-slide").outerHeight();
      $(".container-tappe").css('height',altezzacontenitore);
      larghezzacontenitore = $(".slick-slide").outerWidth();
      $(".container-tappe").css("width",larghezzacontenitore);
    });

    $('.slider').slick({
      centerMode: true,
      centerPadding: div_width_off,
      slidesToShow: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: div_width_off,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: div_width_off,
            slidesToShow: 1
          }
        }
      ]
    });

    $('.slider-nav-thumbnails').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider',
      dots: true,
      focusOnSelect: true
    });

    //set active class to first thumbnail slides
    $('.slick-slide').eq(0).addClass('slick-active');

    // On before slide change match active thumbnail to current slide
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $('.slick-slide').removeClass('slick-active');
      $('.slick-slide').eq(mySlideNumber).addClass('slick-active');
    });

    var slide = 0;

    //UPDATED 
    $('.slider').on('afterChange', function(event, slick, currentSlide){  
      console.log(currentSlide);
      slide = currentSlide;

      
      if (window.innerWidth > 400){
        // 0 --> edifici primo novecento
        if(currentSlide == 0){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909,  43.9075], 
            duration: 1000,
            essential: true,
            zoom: 15.3
          });

        // 1 --> edifici secondo novecento
        }else if(currentSlide == 1){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.9095, 43.908],
            duration: 1000,
            essential: true,
            zoom: 15
          });

        // 2 --> architetture manifesto
        }else if(currentSlide == 2){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909, 43.9098],
            duration: 1000,
            essential: true,
            zoom: 15.5
          });

        // 3 --> edifici aymonino
        }else if(currentSlide == 3){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.902, 43.8995],
            duration: 1000,
            essential: true,
            zoom: 13.9
          });

        // 4 --> edifici fuori dal centro
        }else if(currentSlide == 4){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'visible');

          map_scelta_itinerario.flyTo({
            center: [12.881, 43.883],
            duration: 1000,
            essential: true,
            zoom: 13.65
          });

        }
      }
      else{
         // 0 --> edifici primo novecento
        if(currentSlide == 0){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909,  43.9075], 
            duration: 1000,
            essential: true,
            zoom: 14.2
          });

        // 1 --> edifici secondo novecento
        }else if(currentSlide == 1){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909, 43.907],
            duration: 1000,
            essential: true,
            zoom: 13.8
          });
        
        // 2 --> architetture manifesto
        }else if(currentSlide == 2){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.909, 43.9095],
            duration: 1000,
            essential: true,
            zoom: 14.1
          });
        
        // 3 --> edifici aymonino
        }else if(currentSlide == 3){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'visible');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'none');

          map_scelta_itinerario.flyTo({
            center: [12.902, 43.898],
            duration: 1000,
            essential: true,
            zoom: 12.7
          });

        // 4 --> edifici fuori dal centro
        }else if(currentSlide == 4){

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-primo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-secondo-novecento-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-architetture-manifesto-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino', 'visibility', 'none');
          map_scelta_itinerario.setLayoutProperty('path-edifici-aymonino-bg', 'visibility', 'none');

          map_scelta_itinerario.setLayoutProperty('nomi-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('icone-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro', 'visibility', 'visible');
          map_scelta_itinerario.setLayoutProperty('path-edifici-fuori-dal-centro-bg', 'visibility', 'visible');

          map_scelta_itinerario.flyTo({
            center: [12.882, 43.882],
            duration: 1000,
            essential: true,
            zoom: 12.3
          });

        }
      }
      
   

      
    });

    var winHeight = window.innerHeight;



    $('.content-slider').click(function() {
      console.log(slide);
      // mostrare div con capitoli itinerario
      if (slide == 0){
        $('.container-tappe.primo-novecento').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-primo-novecento', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.primo-novecento',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.primo-novecento').addClass('active');
      }
      else if (slide == 1){
        $('.container-tappe.secondo-novecento').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-secondo-novecento', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.secondo-novecento',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.secondo-novecento').addClass('active');
      }
      else if (slide == 2){
        $('.container-tappe.manifesto').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-manifesto', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.manifesto',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.manifesto').addClass('active');
      }
      else if (slide == 3){
        $('.container-tappe.aymonino').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-aymonino', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.aymonino',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.aymonino').addClass('active');
      }
      else if (slide == 4){
        $('.container-tappe.fuori-centro').css('opacity', '1');
        setTimeout(() => {
          anime({targets: '.container-contenuti-tappa-fuori-centro', opacity: 1, easing: 'easeInOutQuad', duration: 300});
        }, 100);
        anime({
          targets: '.container-tappe.fuori-centro',
          width: larghezzacontenitore+10,
          height: winHeight/100*83, 
          bottom: 30,
          easing: 'easeInOutQuad',
          duration: 300
        }); 
        $('.container-tappe.fuori-centro').addClass('active');
      }
      $('.container-tappe').css('pointer-events', 'all');
          
    });


    
    $('.close-button-tappe').click(function() {
      $('.container-tappe').css('pointer-events', 'none');
      setTimeout(() => {
        anime({targets: '.container-tappe', opacity: 0, easing: 'easeInOutQuad', duration: 300});
      }, 200);
      setTimeout(() => {
        anime({targets: '.container-contenuti-tappa', opacity: 0, easing: 'easeInOutQuad', duration: 200});
      }, 10);
      if(slide == 0){
        anime({
          targets: '.container-tappe.primo-novecento',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }
      else if(slide == 1){
        anime({
          targets: '.container-tappe.secondo-novecento',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }
      else if(slide == 2){
        anime({
          targets: '.container-tappe.manifesto',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }
      else if(slide == 3){
        anime({
          targets: '.container-tappe.aymonino',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }
      else if(slide == 4){
        anime({
          targets: '.container-tappe.fuori-centro',
          width: larghezzacontenitore,
          height: '170px', 
          bottom: 40,
          easing: 'easeInOutQuad',
          duration: 300
        }) 
      }      
    });

    $('.menu-button').click(function() {
      anime({
        targets: '.div-menu',
        translateX: [0, '100vw'], 
        easing: 'easeInOutQuad',
        duration: 600
      })
    });
  
    $('.close-button').click(function() {
      anime({
        targets: '.div-menu',
        translateX: ['100vw', '0'], 
        easing: 'easeInOutQuad',
      })
    });
  }

  /* ------------------------------------------------------------------------------------------ esperienza sul luogo -------------------------------------- */  
  else if(fileName[0] == 'mappa.html'){

    var map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        // style: 'mapbox://styles/mapbox/streets-v12', // style URL
        style: 'mapbox://styles/nicolosinatra/clmnjwye901wi01r4h6n9fekx', // style URL
        center: [-12.9, 43.9], // starting center in [lng, lat]
        zoom: 15.2 // starting zoom
    });
    
    var user_lat;
    var user_lng;
    
    let id_posizione_aggiornata;
    let posizione_da_raggiungere;
    let options;
    
    const campo_sonoro_economia_corporativa_prova = turf.polygon([[
            [12.910300517671601,43.91176306150258],
            [12.910281959159315,43.91176240468912],
            [12.910263579376862,43.91176044057426],
            [12.910245555332777,43.911757188073615],
            [12.910228060609528,43.911752678510766],
            [12.910211263691814,43.91174695531552],
            [12.910195326343915,43.91174007360576],
            [12.910180402051775,43.911732099656476],
            [12.910166634544847,43.91172311026159],
            [12.910154156411863,43.91171319199432],
            [12.910143087823949,43.911702440373446],
            [12.910133535377302,43.911690958943375],
            [12.910125591066626,43.91167885827693],
            [12.9101193313992,43.911666254910514],
            [12.910114816658092,43.91165327022169],
            [12.910112090321654,
            43.91164002926035
            ],
            [
            12.910111178644815,
            43.911626659544275
            ],
            [
            12.910112090406312,
            43.91161328983121
            ],
            [
            12.910114816824155,
            43.911600048878746
            ],
            [
            12.910119331640285,
            43.911587064204376
            ],
            [
            12.910125591373472,
            43.9115744608574
            ],
            [
            12.910133535738112,
            43.911562360214646
            ],
            [
            12.910143088224862,
            43.911550878811596
            ],
            [
            12.910154156837471,
            43.91154012722004
            ],
            [
            12.91016663497879,
            43.911530208983265
            ],
            [
            12.910180402477382,
            43.911521219618876
            ],
            [
            12.910195326744827,
            43.91151324569891
            ],
            [
            12.910211264052625,
            43.91150636401618
            ],
            [
            12.910228060916372,
            43.911500640844636
            ],
            [
            12.91024555557386,
            43.91149613130121
            ],
            [
            12.910263579542928,
            43.91149287881501
            ],
            [
            12.91028195924397,
            43.91149091470904
            ],
            [
            12.910300517671601,
            43.911490257898585
            ],
            [
            12.910319076099231,
            43.91149091470904
            ],
            [
            12.910337455800274,
            43.91149287881501
            ],
            [
            12.910355479769342,
            43.91149613130121
            ],
            [
            12.91037297442683,
            43.911500640844636
            ],
            [
            12.910389771290577,
            43.91150636401618
            ],
            [
            12.910405708598375,
            43.91151324569891
            ],
            [
            12.91042063286582,
            43.911521219618876
            ],
            [
            12.910434400364412,
            43.911530208983265
            ],
            [
            12.91044687850573,
            43.91154012722004
            ],
            [
            12.91045794711834,
            43.911550878811596
            ],
            [
            12.91046749960509,
            43.911562360214646
            ],
            [
            12.91047544396973,
            43.9115744608574
            ],
            [
            12.910481703702917,
            43.911587064204376
            ],
            [
            12.910486218519047,
            43.911600048878746
            ],
            [
            12.91048894493689,
            43.91161328983121
            ],
            [
            12.910489856698387,
            43.911626659544275
            ],
            [
            12.910488945021548,
            43.91164002926035
            ],
            [
            12.91048621868511,
            43.91165327022169
            ],
            [
            12.910481703944004,
            43.911666254910514
            ],
            [
            12.910475444276576,
            43.91167885827693
            ],
            [
            12.9104674999659,
            43.911690958943375
            ],
            [
            12.910457947519253,
            43.911702440373446
            ],
            [
            12.910446878931339,
            43.91171319199432
            ],
            [
            12.910434400798358,
            43.91172311026159
            ],
            [
            12.910420633291427,
            43.911732099656476
            ],
            [
            12.910405708999287,
            43.91174007360576
            ],
            [
            12.910389771651388,
            43.91174695531552
            ],
            [
            12.910372974733674,
            43.911752678510766
            ],
            [
            12.910355480010425,
            43.911757188073615
            ],
            [
            12.91033745596634,
            43.91176044057426
            ],
            [
            12.910319076183887,
            43.91176240468912
            ],
            [
            12.910300517671601,
            43.91176306150258
            ]
      ]]);
    
    const campo_sonoro_casa_prova = turf.polygon([[
            [
            12.91154193200984,
            43.915277681338715
            ],
            [
            12.911511487269262,
            43.915276603915935
            ],
            [
            12.911481335731462,
            43.915273382023884
            ],
            [
            12.911451767775384,
            43.915268046691466
            ],
            [
            12.911423068159513,
            43.915260649301445
            ],
            [
            12.91139551327939,
            43.91525126109545
            ],
            [
            12.911369368505666,
            43.91523997248799
            ],
            [
            12.911344885628358,
            43.91522689219554
            ],
            [
            12.91132230043191,
            43.915212146189624
            ],
            [
            12.91130183042444,
            43.915195876483516
            ],
            [
            12.911283672742984,
            43.91517823976454
            ],
            [
            12.911268002254984,
            43.91515940588511
            ],
            [
            12.911254969874252,
            43.915139556226826
            ],
            [
            12.911244701107645,
            43.91511888195363
            ],
            [
            12.91123729484645,
            43.91509758217087
            ],
            [
            12.911232822414108,
            43.91507586200764
            ],
            [
            12.91123132687943,
            43.91505393064132
            ],
            [
            12.911232822641951,
            43.91503199928309
            ],
            [
            12.911237295293379,
            43.91501027914379
            ],
            [
            12.911244701756484,
            43.9149889793999
            ],
            [
            12.911254970700067,
            43.91496830517903
            ],
            [
            12.911268003226041,
            43.91494845558448
            ],
            [
            12.911283673821965,
            43.91492962177777
            ],
            [
            12.91130183156988,
            43.91491198513773
            ],
            [
            12.911322301599792,
            43.91489571551368
            ],
            [
            12.911344886773797,
            43.914880969589824
            ],
            [
            12.911369369584648,
            43.91486788937629
            ],
            [
            12.911395514250447,
            43.914856600841546
            ],
            [
            12.911423068985329,
            43.91484721269929
            ],
            [
            12.911451768424222,
            43.914839815361596
            ],
            [
            12.91148133617839,
            43.91483448006805
            ],
            [
            12.911511487497105,
            43.91483125819994
            ],
            [
            12.91154193200984,
            43.91483018078523
            ],
            [
            12.911572376522573,
            43.91483125819994
            ],
            [
            12.911602527841287,
            43.91483448006805
            ],
            [
            12.911632095595456,
            43.914839815361596
            ],
            [
            12.911660795034349,
            43.91484721269929
            ],
            [
            12.91168834976923,
            43.914856600841546
            ],
            [
            12.911714494435031,
            43.91486788937629
            ],
            [
            12.911738977245882,
            43.914880969589824
            ],
            [
            12.911761562419887,
            43.91489571551368
            ],
            [
            12.911782032449798,
            43.91491198513773
            ],
            [
            12.911800190197713,
            43.91492962177777
            ],
            [
            12.911815860793636,
            43.91494845558448
            ],
            [
            12.911828893319614,
            43.91496830517903
            ],
            [
            12.911839162263195,
            43.9149889793999
            ],
            [
            12.9118465687263,
            43.91501027914379
            ],
            [
            12.91185104137773,
            43.91503199928309
            ],
            [
            12.911852537140248,
            43.91505393064132
            ],
            [
            12.911851041605571,
            43.91507586200764
            ],
            [
            12.911846569173228,
            43.91509758217087
            ],
            [
            12.911839162912036,
            43.91511888195363
            ],
            [
            12.911828894145426,
            43.915139556226826
            ],
            [
            12.911815861764694,
            43.91515940588511
            ],
            [
            12.911800191276694,
            43.91517823976454
            ],
            [
            12.911782033595237,
            43.915195876483516
            ],
            [
            12.911761563587767,
            43.915212146189624
            ],
            [
            12.911738978391321,
            43.91522689219554
            ],
            [
            12.911714495514012,
            43.91523997248799
            ],
            [
            12.911688350740288,
            43.91525126109545
            ],
            [
            12.911660795860165,
            43.915260649301445
            ],
            [
            12.911632096244297,
            43.915268046691466
            ],
            [
            12.911602528288215,
            43.915273382023884
            ],
            [
            12.911572376750415,
            43.915276603915935
            ],
            [
            12.91154193200984,
            43.915277681338715
            ]
    ]]);
    
    
    const campo_sonoro_tabaccheria = turf.polygon([[
        [
            12.916044561733713,
            43.915397789466084
          ],
          [
            12.91602220493381,
            43.915396998273515
          ],
          [
            12.916000063443883,
            43.915394632315454
          ],
          [
            12.915978350500282,
            43.91539071437757
          ],
          [
            12.915957275212092,
            43.915385282192055
          ],
          [
            12.915937040547233,
            43.91537838807424
          ],
          [
            12.915917841377716,
            43.91537009841872
          ],
          [
            12.915899862602881,
            43.915360493059985
          ],
          [
            12.915883277368668,
            43.91534966450349
          ],
          [
            12.915868245400128,
            43.91533771703482
          ],
          [
            12.915854911463159,
            43.91532476571525
          ],
          [
            12.915843403970346,
            43.91531093527366
          ],
          [
            12.9158338337443,
            43.91529635890536
          ],
          [
            12.915826292950399,
            43.91528117698923
          ],
          [
            12.915820854209237,
            43.91526553573581
          ],
          [
            12.9158175698973,
            43.91524958577926
          ],
          [
            12.915816471642598,
            43.91523348072652
          ],
          [
            12.915817570020163,
            43.915217375678154
          ],
          [
            12.915820854450248,
            43.9152014257345
          ],
          [
            12.91582629330029,
            43.91518578450206
          ],
          [
            12.915833834189627,
            43.915170602614126
          ],
          [
            12.915843404493998,
            43.91515602628021
          ],
          [
            12.915854912045006,
            43.91514219587784
          ],
          [
            12.915868246017817,
            43.91512924460081
          ],
          [
            12.915883277998459,
            43.91511729717639
          ],
          [
            12.915899863220568,
            43.91510646866416
          ],
          [
            12.915917841959567,
            43.915096863347976
          ],
          [
            12.915937041070883,
            43.91508857373167
          ],
          [
            12.915957275657421,
            43.915081679648225
          ],
          [
            12.915978350850173,
            43.91507624749092
          ],
          [
            12.916000063684894,
            43.915072329574016
          ],
          [
            12.916022205056677,
            43.91506996362886
          ],
          [
            12.916044561733713,
            43.91506917244064
          ],
          [
            12.916066918410747,
            43.91506996362886
          ],
          [
            12.916089059782532,
            43.915072329574016
          ],
          [
            12.91611077261725,
            43.91507624749092
          ],
          [
            12.916131847810004,
            43.915081679648225
          ],
          [
            12.91615208239654,
            43.91508857373167
          ],
          [
            12.916171281507859,
            43.915096863347976
          ],
          [
            12.916189260246854,
            43.91510646866416
          ],
          [
            12.916205845468966,
            43.91511729717639
          ],
          [
            12.916220877449607,
            43.91512924460081
          ],
          [
            12.916234211422417,
            43.91514219587784
          ],
          [
            12.916245718973427,
            43.91515602628021
          ],
          [
            12.916255289277798,
            43.915170602614126
          ],
          [
            12.916262830167133,
            43.91518578450206
          ],
          [
            12.916268269017179,
            43.9152014257345
          ],
          [
            12.91627155344726,
            43.915217375678154
          ],
          [
            12.916272651824825,
            43.91523348072652
          ],
          [
            12.916271553570127,
            43.91524958577926
          ],
          [
            12.916268269258188,
            43.91526553573581
          ],
          [
            12.916262830517026,
            43.91528117698923
          ],
          [
            12.916255289723125,
            43.91529635890536
          ],
          [
            12.916245719497077,
            43.91531093527366
          ],
          [
            12.916234212004266,
            43.91532476571525
          ],
          [
            12.916220878067294,
            43.91533771703482
          ],
          [
            12.916205846098755,
            43.91534966450349
          ],
          [
            12.916189260864543,
            43.915360493059985
          ],
          [
            12.916171282089707,
            43.91537009841872
          ],
          [
            12.916152082920194,
            43.91537838807424
          ],
          [
            12.916131848255334,
            43.915385282192055
          ],
          [
            12.916110772967142,
            43.91539071437757
          ],
          [
            12.916089060023541,
            43.915394632315454
          ],
          [
            12.916066918533613,
            43.915396998273515
          ],
          [
            12.916044561733713,
            43.915397789466084
          ]
    ]]);
    
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    });
    // Add the control to the map.
    map.addControl(geolocate);
    map.on('load', () => {
        geolocate.trigger();      
    });
    
    
    function success(pos) {
        const user_crd = pos.coords;
        user_lng = user_crd.longitude;
        user_lat = user_crd.latitude;
    
        // map.setCenter([user_lng, user_lat]);
        console.log("Your current position is:");
        console.log("Latitude : " + user_lat);
        console.log(`Longitude: ${user_lng}`);
        console.log(`More or less ${user_crd.accuracy} meters.`);
    
        // $('.dentro_fuori').text(user_lng + ", "+ user_lat);
    
        var user = turf.point([parseFloat(user_lng), parseFloat(user_lat)]);
            console.log("user dentro:"+ turf.booleanPointInPolygon(user, campo_sonoro_casa_prova));
        
            if(turf.booleanPointInPolygon(user, campo_sonoro_casa_prova)){
                jQuery(".dentro_fuori").text("dentro area casa, " + user_lng + ", "+ user_lat);
            }else if(turf.booleanPointInPolygon(user, campo_sonoro_economia_corporativa_prova)){
                jQuery(".dentro_fuori").text("dentro area economia corporativa, " + user_lng + ", "+ user_lat);
            }else if(turf.booleanPointInPolygon(user, campo_sonoro_tabaccheria)){
                jQuery(".dentro_fuori").text("dentro area tabaccheria, " + user_lng + ", "+ user_lat);
            }
            else{
                jQuery(".dentro_fuori").text("fuori, " + user_lng + ", "+ user_lat);
            }
    
        // per verificare se sono arrivato a destinazione
        /* if (posizione_da_raggiungere.latitude === user_crd.latitude && posizione_da_raggiungere.longitude === user_crd.longitude) {
            console.log("Congratulations, you reached the target");
            navigator.geolocation.clearWatch(id);
        } */
    }
    
    function error(err) {
        console.error(`ERROR(${err.code}): ${err.message}`);
    }
    
    target = {
        latitude: 0,
        longitude: 0,
    };
    
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };
    
    id_posizione_aggiornata = navigator.geolocation.watchPosition(success, error, options); 
  
  }

});


