var fs = require('fs');
var request = require('request');
var AdmZip = require('adm-zip');
var message = require('./../utils/message');
var cordova = require('./../utils/cordova');
var util = require('./../utils/util');
var download = require('./../utils/download');

module.exports = {
    run : function (){
      var self = this;
      if(commands._.length == 3){
        var serviceName = commands._[2];
        if(!serviceName){
            message.console(message.getMessage("NAME_NOT_FOUND_INSTALL_SERVICE"))
        } else {
          message.console(message.getMessage("START_INSTALL_SERVICE_APP"))
          self.getServiceJson(serviceName, function(res){
            if(res.isValid){
              var serviceData = res.data;
              if(serviceData.cordovaCommand){
                cordova.exec(res.data.cordovaCommand, function(res){
                  if(res.isValid){
                    self.installService(serviceData, function(res){
                      if(res.isValid){
                        message.console(message.getMessage("SERVICE_INSTALL_SUCCESS"))
                      }
                    });
                  }
                })
              }
            }
          });
        }
      } else {
        message.console(message.getMessage("PARAMS_INCORRECT_INSTALL_SERVICE"))
      }
    },
    getServiceJson: function(serviceName, callback){
      var result = {isValid:false, msg:""};
      var url = packageJson.servicesRaw + "/"+serviceName+"/service.json";
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var serviceData = JSON.parse(body);
          if(serviceData.service.indexOf(".js") >= 0){
            serviceData.serviceFile = serviceData.service;
          } else {
              serviceData.serviceFile = serviceData.service+".js";
          }
          util.createIfNotExistDirectory(PATH_SERVICES);
          if(!util.fileExists(PATH_SERVICES + serviceData.serviceFile)){
            result.isValid=true;
            result.data = serviceData;
            callback(result);
          } else {
            message.console(message.getMessage("SERVICE_THERE_IS"));
            callback(result);
          }
        } else if(response.statusCode === 404){
          message.console(message.getMessage("SERVICE_NOT_FOUND"));
          callback(result);
        } else {
          message.console(message.getMessage("ADD_SERVICE_FAILED"));
          callback(result);
          if(commands.log){
              console.log(error);
          }
        }
      });
    },
    installService: function(serviceData, callback){
      var result = {isValid:false, msg:""};
      var self = this;
      var url = packageJson.servicesRaw + "/"+serviceData.name+"/"+serviceData.serviceFile;
      util.createIfNotExistDirectory(PATH_SERVICES);
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          fs.writeFile(PATH_SERVICES + serviceData.serviceFile, body, function(err) {
            if (err) {
              message.console(message.getMessage("ADD_SERVICE_FAILED"))
              if(commands.log){
                  console.log(err);
              }
              callback(result);
            } else {
              util.addTagServiceIndex(serviceData.serviceFile, function(res){
                if(res.isValid){
                  if(serviceData.style){
                    self.installCss(serviceData, function(res){
                      if(res.isValid){
                        callback(res);
                      } else {
                        message.console(message.getMessage("ADD_SERVICE_FAILED"));
                        callback(res);
                      }
                    });
                  } else {
                    callback(res);
                  }
                } else {
                  message.console(message.getMessage("ADD_SERVICE_FAILED"));
                  callback(res);
                }
              });
            }
          });
        } else {
          message.console(message.getMessage("ADD_SERVICE_FAILED"));
          callback(result);
          if(commands.log){
              console.log(error);
          }
        }
      });
    },
    installCss: function(serviceData, callback){
      var result = {isValid:false, msg:""};
      var self = this;
      var url = packageJson.servicesRaw + "/"+serviceData.name+"/"+serviceData.style+".css";
      util.createIfNotExistDirectory(PATH_CSS);
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          fs.writeFile(PATH_CSS + serviceData.style+".css", body, function(err) {
            if (err) {
              message.console(message.getMessage("ADD_SERVICE_FAILED"))
              if(commands.log){
                  console.log(err);
              }
              callback(result);
            } else {
              util.addTagCssIndex("css/"+serviceData.style+".css", function(res){
                callback(res);
              });
            }
          });
        } else {
          message.console(message.getMessage("ADD_SERVICE_FAILED"));
          callback(result);
          if(commands.log){
              console.log(error);
          }
        }
      });
    }
}
