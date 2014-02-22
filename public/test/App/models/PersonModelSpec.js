describe("Person Model", function() {
    beforeEach(function (done){
        var self = this;
        require(['models/PersonModel'], function (PersonModel) {
            self.PersonModel = PersonModel;
            done();
        });
    });


    it('Name should be Alex', function () {
        var person = new this.PersonModel;
        chai.expect(person.get('name')).to.equal('Alex')
    })

});

