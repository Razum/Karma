define ['backbone'], ->
  class PersonModel extends Backbone.Model
    defaults:
      name: 'Alex'
      lastname: 'Ivanov'
      salary: 3000
      age: 25
      sex: 'male'