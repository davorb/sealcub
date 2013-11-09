define([
  'jquery',
  'text!templates/videoTemplate.html'
], function($,
            VideoTemplate) {
  'use strict';
  var videoElement, canvas, context;

  function draw(width, height) {
    if(videoElement.paused || videoElement.ended) {
      return false;
    }
    context.drawImage(videoElement, 0, 0, width, height);
    return setTimeout(draw, 20, width, height);
  }

  return {
    initialize: function() {
      $('body').html(VideoTemplate);
      var cw, ch;

      videoElement = document.getElementById('video-element');
      canvas = document.getElementById('video-canvas');
      context = canvas.getContext('2d');

      cw = Math.floor(canvas.clientWidth / 1);
      ch = Math.floor(canvas.clientHeight / 1);
      canvas.width = cw;
      canvas.height = ch;

      videoElement.addEventListener('play', function() {
        draw(cw, ch);
      });
      videoElement.play();
    }
  };
});
