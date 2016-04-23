angular.module('referralApp',['ngRoute'])
	.controller("MainCtrl",["$http","$scope",function($http,$scope){
		
		$scope.user={};
		
		 
		$scope.submit=function(){
		$scope.user.orderId="";
		$scope.user.codeId="";
			$http.post('/temp',$scope.user).
		success(function(data){
			console.log(data);
			$scope.user.emailId="";


		})
		.error(function(err){
			console.log(err);
			
		});
	}
		

	}]);
	


