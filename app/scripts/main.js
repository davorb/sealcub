require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    requirejs: '../bower_components/requirejs/require',
    underscore: '../bower_components/underscore/underscore'
  }
});

require(['app', 'jquery'], function(app, $) {
  'use strict';
  // use app here
  console.log(app);
  console.log('Running jQuery %s', $().jquery);
});
