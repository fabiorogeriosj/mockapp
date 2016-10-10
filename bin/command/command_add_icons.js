var fs = require('fs');
var request = require('request');
var unzip = require('unzip');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');
var util = require('./../utils/util');
var download = require('./../utils/download');

module.exports = {
    run : function (){
      var self = this;
      if(commands._.length == 3){
        var url = commands._[2];
        if(!url){
            message.console(message.getMessage("NAME_NOT_FOUND_ADD_ICONS"))
        } else {
          message.console(message.getMessage("START_ADD_ICONS_APP"))
          var name = url.split('/')[url.split('/').length-1];
          name = name.replace(/[^A-Z0-9]/ig, "");
          var fileName = "./www/icons/"+name;
          if(!util.fileExists(fileName+".css")){
            request(url, function (error, response, body) {
              if (!error && response.statusCode == 200) {
                var link = self.getLinkDownload(body);
                download.download(link, function (res){
                  if(res.isValid){
                    res.data.name = name;
                    self.addIcons(res.data, function (res){
                      if(res.isValid){
                        self.generateIconsView(name, function(res){
                          if(res.isValid){
                            message.console(message.getMessage("ADD_ICONS_SUCESS"))
                          }
                        });
                      }
                    })
                  }
                })
              } else {
                message.console(message.getMessage("ADD_ICONS_FAILED"))
              }
            })
          } else {
            message.console(message.getMessage("ICONS_EXISTS_THIS_NAME"))
          }
        }
      } else {
        message.console(message.getMessage("PARAMS_INCORRECT_ADD_ICONS"))
      }
    },
    getLinkDownload: function (html){
      var link = html.split("btn-download-pack")[0];
      link = link.split("href=\"")[link.split("href=\"").length-1];
      link = link.split("\"")[0];
      return link;
    },
    addIcons: function(pack, callback){
      var self = this;
      var result = {isValid:false, msg:""};
      var pathFrom = pack.path;
      var pathTo = pathFrom;
      var pathSplit = pathTo.split("\\");
      pathSplit[pathSplit.length-1] = pack.name;
      pack.pathTo = pathSplit.join("\\");

      var extract = fs.createReadStream(pack.path).pipe(unzip.Extract({ path: pack.pathTo }));
      var had_error = false;
      extract.on('error', function(err){
        had_error = true;
      });
      extract.on('close', function(){
        if (had_error){
          message.console(message.getMessage("ADD_ICONS_FAILED"))
          callback(result);
        } else {
          var directory = util.getDirectories(pack.pathTo)[0];
          pack.pathDirectory = pack.pathTo + "\\" + directory;
          self.renameAndMoveWoff(pack, function(res){
            if(res.isValid){
              self.replaceAndAddCss(pack, function(res){
                callback(res);
                util.deleteFiles([pack.path, pack.pathTo], function(res){});
              });
            }
          });
        }
      })
    },
    renameAndMoveWoff: function(pack, callback){
      var result = {isValid:false, msg:""};
      var font = pack.pathDirectory+"\\font\\Flaticon.woff";
      var fontNew = "./www/icons/"+pack.name+".woff";
      util.createIfNotExistDirectory("./www/icons/");
      fs.rename(font, fontNew, function(err) {
          if (err) {
            message.console(message.getMessage("ADD_ICONS_FAILED"))
            if(commands.log){
              console.log(err);
              callback(result);
            }
          } else {
            result.isValid=true;
            callback(result);
          }
      });
    },
    replaceAndAddCss: function(pack, callback){
      var result = {isValid:false, msg:""};
      var css = pack.pathDirectory+"\\font\\flaticon.css";
      var cssNew = "./www/icons/"+pack.name+".css";
      fs.readFile(css, 'utf8', function (err,template) {
        if (err) {
          message.console(message.getMessage("ADD_ICONS_FAILED"));
          if(commands.log){
              console.log(err);
          }
          callback(result);
        } else {
          var templateNew = '@font-face {font-family: "'+pack.name+'";src: url("./'+pack.name+'.woff") format("woff");font-weight: normal;font-style: normal;}\n';
          templateNew += '[class^="flaticon-"]:before' + template.split('[class^="flaticon-"]:before')[1];
          templateNew =  templateNew.split('.flaticon-').join('.'+pack.name+'-');
          templateNew =  templateNew.split('flaticon').join(pack.name);
          templateNew =  templateNew.split('Flaticon').join(pack.name);
          fs.writeFile(cssNew, templateNew, function(err) {
            if (err) {
              message.console(message.getMessage("ADD_ICONS_FAILED"))
              if(commands.log){
                  console.log(err);
              }
              callback(result);
            } else {
              util.addTagCssIndex(pack.name, function(res){
                callback(res);
              });
            }
          });
        }
      })
    },
    generateIconsView : function (name, callback){
      var result = {isValid:false, msg:""};
      var filecss = "./www/icons/"+name+".css";
      var fileicons = "./prebuild/icons.html";
      fs.readFile(filecss, 'utf8', function (err,css) {
        if (err) {
          message.console(message.getMessage("ADD_ICONS_FAILED"));
          if(commands.log){
              console.log(err);
          }
          callback(result);
        } else {
          var filesplit = css.split(".linearratingandvalidationelements-");
          fs.readFile(fileicons, 'utf8', function (err,icons) {
            if (err) {
              message.console(message.getMessage("ADD_ICONS_FAILED"));
              if(commands.log){
                  console.log(err);
              }
              callback(result);
            } else {
              var iconstag = "";
              for(i in filesplit){
                if(filesplit[i].indexOf("@font-face") < 0 && filesplit[i].indexOf(":before") >= 0){
                  //console.log("AAAAAAA>",filesplit[i])
                  var classTag = filesplit[i].split(":before")[0];
                  iconstag += "<div class='icon-view'><i class='"+name+"-"+classTag+"'></i></div>\n";
                }
              }
              icons = icons.replace("</body>", iconstag+"</body>");
              icons = icons.replace("<!--END-MOCKAPP:CSS -->", "<link rel=\"stylesheet\" href=\"../www/icons/"+name+".css\">"+"\n<!--END-MOCKAPP:CSS -->");
              fs.writeFile(fileicons, icons, function(err) {
                if (err) {
                  message.console(message.getMessage("ADD_ICONS_FAILED"))
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
          });
        }
      });
    }
}
