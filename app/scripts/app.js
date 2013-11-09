/*global define */
define(['jquery'], function($) {
  'use strict';

  return {
    parallax: function() {
      $('.hero-unit').replaceWith("/templates/parallax.tpl");
    }
  };
});