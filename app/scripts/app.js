/*global define */
define([
  'video',
  'timeline',
  'bubbles',
  'overview'
], function(Video,
            Timeline,
            Bubbles,
            Overview) {
  'use strict';


  var extraScrollSpace = 380;

  $('body').html('');
  Timeline.initialize(extraScrollSpace);
  Video.initialize();
  Bubbles.initialize();
  Overview.initialize();
});
