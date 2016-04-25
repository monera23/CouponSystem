var app=angular.module('referralApp');

app.config(function ($routeProvider) {

	$routeProvider

	.when('/shop', {

		templateUrl: '/views/main.html',
		controller: "MainCtrl"
	})

	.when('/order',{
		templateUrl: '/views/orders.html',
		controller: 'OrderController'
	})
	.otherwise({ redirectTo: '/shop' })
});
