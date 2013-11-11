define([
  'jquery',
  'text!templates/videoTemplate.html'
], function($,
            VideoTemplate) {
  'use strict';
  var videoElement, currentScrollPos, windowHeight, waitBeforePlaying;
  var videoLength = 30; // $('#video-element')[0].seekable.end(0)


  function onScroll() {
    var newVideoPos;
    currentScrollPos = $(window).scrollTop();
    if (currentScrollPos >= windowHeight) {
      videoElement.css('top', '0');
      if (currentScrollPos >= windowHeight + waitBeforePlaying) {
        videoElement[0].currentTime =
          videoLength * ($(window).scrollTop()-windowHeight-waitBeforePlaying) / $('body').height();
      }
    } else {
      newVideoPos = windowHeight-currentScrollPos;
      videoElement[0].currentTime = 0;
      videoElement.css('top', (windowHeight-currentScrollPos)+'px');
    }
  }

  return {
    initialize: function(extraScrollSpace) {
      waitBeforePlaying = extraScrollSpace;
      windowHeight = $(window).height();
      $('body').append(VideoTemplate);
      videoElement = $('#video-element');
      $(window).scroll(onScroll);
    }
  };
});
