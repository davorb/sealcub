define([
  'jquery',
  'text!templates/videoTemplate.html'
], function($,
            VideoTemplate) {
  'use strict';
  var videoElement;
  var videoLength = 23.07; // $('#video-element')[0].seekable.end(0)

  function onScroll() {
    videoElement.currentTime = videoLength * $(window).scrollTop() / $('body').height();
  }

  return {
    initialize: function() {
      $('body').html(VideoTemplate);
      var cw, ch;

      videoElement = document.getElementById('video-element');

      $(window).scroll(onScroll);
    }
  };
});
