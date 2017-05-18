angular.module("dashboard",[])
.controller("dashboardController",function($scope,$rootScope,$location,$http)
{
	$scope.data=function(data){
		alert(data);
	}
	$scope.goToAdminPanel=function(){
		$location.path("/dashboard");
	}
	$scope.pue		=[];
	$scope.server	=[];
	$scope.storage	=[];
	$scope.power	=[];
	$scope.network	=[];
	$scope.wue		=[];
	$scope.carbon	=[];
	$scope.ghi		=[];
	$http.get("http://192.168.1.240:80/getEightValues",{method 	: 'GET',headers	:{'Content-Type': 'application/json'}})
	.then(function(response) {
		if(response.data.response_code=='200')
		{
			angular.forEach(response.data.data, function(value, key){
				$scope.pue.push(value.pue);
				$scope.server.push(value.server_type);
				$scope.storage.push(value.storage_type);
				$scope.power.push(value.power_region);
				$scope.network.push(value.network_type);
				$scope.wue.push(value.wue);
				$scope.carbon.push(value.carbon_impact);
				$scope.ghi.push(value.green_house_impact);
			})
		}
		else
		{

		}
        
    });
})
.directive('toggle', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      if (attrs.toggle=="tooltip"){
        $(element).tooltip();
      }
      if (attrs.toggle=="popover"){
        $(element).popover();
      }
    }
  };
})