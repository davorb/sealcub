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

  $('body').html('');
  Timeline.initialize();
  Bubbles.initialize();
  Video.initialize();
  Overview.initialize();
});
