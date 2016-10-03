module.exports = {

  execCascadeWithCallback : function(functions, callback){
    var result = {isValid:false, msg:""};
    var length = functions.length;
    var index = 0;

    var run = function (){
      functions[index](function (res){
        if(res.isValid){
          index++;
          if(index < length){
            run();
          } else {
            result.isValid=true;
            callback(result);
          }
        } else {
          callback(result);
        }
      });
    }

    if(index < length){
      run();
    }

  }

}
