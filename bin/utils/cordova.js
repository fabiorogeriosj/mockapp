var childProcess = require('child_process');
var message = require('./message');

module.exports = {

    checkCordovaInstalled : function (callback){
      var cordovaProcess = childProcess.exec('cordova --version');
      var result = {isValid:false, msg:""};
      cordovaProcess.stdout.on('data', function(data) {
        if(data.trim().toString()){
            result.msg = data.trim().toString();
        }
      });

      cordovaProcess.stderr.on('data', function(data) {
        result.msg = data;
      });

      cordovaProcess.on('close', function(error) {
        if(!error){
          result.isValid=true;
          callback(result);
        } else {
          message.console(message.getMessage("CORDOVA_NOT_INSTALLED"));
          callback(result);
        }
      });
    },

    exec : function (command, callback, log){
      var cordovaProcess = childProcess.exec(command);
      var result = {isValid:false, msg:""};
      cordovaProcess.stdout.on('data', function(data) {
        if(data.trim().toString()){
            result.msg = data.trim().toString();
        }
      });

      cordovaProcess.stderr.on('data', function(data) {
        if(data.trim().toString()){
            result.msg = data.trim().toString();
        }
      });

      cordovaProcess.on('close', function(error) {
        if(!error){
          result.isValid=true;
          callback(result);
        } else {
          message.console(message.tryConvertErrorCordova(result.msg));
          if(log){
            message.console(command);
          }
          callback(result);
        }
      });
    }

}
