define([
  'jquery',
  'text!templates/videoTemplate.html'
], function($,
            VideoTemplate) {
  'use strict';
  var that = this;
  var videoElement, canvas, context;

  return {
    initialize: function() {
      $('body').html(VideoTemplate);
      var cw, ch;

      videoElement = document.getElementById('video-element');
      canvas = document.getElementById('video-canvas');
      context = canvas.getContext('2d');

      cw = Math.floor(canvas.clientWidth / 100);
      ch = Math.floor(canvas.clientHeight / 100);
      canvas.width = cw;
      canvas.height = ch;

      videoElement.addEventListener('play', function() {
        that.draw(cw, ch);
      });
    },

    draw: function(width, height) {
      if(videoElement.paused || videoElement.ended) {
        return false;
      }
      context.drawImage(videoElement, 0, 0, width, height);
      return setTimeout(that.draw, 20, width, height);
    }
  };
});
