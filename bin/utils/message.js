var request = require('request');
//default lang
GLOBAL.lang = 'en';

var langfile = require('./../lang/'+lang);

module.exports = {

    console : function (msg){
      console.log(msg)
    },

    setLanguage: function (locale){
      var l = (locale + "").split("_")[0];
      GLOBAL.lang = GLOBAL.languages[l] ? l : GLOBAL.lang;
      langfile = require('./../lang/'+GLOBAL.lang);
    },

    getMessage: function (key){
      return langfile[key];
    },

    writeMessage: function(key, obj){
      try {
        langfile[key](obj);
      } catch(err) {
          console.log(this.getMessage("ERROR_EXEC_MOCKAPP"));
          console.log(this.getMessage("WRITE_LANG_NOT_FOUND"));
          console.log(err);
      }
    },

    tryConvertErrorCordova: function (msg){
      if(msg.indexOf("App id contains a reserved word") >= 0){
        return this.getMessage("ID_APP_INVALID");
      } else if(msg.indexOf("Path already exists") >= 0){
        return this.getMessage("APP_EXISTS");
      } else {
        return msg;
      }
    },

    checkMessageRepo: function (){
      request(packageJson.messageFromRepo, function (error, response, body) {
  		  if (!error && response.statusCode == 200) {
          console.log("JSON.parse(body): ", JSON.parse(body))
          try {
            var messageFromRepo = JSON.parse(body);
            if(messageFromRepo && messageFromRepo.msg){
              message.writeMessage("SHOW_MESSAGE_FROM_REPO", messageFromRepo.msg);
            }
          } catch (e) {

          }
  		  }
  		})
    }

}
