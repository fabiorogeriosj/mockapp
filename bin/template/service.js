[VAR_MODULE].service('[NAME_SERVICE]', ['$http', function($http) {
  var self = this;

  self.getUsers = function (){
    return $http({
      method: 'GET',
      url: 'http://site.com/users'
    });
  }
  
  return self;
}]);
