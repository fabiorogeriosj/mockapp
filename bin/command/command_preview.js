var fs = require('fs');
var message = require('./../utils/message');
var util = require('./../utils/util');
var cordova = require('./../utils/cordova');
var project = require('./../utils/project');
var opener = require("opener");
var liveServer = require('live-server');
var port = 8200;
var folderStatic = './www';
module.exports = {
    run : function (){

        message.console(message.getMessage("START_PREVIEW_APP"));
        var params = {
            port: port, // Set the server port. Defaults to 8080.
            host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
            root: "./www", // Set root directory that's being served. Defaults to cwd.
            open: true, // When false, it won't load your browser by default.
            file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
            wait: 0, // Waits for all changes, before reloading. Defaults to 0 sec.
            //mount: [['/components', './node_modules']], // Mount a directory to a route.
            logLevel: 0, // 0 = errors only, 1 = some, 2 = lots
            middleware: [function(req, res, next) {
                if(req.url === "/cordova.js"){
                  res.end();
                }
                // else if(req.url === "/" || req.url === "/index.html"){
                //   var index = fs.readFileSync(folderStatic+"/index.html", "utf8");
                //   var bodyReplece = '<script id="internal/component_not_installed.html" type="text/ng-template">';
                //   bodyReplece += '<div class="component-not-installed"><b>{{type}}:</b> '+message.getMessage("COMPONENT_NOT_INSTALLED")+'</div>';
                //   bodyReplece += '</script>';
                //   bodyReplece += "</body>";
                //   index = index.replace("</body>", bodyReplece);
                //   res.end(index);
                // }
                else {
                    next();
                }
            }]
        };
        util.execCascadeWithCallback([cordova.checkCordovaInstalled, project.checkIntoProject], function(res){
          if(commands.port){
            port = commands.port;
          }
          if(commands.nobrowser){
            params.open=false;
          }
          liveServer.start(params);

          message.console(message.getMessage("PREVIEW_RUNING_ON") + port);
          message.console(message.getMessage("PREVIEW_STOP"));
        });
    }
}
