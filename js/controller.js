angular.module("dashboard",[])
.controller("dashboardController",function($scope,$rootScope,$location,$http)
{
	//console.log($location.path());
	$scope.data={PUE:'',LOCATION:'',GHG:'',CO2:'',WUE:'',AVAILABILITY:'',COMPUTE:'',STORAGE:''};
	$scope.goToAdminPanel=function(){
		$scope.trueScoreRightSection 	= true;
		$scope.trueScoreLeftSection 	= false;
		$http.get("http://192.168.1.63:80/getEightValues",{method 	: 'GET',headers	:{'Content-Type': 'application/json'}})
		.then(function(response) {
			//console.log(response.data.pue);
			if(response.data.response_code=='200')
			{
				console.log(response.data.pue);
				$scope.PUE 			=response.data.pue;
				$scope.LOCATION 	=response.data.location;
				$scope.GHG 			=response.data.ghg;
				$scope.CO2 			=response.data.co2;
				$scope.WUE 			=response.data.wue;
				$scope.AVAILABILITY =response.data.availavility;
				$scope.COMPUTE 		=response.data.compute;
				$scope.STORAGE 		=response.data.storage;
				
				/*angular.forEach(response.data.data, function(value, key){
					$scope.PUE.push(value.PUE);
					$scope.LOCATION.push(value.LOCATION);
					$scope.GHG.push(value.GHG);
					$scope.CO2.push(value.CO2);
					$scope.WUE.push(value.WUE);
					$scope.AVAILABILITY.push(value.AVAILABILITY);
					$scope.COMPUTE.push(value.COMPUTE);
					$scope.STORAGE.push(value.STORAGE);
				})*/

			}
			else
			{

			}
	        
	    });
	}
	// change view on click
	$scope.goToDashboard=function(){
		$scope.trueScoreRightSection 	= false;
		$scope.trueScoreLeftSection 	= true;
	}
	$scope.trueScoreRightSection 	= false;
	$scope.trueScoreLeftSection 	= true;
	// defult value define here
	if(!$rootScope.truescore  || $rootScope.truescore=='')
	{
		$rootScope.truescore	=50;
		$scope.truevaluStyle2 	= {'border': '10px solid orange'};
		$rootScope.pue 			= 1.10;
		$rootScope.location		= 'US CENTRAL';
		$rootScope.ghg 			= 1.00;
		$rootScope.co2 			= 1.00;
		$rootScope.wue 			= 0.00;
		$rootScope.availavility = 'NETWORK1';
		$rootScope.compute		= 'COMPUTE1';
		$rootScope.storage		= 'SSD1';
	}
	if($rootScope.truescore>39)
	{
		$scope.truevaluStyle2 	= {'border': '10px solid red'};
		//$scope.truevaluStyle3	= {'left': '6%','margin-top': '0%'};
	}
	if($rootScope.truescore<40)
	{
		$scope.truevaluStyle2 	= {'border': '10px solid red'};
		//$scope.truevaluStyle3	= {'left': '6%','margin-top': '0%'};
	}
	if($rootScope.truescore>89)
	{
		$scope.truevaluStyle2 	= {'border': '10px solid green'};
		
	}
	// condition check for score section
	
	$scope.value     		= (360/100)*$rootScope.truescore+28;
	$scope.truevaluStyle3	= {'transform': 'rotate('+$scope.value+'deg)'};
				
	$scope.PUE				=[];
	$scope.LOCATION			=[];
	$scope.GHG				=[];
	$scope.CO2				=[];
	$scope.WUE				=[];
	$scope.AVAILABILITY		=[];
	$scope.COMPUTE			=[];
	$scope.STORAGE			=[];
	$scope.truevalue		=0.00;
	if($location.path()=='/dashboard')
	{
		$scope.truevaluStyle 	= {'border': '10px solid #fff'};
		$http.get("http://192.168.1.63:80/getEightValues",{method 	: 'GET',headers	:{'Content-Type': 'application/json'}})
		.then(function(response) {
			//console.log(response.data.pue);
			if(response.data.response_code=='200')
			{
				console.log(response.data.pue);
				$scope.PUE 			=response.data.pue;
				$scope.LOCATION 	=response.data.location;
				$scope.GHG 			=response.data.ghg;
				$scope.CO2 			=response.data.co2;
				$scope.WUE 			=response.data.wue;
				$scope.AVAILABILITY =response.data.availavility;
				$scope.COMPUTE 		=response.data.compute;
				$scope.STORAGE 		=response.data.storage;
				
				/*angular.forEach(response.data.data, function(value, key){
					$scope.PUE.push(value.PUE);
					$scope.LOCATION.push(value.LOCATION);
					$scope.GHG.push(value.GHG);
					$scope.CO2.push(value.CO2);
					$scope.WUE.push(value.WUE);
					$scope.AVAILABILITY.push(value.AVAILABILITY);
					$scope.COMPUTE.push(value.COMPUTE);
					$scope.STORAGE.push(value.STORAGE);
				})*/

			}
			else
			{

			}
	        
	    });

	}
	
    /********************** calculate true score **********************/
    $scope.calculateTrueScore=function(){
    	$rootScope.pue 			= $scope.data.PUE;
		$rootScope.location		= $scope.data.LOCATION;
		$rootScope.ghg 			= $scope.data.GHG;
		$rootScope.co2 			= $scope.data.CO2;
		$rootScope.wue 			= $scope.data.WUE;
		$rootScope.availavility = $scope.data.AVAILABILITY;
		$rootScope.compute		= $scope.data.COMPUTE;
		$rootScope.storage		= $scope.data.STORAGE;
    	$http.get("http://192.168.1.63:80/test",{method :'GET',params:$scope.data,headers:{'Content-Type': 'application/json'}})
		.then(function(response) {
			if(response.data.response_code=='200')
			{
				$rootScope.truescore=response.data.data[0].TRUE_SCORE;
				$scope.truevalue=response.data.data[0].TRUE_SCORE;
				// condition check for score section
				$scope.value     		= (360/100)*$rootScope.truescore+28;
				$scope.truevaluStyle3	= {'transform': 'rotate('+$scope.value+'deg)'};
			}
			else
			{

			}
	        
	    });

    }
    
})
