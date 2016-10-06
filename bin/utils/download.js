var fs = require('fs');
var request = require('request');
var ProgressBar = require('progress');
var https = require('https');
var message = require('./../utils/message');

module.exports = {

  download: function (url, callback){
    var result = {isValid:false, msg:""};
    var bar = null;
    var req = request(url);
    var fileName = url.split("/")[url.split("/").length-1];

    req.on('data', function (chunk) {
      bar = bar || new ProgressBar(message.getMessage("DOWNLOADING") + ' [:bar] :percent :etas', {
        complete: '=',
        incomplete: ' ',
        width: 20,
        total: parseInt(req.response.headers['content-length'])
      });

      bar.tick(chunk.length);
    })
    .on('error', function (err) {
        message.console(message.getMessage("DOWNLOAD_FAILED"));
        result.isValid=false;
        callback(result);
    })
    .pipe(fs.createWriteStream(__dirname+"/" + fileName))
    .on('close', function (err) {
      bar.tick(bar.total - bar.curr);
      result.isValid=true;
      result.fileName = fileName;
      callback(result);
    })
  },

  androidSdkMacOsX : function(callback){
    var self = this;
    self.download(packageJson.androidSdkMacOsX, function (res){
      if(res.isValid){
        callback(res);
      } else {
        message.console(message.getMessage("DOWNLOAD_FAILED"));
      }
    });

  }

}