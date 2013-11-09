/*global define */

define(['jquery', 'video'], function($, Video) {
  'use strict';
  Video.initialize();
  return {
    parallax: function() {
      $('.hero-unit').replaceWith("/templates/parallax.tpl");
    }
  };
});

