angular.module("dashboard",[])
.controller("dashboardController",function($scope,$rootScope,$location,$http)
{
	//console.log($location.path());
	$scope.data={PUE:'',LOCATION:'',GHG:'',CO2:'',WUE:'',AVAILABILITY:'',COMPUTE:'',STORAGE:''};
	$scope.goToAdminPanel=function(){
		$scope.trueScoreRightSection 	= false;
		$scope.trueScoreLeftSection 	= false;
		$http.get("http://192.168.1.240:80/getEightValues",{method 	: 'GET',headers	:{'Content-Type': 'application/json'}})
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
		$scope.trueScoreRightSection 	= true;
		$scope.trueScoreLeftSection 	= true;
	}
	$scope.trueScoreRightSection 	= true;
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
	if($rootScope.truescore>0 && $rootScope.truescore<2.8)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(156deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-156deg)','top': '47px'};
	}
	if($rootScope.truescore>2.8 && $rootScope.truescore<5.6)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(166deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-166deg)','top': '47px'};
	}
	if($rootScope.truescore>5.6 && $rootScope.truescore<8.4)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(176deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-176deg)','top': '47px'};
	}
	if($rootScope.truescore>8.4 && $rootScope.truescore<11.2)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(186deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-186deg)','top': '47px'};
	}
	if($rootScope.truescore>11.2 && $rootScope.truescore<14)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(196deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-196deg)','top': '47px'};
	}
	if($rootScope.truescore>14 && $rootScope.truescore<16.8)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(206deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-206deg)','top': '47px'};
	}
	if($rootScope.truescore>16.8 && $rootScope.truescore<19.6)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(216deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-216deg)','top': '47px'};
	}
	if($rootScope.truescore>19.6 && $rootScope.truescore<22.4)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(226deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-226deg)','top': '47px'};
	}
	if($rootScope.truescore>22.4 && $rootScope.truescore<25.2)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(236deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-236deg)','top': '58px'};
	}
	if($rootScope.truescore>25.2 && $rootScope.truescore<28)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(246deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-246deg)','top': '55px'};
	}
	if($rootScope.truescore>28 && $rootScope.truescore<30.8)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(256deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-256deg)','top': '55px'};
	}
	if($rootScope.truescore>30.8 && $rootScope.truescore<33.6)
	{
		$scope.truevaluStyle3	= {'left': '4%','margin-top': '-1%','transform': 'rotate(266deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-266deg)','top': '55px'};
	}
	if($rootScope.truescore>33.6 && $rootScope.truescore<36.4)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(276deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-276deg)','top': '55px'};
	}
	if($rootScope.truescore>36.4 && $rootScope.truescore<39.2)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(286deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-286deg)','top': '55px'};
	}
	if($rootScope.truescore>39.2 && $rootScope.truescore<42)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(296deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-296deg)','top': '55px'};
	}
	if($rootScope.truescore>42 && $rootScope.truescore<44.8)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(306deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-306deg)','top': '55px'};
	}
	if($rootScope.truescore>44.8 && $rootScope.truescore<47.6)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(316deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-316deg)','top': '55px'};
	}
	if($rootScope.truescore>47.6 && $rootScope.truescore<50.4)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(326deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-326deg)','top': '47px'};
	}
	if($rootScope.truescore>50.4 && $rootScope.truescore<53.2)
	{
		$scope.truevaluStyle3	= {'left': '4%','margin-top': '-1%','transform': 'rotate(336deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-336deg)','top': '47px'};
	}
	if($rootScope.truescore>53.2 && $rootScope.truescore<56)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(346deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-346deg)','top': '47px'};
	}
	if($rootScope.truescore>56 && $rootScope.truescore<58.8)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(356deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-356deg)','top': '39px'};
	}
	if($rootScope.truescore>58.8 && $rootScope.truescore<61.6)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(6deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-6deg)','top': '39px'};
	}
	if($rootScope.truescore>61.6 && $rootScope.truescore<64.4)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(16deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-16deg)','top': '39px'};
	}
	if($rootScope.truescore>64.4 && $rootScope.truescore<67.2)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(26deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-26deg)','top': '39px'};
	}
	if($rootScope.truescore>67.2 && $rootScope.truescore<70)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(36deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-36deg)','top': '39px'};
	}
	if($rootScope.truescore>70 && $rootScope.truescore<72.8)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(46deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-46deg)','top': '39px'};
	}
	if($rootScope.truescore>72.8 && $rootScope.truescore<75.6)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(56deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-56deg)','top': '39px'};
	}
	if($rootScope.truescore>75.6 && $rootScope.truescore<78.4)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(66deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-66deg)','top': '39px'};
	}
	if($rootScope.truescore>78.4 && $rootScope.truescore<81.2)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(76deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-76deg)','top': '39px'};
	}
	if($rootScope.truescore>81.2 && $rootScope.truescore<84)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(86deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-86deg)','top': '39px'};
	}
	if($rootScope.truescore>84 && $rootScope.truescore<89.6)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(96deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-96deg)','top': '39px'};
	}
	if($rootScope.truescore>89.6 && $rootScope.truescore<92.4)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(106deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-106deg)','top': '47px'};
	}
	if($rootScope.truescore>92.4 && $rootScope.truescore<95.2)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(116deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-116deg)','top': '52px'};
	}
	if($rootScope.truescore>95.2 && $rootScope.truescore<98)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(126deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-126deg)','top': '52px'};
	}
	if($rootScope.truescore>98 && $rootScope.truescore<=100)
	{
		$scope.truevaluStyle3	= {'left': '5%','margin-top': '1%','transform': 'rotate(136deg)'};
		$scope.truevaluStyle32 	= {'transform': 'rotate(-166deg)','top': '52px'};
	}
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
		$http.get("http://192.168.1.240:80/getEightValues",{method 	: 'GET',headers	:{'Content-Type': 'application/json'}})
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
    	$http.get("http://192.168.1.240:80/test",{method :'GET',params:$scope.data,headers:{'Content-Type': 'application/json'}})
		.then(function(response) {
			if(response.data.response_code=='200')
			{
				$rootScope.truescore=response.data.data[0].TRUE_SCORE;
				$scope.truevalue=response.data.data[0].TRUE_SCORE;
				if(response.data.data[0].TRUE_SCORE>0 && response.data.data[0].TRUE_SCORE<40)
				{
					$scope.truevaluStyle 	= {'border': '10px solid red'};
					//$scope.truevaluStyle2 	= {'border': '10px solid red'};
				}
				if(response.data.data[0].TRUE_SCORE>39)
				{
					$scope.truevaluStyle 	= {'border': '10px solid orange'};
					//$scope.truevaluStyle2 	= {'border': '10px solid orange'};
				}
				if(response.data.data[0].TRUE_SCORE>89)
				{
					$scope.truevaluStyle 	= {'border': '10px solid green'};
					//$scope.truevaluStyle2 	= {'border': '10px solid green'};
				}
			}
			else
			{

			}
	        
	    });

    }
    
})
