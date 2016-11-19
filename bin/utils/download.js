var fs = require('fs');
var request = require('request');
var https = require('https');
var message = require('./../utils/message');

module.exports = {

  get: function (url, callback){
    var result = {isValid:false, msg:""};
    var req = request(url);
    var fileName = url.split("/")[url.split("/").length-1];
    var cur = 0;
    var len = 0;
    var total = 0;
    var spinner = message.startSpinner("Downloading");
    try {
      req.on('response', function (data) {
        len = parseInt(data.headers['content-length'], 10);
        total = len / 1048576; //1048576 - bytes in  1Megabyte
      })
      req.on('data', function (chunk) {
        cur += chunk.length;
        var progs = (100.0 * cur / len).toFixed(2);
        var progsSize = (cur / 1048576).toFixed(2);
        var totalSize = total.toFixed(2);
        var msg = "Downloading";
        if(!isNaN(progsSize) && !isNaN(totalSize)){
          msg += ": ("+progsSize+"/"+totalSize+" mb)";
        }
        if(!isNaN(progs)){
          msg += " " + progs+"%";
        }
        if(isNaN(progs) && isNaN(totalSize)){
          msg += "...";
        }
        spinner.message(msg);
      })
      .on('error', function (err) {
          message.console(message.getMessage("DOWNLOAD_FAILED"));
          result.isValid=false;
          callback(result);
      })
      .pipe(fs.createWriteStream(__dirname+"/" + fileName))
      .on('close', function (err) {
        spinner.stop();
        result.isValid=true;
        result.data = { fileName : fileName, path: __dirname+"/" + fileName };
        callback(result);
      })
    } catch (e) {
      callback(result);
    }
  },

  androidSdkMacOsX : function(callback){
    var self = this;
    self.get(packageJson.androidSdkMacOsX, function (res){
      if(res.isValid){
        callback(res);
      } else {
        message.console(message.getMessage("DOWNLOAD_FAILED"));
      }
    });

  }

}
