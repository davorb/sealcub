define(
[
  'jquery',
  'text!templates/overviewTemplate.html',
  'teletype'
], function($,
            OverviewTemplate,
            Teletype) {
  'use strict';
  return {
    initialize: function() {
      $('body').prepend(OverviewTemplate);
      $('#overview').css('height',
                         $(window).height());
      // $('#intro-text').teletype({
      //   animDelay: 100,
      //   text: 'john smith'
      // });
      $('#intro-title').teletype({
        animDelay: 120,
        text: 'developer'
      });
    }
  };
});
