var fs = require('fs');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');
var util = require('./../utils/util');
var project = require('./../utils/project');

module.exports = {
    run : function (){
      if(commands._.length == 3){
        var name = commands._[2];
        name = name.replace(/[^A-Z0-9]/ig, "");
        if(!name){
            message.console(message.getMessage("NAME_NOT_FOUND_ADD_SERVICE"))
        } else {

          var fileName = "./www/js/services/"+name+".js";
          if(!util.fileExists(fileName)){
            var varModule = "app";
            if(commands.module){
              varModule = commands.module;
            }
            fs.readFile(__dirname+'/../template/service.js', 'utf8', function (err,template) {
              if (err) {
                message.console(message.getMessage("ADD_SERVICE_FAILED"))
                if(commands.log){
                    console.log(err);
                }
              } else {
                  template = template.replace("[VAR_MODULE]", varModule);
                  template = template.replace("[NAME_SERVICE]", name);

                  util.createIfNotExistDirectory("./www/js/services/");
                  fs.writeFile(fileName, template, function(err) {
                    if (err) {
                      message.console(message.getMessage("ADD_SERVICE_FAILED"))
                      if(commands.log){
                          console.log(err);
                      }
                    } else {
                      message.writeMessage("ADD_SERVICE_SUCCESS", { name: name, fileName: fileName});
                      util.addTagServiceIndex(name + ".js", function (res){});
                    }
                  });
              }
            });
          } else {
            message.console(message.getMessage("SERVICE_EXISTS_THIS_NAME"))
          }
        }
      } else {
        message.console(message.getMessage("PARAMS_INCORRECT_ADD_SERVICE"))
      }
    }
}
