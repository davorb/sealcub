define(
    ['jquery', 'text!templates/bubble.html', 'dynamicanimation'],
    function($, BubbleTemplate, DynamicAnimation) {
      'use strict';
      var progress = 0;

      var bubbles = [
          {
            "start": "0.05",
            "stop": "0.4",
            "small_text": "JAVA",
            "full_text": "Programmerade för ett företag som heter Nilssons AB i java under tre år",
            "anim_in": "specialin",
            "anim_out": "bounceOutLeft",
            "anim_hover_on": "pulsespecial",
            "anim_hover_off": "miniwobble"
          },
          {
            "start": "0.3",
            "stop": "0.7",
            "small_text": "PHP",
            "full_text": "Programmerade för ett företag som heter Perssons AB i PHP under tre år",
            "anim_in": "specialin",

            "anim_out": "bounceOutLeft",
            "anim_hover_on": "pulsespecial",
            "anim_hover_off": "miniwobble"
          }, {
            "start": "0.35",
            "stop": "0.8",
            "small_text": "Utvecklare, Anderssons AB",
            "full_text": "\"Programmerade diverse produkter i Perl.\"",
            "anim_in": "specialin",
            "anim_out": "bounceOutLeft",
            "anim_hover_on": "pulsespecial",
            "anim_hover_off": "miniwobble"

          }, ];

      function onScroll() {
        progress = $(window).scrollTop() / $('body').height();
        animateBubbles(progress);
      }

      function animateBubbles(progress) {
        for ( var i = 0; i < bubbles.length; i++) {
          var shouldBeVisible = (progress > bubbles[i]['start'] && progress < bubbles[i]['stop']);
          var isVisible = $('#bubble' + i).hasClass('in');
          if (shouldBeVisible && !isVisible) { // animate in
            $('#bubble' + i).removeClass(bubbles[i]['anim_out']).show().addClass(bubbles[i]['anim_in']).addClass('in');
          } else if (!shouldBeVisible && isVisible) { // animate out
            $('#bubble' + i).removeClass(bubbles[i]['anim_in']).removeClass('in').addClass(bubbles[i]['anim_out']);
          }
        }
      }

      function createBubbles() {
        for ( var i = 0; i < bubbles.length; i++) {
          var bubbleInfo = bubbles[i];
          var text1 = bubbleInfo['small_text'];
          var text2 = bubbleInfo['full_text'];
          $('body').append(BubbleTemplate).children('#newBubble').attr("id",
              'bubble'+i).hide().children('strong').html(text1).hover(onHover(i), onLeaveHover(i));
        }
      }
      function onHover(bubble){
        return function(){
          var bubbleInfo = bubbles[bubble];
          var text1 = bubbleInfo['small_text'];
          var text2 = bubbleInfo['full_text'];
            $('#bubble'+bubble).children('a').css({
              'font-size': '1em'
            }).text(text2);
            $('#bubble'+bubble).removeClass(bubbleInfo['anim_in']);
            $('#bubble'+bubble).addClass(bubbleInfo['anim_hover_on']);
        };
      }
      function onLeaveHover(bubble){
        return function(){
          var bubbleInfo = bubbles[bubble];
          var text1 = bubbleInfo['small_text'];
          $('#bubble'+bubble).children('a').css({
            'font-size': '1em'
          }).text(text1);
          $('#bubble'+bubble).removeClass(bubbleInfo['anim_hover_on']);
          $('#bubble'+bubble).addClass(bubbleInfo['anim_hover_off']);
        };
      }

      function randomPositions() {
        var videoWidth = $('#video-element').width();
        var videoHeight = $('#video-element').height();
        $('.text-bubble').each(
            function() {
              var bubbleWidth = $(this).width();
              var bubbleHeight = $(this).height();
              var newLeft = Math.round((videoWidth - bubbleWidth)
                  * Math.random());
              var newTop = Math.round((videoHeight - bubbleHeight)
                  * Math.random());
              $(this).css({
                'top': newTop + 'px',
                'left': newLeft + 'px'
              });
            });
        DynamicAnimation.setInAnimStartPosition(videoWidth/2,videoHeight);
      }

      return {
        initialize: function() {
          $(window).scroll(onScroll);
          createBubbles();
          randomPositions();
        }
      };
    });
