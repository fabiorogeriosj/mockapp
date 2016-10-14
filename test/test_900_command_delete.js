var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');
var exec = require('child_process').exec;

var NAME_APP = "appToTestNpm";

describe('#delete app', function() {
  var captured_stdout;
  before(function (done) {
      exec('node ./bin/mockapp delete '+NAME_APP+' --yes --lang en', function (error, stdout, stderr) {
          if (error) done(error);
          captured_stdout = stdout;
          done();
      });
  });
  it('should show message about command exec', function() {
      captured_stdout.should.to.contain('Successfully deleted app :)');
  });
  it('should remove files', function() {
    fs.exists(NAME_APP, function(exists) {
      expect(exists).to.be.false;
    });
  });

});
