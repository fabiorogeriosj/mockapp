var opener = require("opener");

module.exports = {
    run : function (){
        opener(packageJson.docs);
    }
}
