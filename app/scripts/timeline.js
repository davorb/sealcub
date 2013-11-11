define([
  'text!templates/timelineTemplate.html'
], function(TimelineTemplate) {
  'use strict';

  var timelineWidth;

  function onScroll() {
    var windowPercentage =
          $(window).scrollTop() / $('body').height();
    $('.timeline').css('left', -windowPercentage*timelineWidth);
  }

  return {
    initialize: function() {
      $('body').prepend(TimelineTemplate);
      timelineWidth = $('.timeline').width();
      console.log(timelineWidth);
      $(window).scroll(onScroll);
    }
  };
});
