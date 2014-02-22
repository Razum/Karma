describe("Person Model", function() {
    beforeEach(function (done){
        var self = this;
        require(['models/PersonModel'], function (PersonModel) {
            self.PersonModel = PersonModel;
            self.person = new self.PersonModel;
            done();
        });
    });

    it('Name should be Alex', function () {
        chai.expect(this.person.get('name')).to.equal('Alex')
    });

    it('Age should me a number', function () {
        chai.expect(this.person.get('age')).to.be.a('number')
    });
});

