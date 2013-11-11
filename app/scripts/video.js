define([
  'jquery',
  'text!templates/videoTemplate.html'
], function($,
            VideoTemplate) {
  'use strict';
  var videoElement, currentScrollPos, windowHeight, waitBeforePlaying;
  var videoLength = 30; // $('#video-element')[0].seekable.end(0)
  var windowStartPos;

  function onScroll() {
    var newVideoPos;
    currentScrollPos = $(window).scrollTop();
    if (currentScrollPos >= windowHeight) { //height
      videoElement.css('top', '0');
      if (currentScrollPos >= windowHeight + waitBeforePlaying) {
        videoElement[0].currentTime =
          videoLength * ($(window).scrollTop()-windowHeight-waitBeforePlaying) / $('body').height();
      }
    } else {
      newVideoPos = windowStartPos-currentScrollPos*0.7; //height
      videoElement[0].currentTime = 0;
      if (newVideoPos >= 0) {
        videoElement.css('top', newVideoPos+'px');
      }
    }
  }

  return {
    initialize: function(extraScrollSpace) {
      waitBeforePlaying = extraScrollSpace;
      windowHeight = $(window).height();
      windowStartPos = windowHeight * 0.7;
      $('body').append(VideoTemplate);
      videoElement = $('#video-element');
      $(window).scroll(onScroll);
    }
  };
});
