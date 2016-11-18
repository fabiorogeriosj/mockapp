var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');
var exec = require('child_process').exec;
var spawnSync = require('child_process').spawnSync;
var spawn = require('child_process').spawn;

require('./test_command_new');
var OPTIONS = { cwd : NAME_APP }
var NAME_ADD = 'testController';

describe('#add controller in app', function() {
  var captured_stdout;
  before(function (done) {
      var addIconCommand = spawn('node', ['../bin/mockapp','add','controller',NAME_ADD,'--lang','en'], OPTIONS);
      addIconCommand.stdout.on('data', function (data) {
        captured_stdout += data.toString();
      });

      addIconCommand.stderr.on('data', function (data) {
        captured_stdout += data.toString();
      });

      addIconCommand.on('exit', function (code) {
        done();
      });
  });
  it('should show message about command exec', function() {
      captured_stdout.should.to.contain('Controller successfully created :)');
  });
  it('should create files', function() {
      var files = fs.readdirSync(NAME_APP+"/www/js/controllers");
      expect(files).to.include(NAME_ADD+".js")
  });

});
