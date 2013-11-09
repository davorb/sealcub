define([
  'jquery',
  'text!templates/parallaxTemplate.html'
], function($,
            ParallaxTemplate) {
  'use strict';
  var that = this;

  return {
    initialize: function() {
      $('body').html(ParallaxTemplate);
    }
  };
});