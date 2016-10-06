app.config(function($routeProvider) {
	$routeProvider

   .when('/home', {
			templateUrl : 'home.html',
			controller  : 'homeController'
		})
		//Multiplo replace
    //END-MOCKAPP:ROUTERS
    $routeProvider.otherwise('/home');
});
