define(['jquery', 'text!templates/parallaxTemplate.html'], function($,
    ParallaxTemplate) {
  'use strict';
  var that = this;
  var window = $(window);
  var yPos;

  return {
    initialize: function() {
      $('body').html(ParallaxTemplate);
//      $('section[data-type="background"]').each(function() {
//        var $bgobj = $(this); // assigning the object
//        window.scroll(function() {
//          yPos = -($window.scrollTop() / $bgobj.data('speed'));
//          console.log(yPos);
//        });
//      });
      
      $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        window.scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
            alert("fdhdf");
        });
    });    
      

    }
  };
});