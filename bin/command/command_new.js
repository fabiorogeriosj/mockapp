var childProcess = require('child_process');
var cordova = require('./../utils/cordova');

module.exports = {
    run : function (commands){

      cordova.checkCordovaInstalled(function (res){
        if(res.isValid){
          console.log("CREATE HERE.........")
        }
      });

    }
}
