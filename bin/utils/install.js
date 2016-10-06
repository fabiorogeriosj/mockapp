var fs = require('fs');
var message = require('./../utils/message');

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
    }, 3000);

  },

  installAndroid : function (callback){
    var result = {isValid:false, msg:""};
    message.console(message.getMessage("START_ANDROID_INSTALL"))

    var spinner = message.startSpinner(message.getMessage("INSTALLING_ANDROID"));
    setTimeout(function (){
      spinner.stop();
      message.console(message.getMessage("INSTALL_ANDROID_SUCCESS"));
      result.isValid=true;
      callback(result);
    }, 3000);

  }

}
