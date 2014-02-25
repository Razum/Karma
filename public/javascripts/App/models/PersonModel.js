(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function() {
    var PersonModel;
    return PersonModel = (function(_super) {
      __extends(PersonModel, _super);

      function PersonModel() {
        return PersonModel.__super__.constructor.apply(this, arguments);
      }

      PersonModel.prototype.defaults = {
        name: 'Alex',
        lastname: 'Ivanov',
        salary: 3000,
        age: 25,
        sex: 'male'
      };

      return PersonModel;

    })(Backbone.Model);
  });

}).call(this);
