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

          var pageHtml = "./www/"+name+".html";
          if(!util.fileExists(pageHtml)){
            fs.readFile(__dirname+'/../template/route.js', 'utf8', function (err,templateConfig) {
              if (err) {
                message.console(message.getMessage("ADD_PAGE_FAILED"))
                if(commands.log){
                    console.log(err);
                }
              } else {

                  //altes add o .html e depois chamar em outro metodo para add no config!
                  templateConfig = templateConfig.replace("[NAME_PAGE]", name);
                  var configFilePath = './www/js/config.js';
                  fs.readFile(configFilePath, 'utf8', function (err,configFile) {
                    if (err) {
                      message.console(message.getMessage("ADD_PAGE_FAILED"))
                      if(commands.log){
                          console.log(err);
                      }
                    } else {
                      configFile = configFile.replace("//END-MOCKAPP:ROUTERS", templateConfig + "\n    //END-MOCKAPP:ROUTERS");
                      fs.writeFile(configFilePath, configFile, function(err) {
                        if (err) {
                          message.console(message.getMessage("ADD_PAGE_FAILED"))
                          if(commands.log){
                              console.log(err);
                          }
                        } else {
                          message.console(message.getMessage("ADD_PAGE_SUCCESS"));

                          util.addTagServiceIndex(name + ".js", function (res){});
                        }
                      });
                    }
                  });
              }
            });
          } else {
            message.console(message.getMessage("PAGE_EXISTS_THIS_NAME"))
          }
        }
      } else {
        message.console(message.getMessage("PARAMS_INCORRECT_ADD_PAGE"))
      }
    }
}
