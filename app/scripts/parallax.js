define(['jquery', 'text!templates/parallaxTemplate.html'], function($,
    ParallaxTemplate) {
  'use strict';
  var that = this;
  var yPos;
  var mrg=50;
  
  
  
  function onProgress(){
    var progress = $(window).scrollTop() / $('body').height();
    console.log(progress);
  }
    
 
  
  return {
    initialize: function() {
      $(window).scroll(function(){onProgress();});
      $('body').html(ParallaxTemplate);
      $('#anibutton').click(function(){
//        $('#anitest').toggleClass('animated bounceOutRight');
        if($('#anitest').hasClass('animated bounceOutRight')){
          $('#anitest').removeClass('animated bounceOutRight').css('margin-left',mrg+'px');
          $('#anitest').addClass('animated bounceInRight');
        }else{
          
          $('#anitest').removeClass('animated bounceInRight');
          $('#anitest').addClass('animated bounceOutRight');
          mrg=mrg+50;
        }
      });
       
    }
  };
});