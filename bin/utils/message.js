var colors = require('colors');

module.exports = {

    CORDOVA_NOT_INSTALLED : "\nCordova not installed, please run command: ".red + "npm install cordova -g".white,

    error : function (msg){
      console.log(msg)
    }

}
