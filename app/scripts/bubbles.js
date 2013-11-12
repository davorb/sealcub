define(
[
  'jquery',
  'text!templates/bubble.html',
  'dynamicanimation',
  'text!data/cards.json',
  'underscore'
], function($,
            BubbleTemplate,
            DynamicAnimation,
            BubbleJSON) {

  'use strict';
  var bubbles;

  function setXY(bubble, index) {
    if (bubble.left) {
      $('.text-bubble:eq('+index+')').css('left',
                                          bubble.left);
    } else if (bubble.right) {
      $('.text-bubble:eq('+index+')').css('right',
                                          bubble.right);
    } else if (bubble.bottom) {
      $('.text-bubble:eq('+index+')').css('bottom',
                                          bubble.bottom);
    } else if (bubble.top) {
      $('.text-bubble:eq('+index+')').css('top',
                                          bubble.top);
    }
  }

  function onScroll() {
    // Update state changes
    var s = $(window).scrollTop(),
        d = $(document).height() - $(window).height(),
        c = $(window).height();
    var percent = ((s-$(window).height()) / (d-c));

    var bubble;
    for (var i=0; i < bubbles.length; i++) {
      bubble = bubbles[i];
      if (percent >= bubble.start && percent < bubble.stop) {
        $('.text-bubble:eq('+i+')').css('visibility',
                                        'visible');
      }
      if (percent >= bubble.stop) {
        $('.text-bubble:eq('+i+')').css('visibility',
                                        'hidden');
      }
    }
  }

  return {
    initialize: function() {
      $(window).scroll(onScroll);
      bubbles = JSON.parse(BubbleJSON);
      var bubble;
      for (var i=0; i < bubbles.length; i++) {
        bubble = bubbles[i];
        $('#bubble-holder').append(_.template(BubbleTemplate, {
          title: bubble.title,
          date: bubble.date,
          mainText: bubble.content,
          image: null
        }));
        setXY(bubble, i);
      }
    }
  };
});
