define(
[
  'jquery',
  'text!templates/overview.html'
], function($, OverviewTemplate) {
  'use strict';
  return {
    initialize: function() {
      $('body').prepend(OverviewTemplate);
      $('#overview').css('height',
                         $(window).height());
    }
  };
});
