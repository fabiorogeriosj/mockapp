var childProcess = require('child_process');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');
var project = require('./../utils/project');
var util = require('./../utils/util');
var download = require('./../utils/download');

module.exports = {
    run : function (){
      var self = this;
      message.console(message.getMessage("VERIFY_ENVIRONMENT"));
      util.execCascadeWithCallback([cordova.checkCordovaInstalled, project.checkIntoProject], function(res){
          if(res.isValid){
            if(commands._.length < 2){
              message.console(message.getMessage("PLATFORM_NOT_INFORMED_RUN"))
            } else {
              var platform = commands._[1];
              if(platform == "android"){

                cordova.checkAndAddPlatform(platform, function (res){
                  if(res.isValid){
                    cordova.checkAndInstallEnvironment(platform, function (res){
                      if(res.isValid){
                          self.build(platform);
                      }
                    });
                  }
                });

              } else {
                message.console(message.getMessage("PLATFORM_NOT_SUPPORTED"));
              }
            }
          }
      });

    },
    build: function (platform){
      message.console(message.getMessage("START_BUILD_AND_RUN_APP"));
      var spinner = message.startSpinner(message.getMessage("BUIDING_AND_RUNING_APP"));
      var exec = 'cordova run '+platform;
      cordova.exec(exec, function (res){
        if(res.isValid){
          spinner.stop();
          message.console(message.getMessage("BUILD_AND_RUN_SUCCESS"));
        }
      });
    }
}
