var message = require('./../utils/message');
var fs = require('fs');
var project = require('./../utils/project');
var port = 8200;
var folderStatic = './www';

module.exports = {
    run : function (){
          if(project.checkIntoProject()){
            message.console(message.getMessage("START_PREVIEW_APP"));
            if(commands.port){
              port = commands.port;
            }
            var opener = require("opener");
            var connect  = require('connect');
            var static = require('serve-static');

            var server = connect();
            server.use(function(req, res, next) {
              if(req.url === "/cordova.js"){
                res.end();
              } else if(req.url === "/" || req.url === "/index.html"){
                var index = fs.readFileSync(folderStatic+"/index.html", "utf8");
                var bodyReplece = "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] +':35729/livereload.js?snipver=1\"></' + 'script>')</script>";
                bodyReplece += '<script id="internal/component_not_installed.html" type="text/ng-template">';
                bodyReplece += '<div class="component-not-installed"><b>{{type}}:</b> '+message.getMessage("COMPONENT_NOT_INSTALLED")+'</div>';
                bodyReplece += '</script>';
                bodyReplece += "</body>";
                index = index.replace("</body>", bodyReplece);
                res.end(index);
              } else {
                  next();
              }
            });
            server.use(static(folderStatic));
            server.listen(port);

            livereload = require('livereload');
            server = livereload.createServer();
            server.watch(folderStatic);
            message.console(message.getMessage("PREVIEW_RUNING_ON") + port);
            message.console(message.getMessage("PREVIEW_STOP"));
            if(!commands.nobrowser){
                opener("http://localhost:"+port);
            }
          } else {
            message.console(message.getMessage("YOU_NOT_INTO_PROJECT"));
          }
    }
}
