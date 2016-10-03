var childProcess = require('child_process');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');
var project = require('./../utils/project');
var util = require('./../utils/util');

module.exports = {
    run : function (){

      message.console(message.getMessage("START_BUILD_APP"));
      util.execCascadeWithCallback([cordova.checkCordovaInstalled, project.checkIntoProject], function(res){
          if(res.isValid){
            if(commands._.length < 2){
              message.console(message.getMessage("PLATFORM_NOT_INFORMED_BUILD"))
            } else {
              var platform = commands._[1];
              if(platform == "android"){

                cordova.checkAndAddPlatform(platform, function (res){
                  if(res.isValid){
                    console.log("Checado e instalado...");
                    console.log("TODO: Verificar ambiente plataforma");
                  }
                });

              } else {
                message.console(message.getMessage("PLATFORM_NOT_SUPPORTED"));
              }
            }
          }
      });

    }
}
