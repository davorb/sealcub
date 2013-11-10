define([
  'jquery',
  'text!templates/bubble.html'
], function($,
            BubbleTemplate) {
  'use strict';
  var start;
  var stop;
  function onScroll() {
    var progress= $(window).scrollTop() / $('body').height();
    console.log(start);
    console.log(stop);
  }

  return {
    initialize: function(startInit, stopInit, textInit, id) {
      start=startInit;
      stop=stopInit;
      $('body').append(BubbleTemplate);
      $('#newBubble').text(textInit).attr("id", id);
      
      $(window).scroll(onScroll);
    }
  };
});
