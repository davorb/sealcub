define(
    ['jquery', 'text!templates/overview.html'],
    function($, OverviewTemplate) {
      'use strict';
    return {
    	initialize: function() {
      $('body').html(OverviewTemplate);
    }
  };
});