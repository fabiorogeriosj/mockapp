app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	 .state('home', {
		  url: '/home',
			templateUrl : 'home.html',
			controller  : 'homeController'
		})

    .state('contatos', {
 		  url: '/contatos',
 			templateUrl : 'contatos.html',
 			controller  : 'contatosController'
 		})

    //END-MOCKAPP:ROUTERS
    $urlRouterProvider.otherwise('/home');
});
