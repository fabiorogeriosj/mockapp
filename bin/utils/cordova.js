var fs = require('fs');
var os = require('os');
var childProcess = require('child_process');
var message = require('./message');
var util = require('./util');
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
    getConfig: function(){
      var javaInstall = os.homedir() + "/.mockapp/javajdk";
      var androidInstall = os.homedir() + "/.mockapp/androidsdk";
      var existJavaInstall = util.fileExists(javaInstall);
      var existAndroidInstall = util.fileExists(androidInstall);
      var existJavaEnv = process.env.JAVA_HOME;
      var existAndroidEnv = process.env.ANDROID_HOME;
      var config = {};
      config.env = {};
      if(existJavaEnv){
        config.env.JAVA_HOME = process.env.JAVA_HOME;
      }
      if(existAndroidEnv){
        config.env.ANDROID_HOME = process.env.ANDROID_HOME;
      }
      if(!existJavaEnv && existJavaInstall){
        config.env.JAVA_HOME = javaInstall;
      }
      if(!existAndroidEnv && existAndroidInstall){
        config.env.ANDROID_HOME = androidInstall;
      }
      return config;
    },

    checkAndInstallEnvironment: function (platform, callback){
      var result = {isValid:false, msg:""};
      var self = this;
      var config = self.getConfig();
      var cordovaProcess = childProcess.exec("cordova requirements", config);
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
          } else if(needAndroid){
            install.installAndroid(function (res){
                if(res.isValid){
                  callback(res);
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

      cordovaProcess.stderr.on('data', function(data) {
        if(data.trim().toString().indexOf("Path already exists and is not empty") >= 0){
          result.msg = message.tryConvertErrorCordova(data.trim().toString());
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
    },

    build : function (platform, callback){
      var result = {isValid:false, msg:""};
      var command = 'cordova build '+platform;
      var config = this.getConfig();
      var cordovaProcess = childProcess.exec(command, config);

      cordovaProcess.stdout.on('data', function(data) {
        if(data.trim().toString().length > 1){
            console.log(data.trim().toString());
        }
      });

      cordovaProcess.stderr.on('data', function(data) {
        console.log(data.trim().toString().red);
      });

      cordovaProcess.on('close', function(error) {
        if(!error){
          result.isValid=true;
          callback(result);
        } else {
          callback(result);
        }
      });
    }

}
