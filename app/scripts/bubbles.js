define(
[
  'jquery',
  'text!templates/bubble.html',
  'dynamicanimation',
  'text!data/bubble.json',
  'underscore'
], function($,
            BubbleTemplate,
            DynamicAnimation,
            BubbleJSON) {

  'use strict';
  var bubbles;

  function onScroll() {
    // Update state changes
    var s = $(window).scrollTop(),
        d = $(document).height() - $(window).height(),
        c = $(window).height();
    var percent = ((s-$(window).height()) / (d-c));

    var bubble;
    for (var i=0; i < bubbles.length; i++) {
      bubble = bubbles[i];
      if (percent >= bubble.start) {
        $('.text-bubble:eq('+i+')').css('visibility',
                                        'visible');
      } else if (percent >= bubble.stop) {
        $('.text-bubble:eq('+i+')').css('visibility',
                                        'hidden');
      }
    }
  }

  return {
    initialize: function() {
      $(window).scroll(onScroll);
      bubbles = JSON.parse(BubbleJSON);
      _.each(bubbles, function(bubble) {
        $('#bubble-holder').append(_.template(BubbleTemplate, {
          title: bubble.small_text,
          date: "myDate",
          mainText: bubble.full_text,
          image: null
        }));
      });
    }
  };
});
