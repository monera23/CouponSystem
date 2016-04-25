angular.module('referralApp')
	.controller("OrderController",["$http","$scope" ,function($http,$scope){
		$scope.data={};
		$scope.data.orderId;
		$scope.data.orderAmount;
		$scope.$on('$viewContentLoaded', function() {
    		//call it here
    		$scope.data.orderId = Math.floor((Math.random()*1000000));
    		$scope.data.orderAmount = Math.floor((Math.random()*1000));
		});
		

		

		$scope.submit=function(){
			$http.post('/order',$scope.data).
		success(function(data){
			console.log(data);

		})
		.error(function(err){
			console.log(err);
			
		});

		

		};
		
	}]);