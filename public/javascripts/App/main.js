(function() {
  require.config({
    baseUrl: 'javascripts/',
    paths: {
      'jquery': 'libs/jquery-2.1.0.min',
      'underscore': 'libs/underscore-min',
      'backbone': 'libs/backbone-min',
      'models': 'App/models',
      'collections': 'App/collections',
      'views': 'App/views'
    },
    shim: {
      'backbone': {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      underscore: {
        exports: '_'
      }
    }
  });

  require(['models/PersonModel'], function(PersonModel) {
    var person;
    person = new PersonModel;
    return console.warn(person.get('age'));
  });

}).call(this);
