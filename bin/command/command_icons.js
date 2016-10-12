var opener = require("opener");
var project = require('./../utils/project');

module.exports = {
    run : function (){
      project.checkIntoProject(function (res){
        if(res.isValid){
          opener("./prebuild/icons.html");
        }
      });
    }
}
