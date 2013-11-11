define([
  'text!templates/timelineTemplate.html'
], function(TimelineTemplate) {
  'use strict';

  var timelineWidth,
      windowWidth,
      windowHeight,
      scrollPos,
      hasScrolledPastOverview;

  var extraScrollSpace = 380;

  function onScroll() {
    scrollPos = $(window).scrollTop();
    var windowPercentage = scrollPos / $('body').height();
    $('.time-indicator').css('left', windowPercentage*windowWidth-10);

    if (scrollPos >= windowHeight + extraScrollSpace) {
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
    initialize: function() {
      $('body').prepend(TimelineTemplate);
      timelineWidth = $('.timeline').width();
      windowWidth = $(window).width();
      windowHeight = $(window).height();
      hasScrolledPastOverview = false;
      $(window).scroll(onScroll);
    }
  };
});
