var fs = require('fs');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');
var util = require('./../utils/util');
var project = require('./../utils/project');
var command_add_controller = require('./command_add_controller');

module.exports = {
    run : function (){
      var self = this;
      if(commands._.length == 3){
        var name = commands._[2];
        name = name.replace(/[^A-Z0-9]/ig, "");
        if(!name){
            message.console(message.getMessage("NAME_NOT_FOUND_ADD_SERVICE"))
        } else {
          self.addPage(name, function (res){
            command_add_controller.addController(name+"Controller", function(res){
              self.addRoute(name, function (res){});
            });
          })
        }
      } else {
        message.console(message.getMessage("PARAMS_INCORRECT_ADD_PAGE"))
      }
    },
    addRoute: function(name, callback){
      var result = {isValid:false, msg:""};
      fs.readFile(__dirname+'/../template/route.js', 'utf8', function (err,template) {
        if (err) {
          message.console(message.getMessage("ADD_PAGE_FAILED"));
          if(commands.log){
              console.log(err);
          }
          callback(result);
        } else {
          template = template.replace("[NAME_PAGE]", name);
          var confiFilePath = './www/js/config.js';
          fs.readFile(confiFilePath, 'utf8', function (err,configFile) {
            if (err) {
              message.console(message.getMessage("ADD_PAGE_FAILED"))
              if(commands.log){
                  console.log(err);
              }
              callback(result);
            } else {
              configFile = configFile.replace("//END-MOCKAPP:ROUTERS", template+"\n    //END-MOCKAPP:ROUTERS");
              fs.writeFile(confiFilePath, configFile, function(err) {
                if (err) {
                  message.console(message.getMessage("ADD_PAGE_FAILED"))
                  if(commands.log){
                      console.log(err);
                  }
                  callback(result);
                } else {
                  message.console(message.getMessage("ADD_PAGE_SUCCESS"));
                  result.isValid=true;
                  callback(result);
                }
              });
            }
          });
        }
      });
    },
    addPage: function (name, callback){
      var result = {isValid:false, msg:""};
      var pageHtml = "./www/"+name+".html";
      if(!util.fileExists(pageHtml)){
        fs.readFile(__dirname+'/../template/page.html', 'utf8', function (err,template) {
          if (err) {
            message.console(message.getMessage("ADD_PAGE_FAILED"))
            if(commands.log){
                console.log(err);
            }
            callback(result);
          } else {
            fs.writeFile(pageHtml, template, function(err) {
              if (err) {
                message.console(message.getMessage("ADD_PAGE_FAILED"))
                if(commands.log){
                    console.log(err);
                }
                callback(result);
              } else {
                message.console(message.getMessage("ADD_PAGE_SUCCESS"));
                result.isValid=true;
                callback(result);
              }
            });
          }
        });
      } else {
        message.console(message.getMessage("PAGE_EXISTS_THIS_NAME"));
        callback(result);
      }
    }
}
