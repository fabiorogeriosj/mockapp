var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var fs = require('fs');
var exec = require('child_process').exec;
var spawnSync = require('child_process').spawnSync;
var spawn = require('child_process').spawn;

require('./test_command_new');
var PACK_ICO_TEST = "http://www.flaticon.com/packs/essential-set-2";
var OPTIONS = { cwd : NAME_APP }

describe('#add pack icons in app', function() {
  var captured_stdout;
  before(function (done) {
      var addIconCommand = spawn('node', ['../bin/mockapp','add','icons',PACK_ICO_TEST,'--lang','en','--log'], OPTIONS);
      addIconCommand.stdout.on('data', function (data) {
        captured_stdout = data.toString();
      });

      addIconCommand.stderr.on('data', function (data) {
        captured_stdout = data.toString();
      });

      addIconCommand.on('exit', function (code) {
        done();
      });
  });
  it('should show message about command exec', function() {
      captured_stdout.should.to.contain('Pack icons successfully added :)');
  });

});
