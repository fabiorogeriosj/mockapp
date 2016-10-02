var message = require('./../utils/message');
var fs = require('fs');
var inquirer = require('inquirer');

module.exports = {
    run : function (){

          message.console(message.getMessage("START_DELETE_APP"));
          if(commands._.length < 2){
            message.console(message.getMessage("APP_NAME_NOT_FOUND_DELETE_APP"))
          } else {
            var path = commands._[1];
            if( fs.existsSync(path) ) {
              var questions = [{
                  type: 'input',
                  name: 'delete',
                  message: message.getMessage("CONFIRMATION_DELETE_APP")
              }];
              inquirer.prompt(questions).then(function (answers) {
                if(answers.delete  === message.getMessage("ANSWER_YES")){
                  try {
                    var deleteRecursive = function (f){
                      fs.readdirSync(f).forEach(function(file,index){
                        var curPath = f + "/" + file;
                        if(fs.lstatSync(curPath).isDirectory()) { // recurse
                          deleteRecursive(curPath);
                        } else { // delete file
                          fs.unlinkSync(curPath);
                        }
                      });
                      fs.rmdirSync(f);
                    }
                    deleteRecursive(path);
                    message.console(message.getMessage("APP_DELETED_SUCCESS"));
                    message.checkMessageRepo();
                  } catch (e) {
                    message.console(message.getMessage("NOT_DELETED_APP"))
                    if(commands.log){
                        message.console(e)
                    }
                  }
                }
              });
          } else {
            message.console(message.getMessage("APP_NOT_EXIST_IN_DIRECTORY"))
          }
      }
    }
}
