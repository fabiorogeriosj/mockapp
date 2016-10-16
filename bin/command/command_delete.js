var message = require('./../utils/message');
var util = require('./../utils/util');
var fs = require('fs');
var inquirer = require('inquirer');

module.exports = {
    run : function (){
          var self = this;
          message.console(message.getMessage("START_DELETE_APP"));
          if(commands._.length < 2){
            message.console(message.getMessage("APP_NAME_NOT_FOUND_DELETE_APP"))
          } else {
            var path = commands._[1];
            if( fs.existsSync(path) ) {
              if(commands.yes){
                self.deleteApp(path);
              } else {
                var questions = [{
                    type: 'input',
                    name: 'delete',
                    message: message.getMessage("CONFIRMATION_DELETE_APP")
                }];
                inquirer.prompt(questions).then(function (answers) {
                  if(answers.delete  === message.getMessage("ANSWER_YES")){
                    self.deleteApp(path);
                  }
                });
              }
          } else {
            message.console(message.getMessage("APP_NOT_EXIST_IN_DIRECTORY"))
          }
      }
    },

    deleteApp: function(path){
      util.deleteRecursive("./" + path, function(res){
        if(res.isValid){
          message.console(message.getMessage("APP_DELETED_SUCCESS"));
          message.checkMessageRepo();
        } else {
          message.console(message.getMessage("NOT_DELETED_APP"))
        }
      });
    }
}
