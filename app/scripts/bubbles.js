define(
    ['jquery', 'text!templates/bubble.html'],
    function($, BubbleTemplate) {
      'use strict';
      var progress = 0;

      var bubbles = [
          {
            "start": "0.05",
            "stop": "0.4",
            "small_text": "Utvecklare, Nilssons AB",
            "full_text": "Programmerade för ett företag som heter Nilssons AB i java under tre år"
          },
          {
            "start": "0.3",
            "stop": "0.7",
            "small_text": "Utvecklare, Perssons AB",
            "full_text": "Programmerade för ett företag som heter Perssons AB i PHP under tre år"
          },
          {
            "start": "0.35",
            "stop": "0.8",
            "small_text": "Utvecklare, Anderssons AB",
            "full_text": "\"Programmerade diverse produkter i Perl.\""
          }, ];

      function onScroll() {
        progress = $(window).scrollTop() / $('body').height();
        animateBubbles(progress);
      }
      
      function animateBubbles(progress) {
        for ( var i = 0; i < bubbles.length; i++) {
          var shouldBeVisible = (progress > bubbles[i]['start'] && progress < bubbles[i]['stop']);
          // console.log(i+' visible:'+schouldBeVisible);
          var isVisible = $('#bubble' + i).hasClass('bounceInLeft');
          if (shouldBeVisible && !isVisible) { // animate in
            $('#bubble' + i).removeClass('bounceOutLeft');
            $('#bubble' + i).show().addClass('bounceInLeft');
          } else if (!shouldBeVisible && isVisible) { // animate out
            $('#bubble' + i).removeClass('bounceInLeft');
            $('#bubble' + i).addClass('bounceOutLeft');
          }
          console.log(isVisible);
        }
      }

      function createBubbles() {
        for ( var i = 0; i < bubbles.length; i++) {
          var bubbleInfo = bubbles[i];
          $('body').append(BubbleTemplate).children('#newBubble').attr("id",
              'bubble' + i).hide().html('<a>'+bubbleInfo['small_text']+'</a>').hover(function(){
                $(this).children('a').css({'font-size': '14px'}).text(bubbleInfo['full_text']);
              }, function(){
                $(this).children('a').css({'font-size': '40px'}).text(bubbleInfo['small_text']);
              });
        }
      }

      function randomPositions() {
        var videoWidth = $('#video-element').width();
        var videoHeight = $('#video-element').height();
        console.log(videoHeight);
        $('.text-bubble').each(function() {
          var bubbleWidth=$(this).width();
          var bubbleHeight=$(this).height();
          var newLeft=Math.round((videoWidth-bubbleWidth)*Math.random());
          var newTop=Math.round((videoHeight-bubbleHeight)*Math.random());
          $(this).css({
            'top': newTop+'px',
            'left': newLeft+'px'
          });
        });
      }

      return {
        initialize: function() {
          $(window).scroll(onScroll);
          createBubbles();
          randomPositions();
        }
      };
    });
