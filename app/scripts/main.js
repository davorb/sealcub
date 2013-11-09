require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    requirejs: '../bower_components/requirejs/require',
    text: '../bower_components/requirejs-text/text',
    underscore: '../bower_components/underscore/underscore',
    'requirejs-text': '../bower_components/requirejs-text/text'
  }
});

require(['app', 'jquery'], function(app, $) {
  'use strict';
  // use app here
  console.log(app);
  console.log('Running jQuery %s', $().jquery);
});
