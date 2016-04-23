angular.module('referralApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/shop', {

		templateUrl: '/views/shop.html',
		// controller: "ShopController"
	})
	.otherwise({ redirectTo: '/shop' })
});

angular.module('referralApp')
.run(function($rootScope, $location) {
    $rootScope.location = $location;
});