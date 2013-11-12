define([
  'text!templates/timelineTemplate.html'
], function(TimelineTemplate) {
  'use strict';

  var timelineWidth,
      windowWidth,
      windowHeight,
      scrollPos,
      hasScrolledPastOverview,
      extraScrollSpace,
      seekerStartTime;

  function onScroll() {
    scrollPos = $(window).scrollTop();

    if (scrollPos >= windowHeight + extraScrollSpace) {
      var s = $(window).scrollTop(),
          d = $(document).height() - $(window).height(),
          c = $(window).height();
      var windowPercentage = ((s-$(window).height()) / (d-c));

      $('.time-indicator').css('left', windowPercentage*windowWidth-12);
      hasScrolledPastOverview = true;
      $('.timeline').removeClass('pop-out');
      $('.timeline').addClass('pop-in');
      $('.timeline').css('bottom', '0');
    } else if (scrollPos < windowHeight+extraScrollSpace &&
               hasScrolledPastOverview) {
      $('.timeline').removeClass('pop-in');
      $('.timeline').addClass('pop-out');
      $('.timeline').css('bottom', '-53px');
    }
  }

  return {
    initialize: function(scrollSpace, seekerStart) {
      extraScrollSpace = scrollSpace;
      seekerStartTime = seekerStart;
      $('body').prepend(TimelineTemplate);
      timelineWidth = $('.timeline').width();
      windowWidth = $(window).width();
      windowHeight = $(window).height();
      hasScrolledPastOverview = false;
      $(window).scroll(onScroll);
    }
  };
});
