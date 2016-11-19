var fs = require('fs');
var os = require('os');
var message = require('./../utils/message');
var util = require('./../utils/util');
var download = require('./../utils/download');
var AdmZip = require('adm-zip');

module.exports = {

  installJava : function (callback){
    var self = this;
    var result = {isValid:false, msg:""};
    var arch = os.arch();
    var platform = os.platform();
    if(packageJson.javaJdk[platform] && packageJson.javaJdk[platform][arch]){
      message.console(message.getMessage("START_JAVA_INSTALL"));

      download.get(packageJson.javaJdk[platform][arch], function (res){
        if(res.isValid){
          res.data.installName = "javajdk";
          self.installProfileDir(res.data, function (res){
              util.deleteFiles([res.data.path], function(res){
                message.console(message.getMessage("INSTALL_JAVA_SUCCESS"));
              });
          })
        }
      })
    } else {
      message.console(message.getMessage("JAVA_INSTALL_NOT_SUPPORTED"));
    }
  },

  installAndroid : function (callback){
    var self = this;
    var result = {isValid:false, msg:""};
    var arch = os.arch();
    var platform = os.platform();
    if(packageJson.androidSdk[platform] && packageJson.androidSdk[platform][arch]){
      message.console(message.getMessage("START_ANDROID_INSTALL"));

      download.get(packageJson.androidSdk[platform][arch], function (res){
        if(res.isValid){
          res.data.installName = "androidsdk";
          self.installProfileDir(res.data, function (res){
              util.deleteFiles([res.data.path], function(res){
                message.console(message.getMessage("INSTALL_ANDROID_SUCCESS"));
              });
          })
        }
      })
    } else {
      message.console(message.getMessage("ANDROID_INSTALL_NOT_SUPPORTED"));
    }
  },
  installProfileDir: function(down, callback){
    var result = {isValid:false, msg:""};
    var homedir = os.homedir();
    var mockappdir = homedir + "/.mockapp";
    var installdir = mockappdir + "/" + down.installName;
    message.console(message.getMessage("INSTALLING"));
    util.createIfNotExistDirectory(mockappdir);
    var zip = new AdmZip(down.path);
    try {
      zip.extractAllTo(mockappdir+"/master", true);
      util.deleteRecursive(installdir, function(){
        var intoDir = util.getDirectories(mockappdir + "/master");
        console.log();
        fs.rename(mockappdir+"/master/"+intoDir[0], installdir, function(err, data){
          if(err){
            callback(result);
          } else {
            util.deleteRecursive(mockappdir+"/master", function(){
              result.isValid=true;
              callback(result);
            });
          }
        });
      });
    } catch (e) {
      message.console(message.getMessage("INSTALL_JAVA_FAILED"));
    }
  }

}
