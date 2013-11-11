/*global define */
define([
  'video',
  'timeline'
], function(Video,
            Timeline) {
  'use strict';
  $('body').html('');
  Timeline.initialize();
  Video.initialize();
});
