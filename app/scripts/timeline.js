define([
  'text!templates/timelineTemplate.html'
], function(TimelineTemplate) {
  'use strict';

  var timelineWidth, windowWidth;

  function onScroll() {
    var windowPercentage =
          $(window).scrollTop() / $('body').height();
    //$('.timeline').css('left', -windowPercentage*timelineWidth);
    $('.time-indicator').css('left', windowPercentage*windowWidth-10);
  }

  return {
    initialize: function() {
      $('body').prepend(TimelineTemplate);
      timelineWidth = $('.timeline').width();
      windowWidth = $(window).width();
      $(window).scroll(onScroll);
    }
  };
});
