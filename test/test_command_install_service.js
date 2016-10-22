var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');
var exec = require('child_process').exec;
var spawnSync = require('child_process').spawnSync;
var spawn = require('child_process').spawn;


require('./test_command_new');
var SERVICE_TEST = "camera";
var SERVICE_FILE_TEST = "cameraService.js";
var OPTIONS = { cwd : NAME_APP }

describe('#install service camera', function() {
  var captured_stdout;
  before(function (done) {
      var installServiceCommand = spawn('node', ['../bin/mockapp','install','service',SERVICE_TEST,'--lang','en'], OPTIONS);
      installServiceCommand.stdout.on('data', function (data) {
        captured_stdout = data.toString();
      });

      installServiceCommand.stderr.on('data', function (data) {
        captured_stdout = data.toString();
      });

      installServiceCommand.on('exit', function (code) {
        done();
      });
  });
  it('check if file service exist', function() {
      var files = fs.readdirSync(NAME_APP+"/www/js/services");
      expect(files).to.include(SERVICE_FILE_TEST);
  });

});
