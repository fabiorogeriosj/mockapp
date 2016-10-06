var fs = require('fs');
var message = require('./../utils/message');

module.exports = {

  execCascadeWithCallback : function(functions, callback){
    var result = {isValid:false, msg:""};
    var length = functions.length;
    var index = 0;

    var run = function (){
      functions[index](function (res){
        if(res.isValid){
          index++;
          if(index < length){
            run();
          } else {
            result.isValid=true;
            callback(result);
          }
        } else {
          callback(result);
        }
      });
    }

    if(index < length){
      run();
    }

  },

  createIfNotExistDirectory: function (path) {
    var path;
    if (this.directoryExists(path)) {
      return true;
    }
    fs.mkdirSync(path);
  },

  directoryExists: function (path) {
    try {
      return fs.statSync(path).isDirectory();
    }
    catch (err) {
      return false;
    }
  },

  fileExists: function (path){
    if (fs.existsSync(path)) {
      return true;
    } else {
      return false;
    }
  },

  addTagControllerIndex: function (file, callback){
    var result = {isValid:false, msg:""};

    fs.readFile('./www/index.html', 'utf8', function (err,indexHtml) {
      if (err) {
        message.console(message.writeMessage("CHANGE_INDEX_ADD_CONTROLLER_FAILED", file));
        if(commands.log){
            console.log(err);
        }
        callback(result);
      } else {
        var tagFilter = "<!--END-MOCKAPP:CONTROLLERS";
        if(indexHtml.indexOf(tagFilter) < 0){
          message.writeMessage("CHANGE_INDEX_ADD_CONTROLLER_FAILED", file);
        } else {
          indexHtml = indexHtml.replace(tagFilter, "<script src=\"js/controllers/"+file+"\"></script>"+"\n        "+tagFilter);
          fs.writeFile("./www/index.html", indexHtml, function(err) {
            if (err) {
              message.writeMessage("CHANGE_INDEX_ADD_CONTROLLER_FAILED", file);
              if(commands.log){
                  console.log(err);
              }
            } else {
              result.isValid=true;
              callback(result);
            }
          });
        }

      }
    });
  },
  addTagServiceIndex: function (file, callback){
    var result = {isValid:false, msg:""};

    fs.readFile('./www/index.html', 'utf8', function (err,indexHtml) {
      if (err) {
        message.console(message.writeMessage("CHANGE_INDEX_ADD_SERVICE_FAILED", file));
        if(commands.log){
            console.log(err);
        }
        callback(result);
      } else {
        var tagFilter = "<!--END-MOCKAPP:SERVICES";
        if(indexHtml.indexOf(tagFilter) < 0){
          message.writeMessage("CHANGE_INDEX_ADD_SERVICE_FAILED", file);
        } else {
          indexHtml = indexHtml.replace(tagFilter, "<script src=\"js/services/"+file+"\"></script>"+"\n        "+tagFilter);
          fs.writeFile("./www/index.html", indexHtml, function(err) {
            if (err) {
              message.writeMessage("CHANGE_INDEX_ADD_SERVICE_FAILED", file);
              if(commands.log){
                  console.log(err);
              }
            } else {
              result.isValid=true;
              callback(result);
            }
          });
        }

      }
    });

  }

}
