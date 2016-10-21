var fs = require('fs');
var request = require('request');
var ProgressBar = require('progress');
var https = require('https');
var message = require('./../utils/message');

module.exports = {

  get: function (url, callback){
    var result = {isValid:false, msg:""};
    var bar = null;
    var req = request(url);
    var fileName = url.split("/")[url.split("/").length-1];
    try {
      req.on('data', function (chunk) {
        var size = parseInt(req.response.headers['content-length']);
        if(size <= 0){
          size = 1;
        }
        bar = bar || new ProgressBar(message.getMessage("DOWNLOADING") + ' [:bar] :percent :etas', {
          complete: '=',
          incomplete: ' ',
          width: 20,
          total: size
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
