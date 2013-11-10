define([
  'jquery',
  'bubble'
], function($,
            Bubble) {
  'use strict';


  return {
    initialize: function() {
      //read from json file and init bubbles
      Bubble.initialize(0, 50, "Bubble", "newBubbleID");
    }
  };
});
