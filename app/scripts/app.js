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

  //$('body').html('');
  Timeline.initialize(10, 180);
  Video.initialize(100);
  Bubbles.initialize();
  Overview.initialize();
});
