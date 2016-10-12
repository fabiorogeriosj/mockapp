app.controller('rootController', ['$rootScope', '$state', function($rootScope, $state) {

  $rootScope.goToPage = function(page){
    $state.go(page);
  }

}]);
