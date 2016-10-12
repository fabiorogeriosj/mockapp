var fs = require('fs');
var childProcess = require('child_process');
var message = require('./message');
var install = require('./install');
var parseString = require('xml2js').parseString;
var configfile = './config.xml';

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

    checkPlatformAdded : function (platform, callback){
      var res = {isValid:false, msg:""};
      var xml = fs.readFileSync(configfile, 'utf8');
      var config = parseString(xml, function (err, result){
        var plats = result.widget.engine;
        for(i in plats){
          if(plats[i].$.name === platform){
            res.isValid=true;
          }
        }
        callback(res);
      });
    },

    checkAndAddPlatform : function (platform, callback){
      var result = {isValid:false, msg:""};
      var self = this;
      self.checkPlatformAdded(platform, function (res){
        if(!res.isValid){
          message.console(message.getMessage("START_ADD_PLATFORM"));
          self.exec("cordova platform add "+platform+" --save", function (res){
            if(res.isValid){
              message.console(message.getMessage("PLATFORM_ADDED"));
              result.isValid = true;
              callback(result);
            } else {
              message.console(message.tryConvertErrorCordova(result.msg));
              if(commands.log){
                console.log(res);
              }
              callback(result);
            }
          });
        } else {
          callback(res);
        }
      });
    },

    checkAndInstallEnvironment: function (platform, callback){
      var result = {isValid:false, msg:""};
      var self = this;
      var cordovaProcess = childProcess.exec("cordova requirements");
      var restProcess = "";
      cordovaProcess.stdout.on('data', function(data) {
        if(data.trim().toString()){
            restProcess = data.trim().toString();
        }
      });

      cordovaProcess.on('close', function(error) {
        if(!error){
          result.isValid=true;
          callback(result);
        } else {
          //console.log(restProcess)
          var needJava = restProcess.indexOf("Java JDK: not installed") >= 0;
          var needAndroid = platform == "android" && restProcess.indexOf("Android SDK: not installed") >= 0;
          if(needJava || needAndroid){
            message.writeMessage("NEED_INSTALL_ENVIRONMENT");
          }
          if(needJava){
            install.installJava(function (res){
              if(res.isValid){

                if(needAndroid){
                  install.installAndroid(function (res){
                      if(res.isValid){
                        callback(res);
                      }
                  });
                }
              }
            });
          }
        }
      });
    },

    exec : function (command, callback){
      var cordovaProcess = childProcess.exec(command);
      var result = {isValid:false, msg:""};
      cordovaProcess.stdout.on('data', function(data) {
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
          if(commands.log){
            message.console(command);
          }
          callback(result);
        }
      });
    }

}
