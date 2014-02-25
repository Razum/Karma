describe 'Person Model', ->
  beforeEach (done)->
    require ['models/PersonModel'], (PersonModel)=>
      @PersonModel = PersonModel
      @person = new @PersonModel
      done()

  it 'Name should be Alex', ->
    chai.expect(@person.get 'name').to.equal 'Alex'

  it 'Age should be a number', ->
    chai.expect(@person.get 'age').to.be.a 'number'

  it 'Salary should be grater than 2000', ->
    chai.expect(@person.get 'salary').to.be.above 2500

  it "Sex should be string and equal male", ->
    chai.expect(@person.get 'sex').to.be.a('string').and.to.equal('male')