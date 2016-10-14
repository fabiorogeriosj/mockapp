var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');
var exec = require('child_process').exec;

var NAME_APP = "appToTestNpm";

describe('#create a new app', function() {
  var captured_stdout;
  before(function (done) {
      exec('node ./bin/mockapp new '+NAME_APP+' --lang en', function (error, stdout, stderr) {
          if (error) done(error);
          captured_stdout = stdout;
          done();
      });
  });
  it('should show message about command exec', function() {
      captured_stdout.should.to.contain('Successfully created app :)');
  });
  it('should create files', function() {
      var files = fs.readdirSync(NAME_APP);
      expect(files).to.include('config.xml').to.include('www').to.include('prebuild');
  });

});
