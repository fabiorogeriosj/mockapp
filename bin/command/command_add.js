var childProcess = require('child_process');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');
var util = require('./../utils/util');
var project = require('./../utils/project');

var command_add_controller = require('./command_add_controller');
var command_add_service = require('./command_add_service');
var command_add_page = require('./command_add_page');
var command_add_icons = require('./command_add_icons');

module.exports = {
    run : function (){

      util.execCascadeWithCallback([cordova.checkCordovaInstalled, project.checkIntoProject], function(res){
        if(res.isValid){
          if(commands._.length < 2){
            message.console(message.getMessage("TYPE_NOT_FOUND_ADD"))
          } else {
            var type = commands._[1];
            if(type == "controller"){
              command_add_controller.run();
            } else if(type == "service"){
              command_add_service.run();
            } else if(type == "page"){
              command_add_page.run();
            } else if(type == "icons"){
              //command_add_icons.run();
              message.console(message.getMessage("SORRY_NOT_ENABLED_NOW"))
            } else {
              message.console(message.getMessage("TYPE_NOT_EXIST_ADD"))
            }

          }
        }
      });

    }
}
