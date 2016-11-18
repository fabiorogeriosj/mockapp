var fs = require('fs');
var os = require('os');
var message = require('./../utils/message');
var download = require('./../utils/download');

module.exports = {

  installJava : function (callback){
    var result = {isValid:false, msg:""};
    message.console(message.getMessage("START_JAVA_INSTALL"))

    var spinner = message.startSpinner(message.getMessage("INSTALLING_JAVA"));
    setTimeout(function (){
      spinner.stop();
      message.console(message.getMessage("INSTALL_JAVA_SUCCESS"));
      result.isValid=true;
      callback(result);
    }, 3);

  },

  installAndroid : function (callback){
    var result = {isValid:false, msg:""};
    var arch = os.arch();
    var platform = os.platform();
    if(packageJson.androidSdk[platform] && packageJson.androidSdk[platform][arch]){
      message.console(message.getMessage("START_ANDROID_INSTALL"));

      download.get(packageJson.androidSdk[platform][arch], function (res){
        // if(res.isValid){
        //   res.data.name = name;
        //   self.addIcons(res.data, function (res){
        //     if(res.isValid){
        //       self.generateIconsView(name, function(res){
        //         if(res.isValid){
        //           message.console(message.getMessage("ADD_ICONS_SUCESS"))
        //         }
        //       });
        //     }
        //   })
        // }
      })
    } else {
      message.console(message.getMessage("ANDROID_INSTALL_NOT_SUPPORTED"));
    }

    //message.console(message.getMessage("INSTALL_ANDROID_SUCCESS"));
  }

}
