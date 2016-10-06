app.config(function($routeProvider) {
	$routeProvider

   .when('/home', {
			templateUrl : 'home.html',
			controller  : 'homeController'
		})

    //END-MOCKAPP:ROUTERS
    $routeProvider.otherwise('/home');
});
