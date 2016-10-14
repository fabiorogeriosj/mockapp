var should = require('chai').should();
var exec = require('child_process').exec;

describe('#show logo and version', function() {
  var captured_stdout;
  before(function (done) {
      exec('node ./bin/mockapp --lang en', function (error, stdout, stderr) {
          if (error) done(error);
          captured_stdout = stdout;
          done();
      });
  });
  it('should show logo', function() {
      captured_stdout.should.to.contain('(_______)');
  });
  it('should show version', function() {
      captured_stdout.should.to.contain('Version instaled');
  });
});

describe('#change language', function() {
  describe('#run in pt', function() {
    var captured_stdout;
    before(function (done) {
        exec('node ./bin/mockapp --lang pt', function (error, stdout, stderr) {
            if (error) done(error);
            captured_stdout = stdout;
            done();
        });
    });
    it('should show version info in pt', function() {
        captured_stdout.should.to.contain('Versão instalada');
    });
  });
  describe('#run in rn', function() {
    var captured_stdout;
    before(function (done) {
        exec('node ./bin/mockapp --lang en', function (error, stdout, stderr) {
            if (error) done(error);
            captured_stdout = stdout;
            done();
        });
    });
    it('should show version info in en', function() {
        captured_stdout.should.to.contain('Version instaled');
    });
  });
});
