var fs = require("fs");
var parseString = require('xml2js').parseString;
var inquirer = require('inquirer');
var message = require('./../utils/message');
var project = require('./../utils/project');
var configfile = './config.xml';
module.exports = {
    run : function (){
        if(project.checkIntoProject()){
          var xml = fs.readFileSync(configfile, 'utf8');
          var config = parseString(xml, function (err, result){
            var config = {
              id : result.widget.$.id,
              version : result.widget.$.version,
              name : result.widget.name[0]
            };

            message.writeMessage("SHOW_CONFIG_APP", config);
            if(commands.update){
              var questions = [
                {
                  name: 'id',
                  message: message.getMessage("UPDATE_CONFIG_NEW_ID")
                },
                {
                  name: 'name',
                  message: message.getMessage("UPDATE_CONFIG_NEW_NAME")
                },
                {
                  name: 'version',
                  message: message.getMessage("UPDATE_CONFIG_NEW_VERSION")
                }
              ];

              message.console(message.getMessage("UPDATE_CONFIG"));

              inquirer.prompt(questions).then(function (answers) {
                if(answers.id || answers.name || answers.version){
                  if(answers.id){
                    xml = xml.replace('id="'+config.id, 'id="'+answers.id);
                  }
                  if(answers.version){
                    xml = xml.replace('version="'+config.version, 'version="'+answers.version);
                  }
                  if(answers.name){
                    xml = xml.replace('<name>'+config.name, '<name>'+answers.name);
                  }
                  fs.writeFile(configfile, xml, function(err) {
                      if(err) {
                          message.console(message.getMessage("UPDATE_CONFIG_FAILED"));
                          if(commands.log){
                              console.log(err);
                          }
                      } else {
                          message.console(message.getMessage("UPDATE_CONFIG_SUCCESS"));
                      }
                  });
                }

              });
            }
          });

        } else {
          message.console(message.getMessage("YOU_NOT_INTO_PROJECT"));
        }
    }
}
