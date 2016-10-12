var fs = require('fs');
var childProcess = require('child_process');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');
var download = require('./../utils/download');
var unzip = require('unzip');
var util = require('./../utils/util');

module.exports = {
    run : function (){

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
                message.console(message.getMessage("START_IMPORT_BASEAPP"));
                var link = packageJson.baseapp;
                download.download(link, function (res){
                  if(res.isValid){
                    var extract = fs.createReadStream(res.data.path).pipe(unzip.Extract({ path: "./"+name+"/" }));
                    var had_error = false;
                    extract.on('error', function(err){
                      had_error = true;
                    });
                    extract.on('close', function(){
                      if (had_error){
                        message.console(message.getMessage("IMPORT_BASEAPP_FAILED"));
                      } else {
                        fs.rename('./'+name+'/mockapp-baseapp-master/prebuild', './'+name+'/prebuild', function(err, data){
                          if(err){
                            message.console(message.getMessage("IMPORT_BASEAPP_FAILED"));
                            if(commands.log){
                              console.log(err);
                            }
                          } else {
                            util.deleteFiles(['./'+name+'/www'], function(res){
                              if(res.isValid){
                                fs.rename('./'+name+'/mockapp-baseapp-master/www', './'+name+'/www', function(err, data){
                                  if(!err){
                                    util.deleteFiles(['./'+name+'/mockapp-baseapp-master'], function(res){});
                                    message.console(message.getMessage("APP_CREATED_SUCCESS"));
                                    message.checkMessageRepo();
                                  } else {
                                    if(commands.log){
                                      console.log(err);
                                    }
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    })
                  }
                });
              }
            });
          }
        }
      });

    }
}
