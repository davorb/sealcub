define([
  'jquery',
  'text!templates/videoTemplate.html'
], function($,
            VideoTemplate) {
  'use strict';
  var videoElement;
  var videoSkip = 40;
  var videoLength = 30; // $('#video-element')[0].seekable.end(0)

  function onScroll() {
    videoElement.currentTime = videoSkip + videoLength * $(window).scrollTop() / $('body').height();
  }

  return {
    initialize: function() {
      $('body').append(VideoTemplate);
      var cw, ch;

      videoElement = document.getElementById('video-element');

      $(window).scroll(onScroll);
    }
  };
});
