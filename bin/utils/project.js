var fs = require('fs');
var message = require('./../utils/message');

module.exports = {

  checkIntoProject : function (callback){
    var result = {isValid:false, msg:""};
    try {
      result.isValid=fs.lstatSync("./config.xml").isFile() && fs.lstatSync("./www").isDirectory();
      if(!result.isValid){
        message.console(message.getMessage("YOU_NOT_INTO_PROJECT"));
      }
      callback(result);
    } catch (e) {
      message.console(message.getMessage("YOU_NOT_INTO_PROJECT"));
      callback(result);
    }
  }

}
