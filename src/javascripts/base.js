requirejs.config({
  baseUrl: 'src/javascripts',
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    enforceDefine: true,
    shim: {
      'jquery': { exports: '$' },
      'underscore': { exports: '_' },
      'backbone': {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      }
    },
    paths: {
      jquery: [
        '/src/javascripts/vender/jquery/jquery.min'
      ],
      underscore: [
        "/src/javascripts/vender/underscore/underscore-min"
      ],
      backbone: [
        "/src/javascripts/vender/backbone/backbone-min"
      ]
    }
});