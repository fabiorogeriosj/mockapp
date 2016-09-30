var childProcess = require('child_process');
var message = require('./message');

module.exports = {

    checkCordovaInstalled : function (callback){
      var cordovaProcess = childProcess.exec('cordova --version');
      var result = {isValid:false, msg:""};
      cordovaProcess.stdout.on('data', function(data, x) {
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
          message.error(message.CORDOVA_NOT_INSTALLED);
          callback(result);
        }
      });
    }

}
