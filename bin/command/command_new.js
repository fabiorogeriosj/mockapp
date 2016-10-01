var childProcess = require('child_process');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');

module.exports = {
    run : function (commands){

      message.console(message.getMessage("START_NEW_APP"))

      cordova.checkCordovaInstalled(function (res){
        if(res.isValid){
          if(commands._.length < 2){
            message.console(message.getMessage("APP_NAME_NOT_FOUND_NEW_APP"))
          } else if(commands._.length > 2){
            message.console(message.getMessage("PARAMS_INCORRECT_NEW_APP"))
          } else {
            var name = commands._[1];
            var path = name.replace(/[^A-Z0-9]/ig, "");
            var id = new Date().getTime();
            id = "com.example.mockapp"+id;
            if(commands.path){
              path = commands.path
            }
            if(commands.name){
              name = commands.name
            }
            if(commands.id){
              id = commands.id
            }
            var exec = 'cordova create '+path+' '+id+' "'+name+'"';
            cordova.exec(exec, function (res){
              if(res.isValid){
                message.console(message.getMessage("APP_CREATED_SUCCESS"));
                message.checkMessageRepo();
              }
            }, commands.log);
          }
        }
      });

    }
}
