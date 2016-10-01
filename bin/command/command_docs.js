var opener = require("opener");

module.exports = {
    run : function (commands){
        opener(packageJson.docs);
    }
}
