define(
    ['jquery', 'text!templates/bubble.html', 'dynamicanimation',
    'text!data/bubble.json'], function($, BubbleTemplate, DynamicAnimation,
    BubbleJSON) {
  'use strict';
  var startLeft = $('#video-element').width();
  var endLeft = 0;
  var oldprogress = 0;
  var bubbles = JSON.parse(BubbleJSON);

  function onScroll() {
    // Update state changes
    var newProgress = $(window).scrollTop() / $('body').height();
    var progress = oldprogress - newProgress;
    oldprogress = newProgress;

    //        var top = Math.random() * 100;
    // DynamicAnimation.setInAnimStartPosition($('.time-indicator').css('left'),
    // top);
    animateBubbles(progress * 100);

  }

  function animateBubbles(progress) { //progress in precent
    console.log("Progress: " + progress);
    for ( var i = 0; i < bubbles.length; i++) {
      var pxch = bubbles[i]['speed'] * progress;
      var speed = Math.round(pxch);

      var currPos = bubbles[i]['pos'];
      if (i == 0) {
        console.log("Speed:" + bubbles[i]['speed']);
        console.log(currPos + " ch " + pxch);
        //console.log(direction);
      }

      bubbles[i]['pos'] = (currPos + (speed));
      //animate
      //var currPos = bubble.css('left');
      //currPos = currPos.substring(0, currPos.length - 2);
      //var newVal = (parseFloat(currPos) + (progressChange) * speed);

      drawBubble($('#bubble' + i), bubbles[i]);
    }

  }
  function drawBubble(jqueryObj, info) {
    var bubble = jqueryObj;
    bubble.css('left', info['pos'].toString() + "px");
  }

  function initBubbles() {
    for ( var i = 0; i < bubbles.length; i++) {
      //calcualte speed
      var progressLength = (bubbles[i]['stop'] - bubbles[i]['start']);
      console.log(bubbles[i]['small_text'] + " progresslength: "
          + progressLength)
      var pxLength = $('#video-element').width();

      bubbles[i]['speed'] = (pxLength / (progressLength * 100)); //pixlar per scrollprocent
      console.log(bubbles[i]['small_text'] + " speed: " + bubbles[i]['speed'])
      bubbles[i]['pxrest'] = 0;
      bubbles[i]['pos'] = pxLength
          + (bubbles[i]['start'] * 100 * bubbles[i]['speed']);

      //First draw
      drawBubble($('#bubble' + i), bubbles[i]);
    }
  }

  function createBubbles() {
    for ( var i = 0; i < bubbles.length; i++) {
      var bubbleInfo = bubbles[i];
      var text1 = bubbleInfo['small_text'];
      var text2 = bubbleInfo['full_text'];
      $('body').append(BubbleTemplate).children('#newBubble').attr("id",
          'bubble' + i).html('<p>' + text1 + '</p>').hover(onHover(i),
          onLeaveHover(i));
    }
  }
  function onHover(bubble) {
    return function() {
      var bubbleInfo = bubbles[bubble];
      var text1 = bubbleInfo['small_text'];
      var text2 = bubbleInfo['full_text'];
      $('#bubble' + bubble).children('p').css({
        'font-size': '1em'
      }).text(text2);
      $('#bubble' + bubble).removeClass(bubbleInfo['anim_in']);
      $('#bubble' + bubble).addClass(bubbleInfo['anim_hover_on']);

    };
  }
  function onLeaveHover(bubble) {
    return function() {
      var bubbleInfo = bubbles[bubble];
      var text1 = bubbleInfo['small_text'];
      $('#bubble' + bubble).children('p').css({
        'font-size': '1em'
      }).text(text1);
      $('#bubble' + bubble).removeClass(bubbleInfo['anim_hover_on']);
      $('#bubble' + bubble).addClass(bubbleInfo['anim_hover_off']);
    };
  }

  function setPositions() {
    var videoWidth = $('#video-element').width();
    var videoHeight = $('#video-element').height();
    $('.text-bubble').each(function() {
      var newLeft = Math.round(80 * Math.random()) + 3;
      var newTop = Math.round(videoHeight * Math.random());
      $(this).css({
        'top': newTop + 'px',
        'left': videoWidth + 'px'
      });
    });
  }

  return {
    initialize: function() {
      $(window).scroll(onScroll);
      createBubbles();
      setPositions();
      initBubbles();
    }
  };
});
