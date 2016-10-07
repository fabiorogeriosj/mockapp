var fs = require('fs');
var path = require('path');
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

  },
  addTagCssIndex: function (file, callback){
    var result = {isValid:false, msg:""};

    fs.readFile('./www/index.html', 'utf8', function (err,indexHtml) {
      if (err) {
        message.writeMessage("CHANGE_INDEX_ADD_CSS_FAILED", file);
        if(commands.log){
            console.log(err);
        }
        callback(result);
      } else {
        var tagFilter = "<!--END-MOCKAPP:CSS";
        if(indexHtml.indexOf(tagFilter) < 0){
          message.writeMessage("CHANGE_INDEX_ADD_CSS_FAILED", file);
          callback(result);
        } else {
          indexHtml = indexHtml.replace(tagFilter, "<link rel=\"stylesheet\" type=\"text/css\" href=\"icons/"+file+".css\"></link>"+"\n        "+tagFilter);
          fs.writeFile("./www/index.html", indexHtml, function(err) {
            if (err) {
              message.writeMessage("CHANGE_INDEX_ADD_CSS_FAILED", file);
              if(commands.log){
                  console.log(err);
              }
              callback(result);
            } else {
              result.isValid=true;
              callback(result);
            }
          });
        }
      }
    });

  },
  deleteFiles: function(files, callback){
    var self = this;
    var result = {isValid:false, msg:""};
    var i = files.length;
    var next = function(res){
      i--;
      if(res.isValid){
        callback(result);
        if(commands.log){
          console.log(res);
        }
      } else if (i <= 0) {
        result.isValid=true;
        callback(result);
      }
    }
    files.forEach(function(filepath){
      if(fs.lstatSync(filepath).isDirectory()){
        self.deleteRecursive(filepath, function(res){
          next(res);
        });
      } else {
        fs.unlink(filepath, function(err) {
          next({isValid:!err});
        });
      }
    });
  },
  deleteRecursive : function (filePath, callback){
    var result = {isValid:false, msg:""};
    try {

      var del = function (f){
        fs.readdirSync(f).forEach(function(file,index){
          var curPath = f + "/" + file;
          if(fs.lstatSync(curPath).isDirectory()) { // recurse
            del(curPath);
          } else { // delete file
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(f);
      }
      del(filePath);

      result.isValid=true;
      callback(result);
    } catch (e) {
      callback(result);
      if(commands.log){
        console.log(e);
      }
    } finally {

    }

  },

  getDirectories : function(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
      return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
  }

}
