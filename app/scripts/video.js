define([
  'jquery',
  'text!templates/videoTemplate.html'
], function($,
            VideoTemplate) {
  'use strict';
  var videoElement, currentScrollPos, windowHeight;
  var videoSkip = 40;
  var videoLength = 30; // $('#video-element')[0].seekable.end(0)


  function onScroll() {
    var newVideoPos;
    currentScrollPos = $(window).scrollTop();
    if (currentScrollPos >= windowHeight * 1) {
      videoElement[0].currentTime =
        videoSkip + videoLength * ($(window).scrollTop()-windowHeight) / $('body').height();
    } else {
      newVideoPos = windowHeight-currentScrollPos;
      if (newVideoPos >= 0) {
        videoElement[0].currentTime = 1;
        videoElement.css('top', (windowHeight-currentScrollPos)+'px');
        console.log(windowHeight-currentScrollPos);
      } else {
        videoElement.css('top', '0');
      }
    }
  }

  return {
    initialize: function() {
      windowHeight = $(window).height();
      $('body').append(VideoTemplate);
      videoElement = $('#video-element');
      $(window).scroll(onScroll);
    }
  };
});
