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
	if($rootScope.truescore>0 && $rootScope.truescore<2.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(28deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-28deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '3%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '-6%','margin-top': '20%'};
				}
				if($rootScope.truescore>=2.8 && $rootScope.truescore<5.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(38deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-38deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-2%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '-13%','margin-top': '20%'};
				}
				if($rootScope.truescore>=5.6 && $rootScope.truescore<8.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(48deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-48deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-6%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '-20%','margin-top': '13%'};
				}
				if($rootScope.truescore>=8.4 && $rootScope.truescore<11.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(58deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-58deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-94%','margin-top': '28%'};
					$scope.truevaluStyle36	= {'margin-left': '-25%','margin-top': '7%'};
				}
				if($rootScope.truescore>=11.2 && $rootScope.truescore<14)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(68deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-68deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-28%','margin-top': '-5%'};
					$scope.truevaluStyle36	= {'margin-left': '-31%','margin-top': '-26%'};
				}
				if($rootScope.truescore>=14 && $rootScope.truescore<16.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(78deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-78deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-28%','margin-top': '11%'};
					$scope.truevaluStyle36	= {'margin-left': '-31%','margin-top': '-11%'};
				}
				if($rootScope.truescore>=16.8 && $rootScope.truescore<19.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(88deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-88deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-28%','margin-top': '4%'};
					$scope.truevaluStyle36	= {'margin-left': '-31%','margin-top': '-22%'};
				}
				if($rootScope.truescore>=19.6 && $rootScope.truescore<22.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(100deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-100deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-28%','margin-top': '-4%'};
					$scope.truevaluStyle36	= {'margin-left': '-31%','margin-top': '-30%'};
				}
				if($rootScope.truescore>=22.4 && $rootScope.truescore<25.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(110deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-110deg)','top': '58px'};
					$scope.truevaluStyle37	= {'margin-left': '-25%','margin-top': '-18%'};
					$scope.truevaluStyle36	= {'margin-left': '-30%','margin-top': '-29%'};
				}
				if($rootScope.truescore>=25.2 && $rootScope.truescore<28)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(120deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-120deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '-22%','margin-top': '-24%'};
					$scope.truevaluStyle36	= {'margin-left': '-26%','margin-top': '-48%'};
				}
				if($rootScope.truescore>=28 && $rootScope.truescore<30.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(130deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-130deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '-17%','margin-top': '-30%'};
					$scope.truevaluStyle36	= {'margin-left': '-22%','margin-top': '-54%'};
				}
				if($rootScope.truescore>=30.8 && $rootScope.truescore<33.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(150deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-150deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '-4%','margin-top': '-41%'};
					$scope.truevaluStyle36	= {'margin-left': '-7%','margin-top': '-64%'};
				}
				if($rootScope.truescore>=33.6 && $rootScope.truescore<36.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(160deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-160deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '5%','margin-top': '-48%'};
					$scope.truevaluStyle36	= {'margin-left': '1%','margin-top': '-70%'};
				}
				if($rootScope.truescore>=36.4 && $rootScope.truescore<39.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(170deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-170deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '13%','margin-top': '-46%'};
					$scope.truevaluStyle36	= {'margin-left': '10%','margin-top': '-70%'};
				}
				if($rootScope.truescore>=39.2 && $rootScope.truescore<42)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(180deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-180deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '22%','margin-top': '-48%'};
					$scope.truevaluStyle36	= {'margin-left': '17%','margin-top':'-70%'};
				}
				if($rootScope.truescore>=42 && $rootScope.truescore<44.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(190deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-190deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '32%','margin-top': '-48%'};
					$scope.truevaluStyle36	= {'margin-left': '27%','margin-top':'-70%'};
				}
				if($rootScope.truescore>=44.8 && $rootScope.truescore<47.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(200deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-200deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '39%','margin-top': '-45%'};
					$scope.truevaluStyle36	= {'margin-left': '36%','margin-top':'-66%'};
				}
				if($rootScope.truescore>=47.6 && $rootScope.truescore<50.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(210deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-210deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '46%','margin-top': '-39%'};
					$scope.truevaluStyle36	= {'margin-left': '44%','margin-top':'-66%'};
				}
				if($rootScope.truescore>=50.4 && $rootScope.truescore<53.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(220deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-220deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '46%','margin-top': '-45%'};
					$scope.truevaluStyle36	= {'margin-left': '44%','margin-top':'-66%'};
				}
				if($rootScope.truescore>=53.2 && $rootScope.truescore<56)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(225deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-225deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '52%','margin-top': '-34%'};
					$scope.truevaluStyle36	= {'margin-left': '50%','margin-top': '-60%'};
				}
				if($rootScope.truescore>=56 && $rootScope.truescore<58.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(230deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-230deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '60%','margin-top': '-25%'};
					$scope.truevaluStyle36	= {'margin-left': '56%','margin-top': '-55%'};
				}
				if($rootScope.truescore>=58.8 && $rootScope.truescore<61.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(240deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-240deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '66%','margin-top': '-22%'};
					$scope.truevaluStyle36	= {'margin-left': '61%','margin-top': '-45%'};
				}
				if($rootScope.truescore>=61.6 && $rootScope.truescore<64.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(250deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-250deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '72%','margin-top': '-7%'};
					$scope.truevaluStyle36	= {'margin-left': '68%','margin-top': '-29%'};
				}
				if($rootScope.truescore>=64.4 && $rootScope.truescore<67.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(260deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-260deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '72%','margin-top': '-7%'};
					$scope.truevaluStyle36	= {'margin-left': '68%','margin-top': '-29%'};
				}
				if($rootScope.truescore>=67.2 && $rootScope.truescore<70)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(270deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-270deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '72%','margin-top': '3%'};
					$scope.truevaluStyle36	= {'margin-left': '68%','margin-top': '-20%'};
				}
				if($rootScope.truescore>=70 && $rootScope.truescore<72.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(280deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-280deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '71%','margin-top': '12%'};
					$scope.truevaluStyle36	= {'margin-left': '68%','margin-top': '-11%'};
				}
				if($rootScope.truescore>=72.8 && $rootScope.truescore<75.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(290deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-290deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '69%','margin-top': '19%'};
					$scope.truevaluStyle36	= {'margin-left': '66%','margin-top': '-5%'};
				}
				if($rootScope.truescore>=75.6 && $rootScope.truescore<78.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(300deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-300deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '65%','margin-top': '19%'};
					$scope.truevaluStyle36	= {'margin-left': '62%','margin-top': '3%'};
				}
				if($rootScope.truescore>=78.4 && $rootScope.truescore<81.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(310deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-310deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '59%','margin-top': '19%'};
					$scope.truevaluStyle36	= {'margin-left': '55%','margin-top': '10%'};
				}
				if($rootScope.truescore>=81.2 && $rootScope.truescore<84)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(320deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-320deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '54%','margin-top': '20%'};
					$scope.truevaluStyle36	= {'margin-left': '50%','margin-top': '14%'};
				}
				if($rootScope.truescore>84 && $rootScope.truescore<89.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(330deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-330deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '47%','margin-top': '19%'};
					$scope.truevaluStyle36	= {'margin-left': '43%','margin-top': '20%'};
				}
				if($rootScope.truescore>89.6 && $rootScope.truescore<92.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(340deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-340deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '39%','margin-top': '17%'};
					$scope.truevaluStyle36	= {'margin-left': '35%','margin-top': '23%'};
				}
				if($rootScope.truescore>92.4 && $rootScope.truescore<95.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(350deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-350deg)','top': '52px'};
					$scope.truevaluStyle37	= {'margin-left': '17%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '13%','margin-top': '29%'};
				}
				if($rootScope.truescore>95.2 && $rootScope.truescore<98)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(365deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-365deg)','top': '52px'};
					$scope.truevaluStyle37	= {'margin-left': '17%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '13%','margin-top': '29%'};
				}
				if($rootScope.truescore>98 && $rootScope.truescore<100)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(385deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-385deg)','top': '52px'};
					$scope.truevaluStyle37	= {'margin-left': '0%','margin-top': '14%'};
					$scope.truevaluStyle36	= {'margin-left': '-3%','margin-top': '25%'};
				}
				if($rootScope.truescore==100)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(385deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-385deg)','top': '52px'};
					$scope.truevaluStyle37	= {'margin-left': '-8%','margin-top': '14%'};
					$scope.truevaluStyle36	= {'margin-left': '-3%','margin-top': '25%'};
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
				if($rootScope.truescore>0 && $rootScope.truescore<2.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(28deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-28deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '3%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '-6%','margin-top': '20%'};
				}
				if($rootScope.truescore>=2.8 && $rootScope.truescore<5.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(38deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-38deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-2%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '-13%','margin-top': '20%'};
				}
				if($rootScope.truescore>=5.6 && $rootScope.truescore<8.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(48deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-48deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-6%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '-20%','margin-top': '13%'};
				}
				if($rootScope.truescore>=8.4 && $rootScope.truescore<11.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(58deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-58deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-94%','margin-top': '28%'};
					$scope.truevaluStyle36	= {'margin-left': '-25%','margin-top': '7%'};
				}
				if($rootScope.truescore>=11.2 && $rootScope.truescore<14)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(68deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-68deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-28%','margin-top': '-5%'};
					$scope.truevaluStyle36	= {'margin-left': '-31%','margin-top': '-26%'};
				}
				if($rootScope.truescore>=14 && $rootScope.truescore<16.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(78deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-78deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-28%','margin-top': '11%'};
					$scope.truevaluStyle36	= {'margin-left': '-31%','margin-top': '-11%'};
				}
				if($rootScope.truescore>=16.8 && $rootScope.truescore<19.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(88deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-88deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-28%','margin-top': '4%'};
					$scope.truevaluStyle36	= {'margin-left': '-31%','margin-top': '-22%'};
				}
				if($rootScope.truescore>=19.6 && $rootScope.truescore<22.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(100deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-100deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '-28%','margin-top': '-4%'};
					$scope.truevaluStyle36	= {'margin-left': '-31%','margin-top': '-30%'};
				}
				if($rootScope.truescore>=22.4 && $rootScope.truescore<25.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(110deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-110deg)','top': '58px'};
					$scope.truevaluStyle37	= {'margin-left': '-25%','margin-top': '-18%'};
					$scope.truevaluStyle36	= {'margin-left': '-30%','margin-top': '-29%'};
				}
				if($rootScope.truescore>=25.2 && $rootScope.truescore<28)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(120deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-120deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '-22%','margin-top': '-24%'};
					$scope.truevaluStyle36	= {'margin-left': '-26%','margin-top': '-48%'};
				}
				if($rootScope.truescore>=28 && $rootScope.truescore<30.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(130deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-130deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '-17%','margin-top': '-30%'};
					$scope.truevaluStyle36	= {'margin-left': '-22%','margin-top': '-54%'};
				}
				if($rootScope.truescore>=30.8 && $rootScope.truescore<33.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(150deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-150deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '-4%','margin-top': '-41%'};
					$scope.truevaluStyle36	= {'margin-left': '-7%','margin-top': '-64%'};
				}
				if($rootScope.truescore>=33.6 && $rootScope.truescore<36.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(160deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-160deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '5%','margin-top': '-48%'};
					$scope.truevaluStyle36	= {'margin-left': '1%','margin-top': '-70%'};
				}
				if($rootScope.truescore>=36.4 && $rootScope.truescore<39.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(170deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-170deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '13%','margin-top': '-46%'};
					$scope.truevaluStyle36	= {'margin-left': '10%','margin-top': '-70%'};
				}
				if($rootScope.truescore>=39.2 && $rootScope.truescore<42)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(180deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-180deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '22%','margin-top': '-48%'};
					$scope.truevaluStyle36	= {'margin-left': '17%','margin-top':'-70%'};
				}
				if($rootScope.truescore>=42 && $rootScope.truescore<44.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(190deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-190deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '32%','margin-top': '-48%'};
					$scope.truevaluStyle36	= {'margin-left': '27%','margin-top':'-70%'};
				}
				if($rootScope.truescore>=44.8 && $rootScope.truescore<47.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(200deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-200deg)','top': '55px'};
					$scope.truevaluStyle37	= {'margin-left': '39%','margin-top': '-45%'};
					$scope.truevaluStyle36	= {'margin-left': '36%','margin-top':'-66%'};
				}
				if($rootScope.truescore>=47.6 && $rootScope.truescore<50.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(210deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-210deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '46%','margin-top': '-39%'};
					$scope.truevaluStyle36	= {'margin-left': '44%','margin-top':'-66%'};
				}
				if($rootScope.truescore>=50.4 && $rootScope.truescore<53.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(220deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-220deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '46%','margin-top': '-45%'};
					$scope.truevaluStyle36	= {'margin-left': '44%','margin-top':'-66%'};
				}
				if($rootScope.truescore>=53.2 && $rootScope.truescore<56)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(225deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-225deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '52%','margin-top': '-34%'};
					$scope.truevaluStyle36	= {'margin-left': '50%','margin-top': '-60%'};
				}
				if($rootScope.truescore>=56 && $rootScope.truescore<58.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(230deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-230deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '60%','margin-top': '-25%'};
					$scope.truevaluStyle36	= {'margin-left': '56%','margin-top': '-55%'};
				}
				if($rootScope.truescore>=58.8 && $rootScope.truescore<61.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(240deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-240deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '66%','margin-top': '-22%'};
					$scope.truevaluStyle36	= {'margin-left': '61%','margin-top': '-45%'};
				}
				if($rootScope.truescore>=61.6 && $rootScope.truescore<64.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(250deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-250deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '72%','margin-top': '-7%'};
					$scope.truevaluStyle36	= {'margin-left': '68%','margin-top': '-29%'};
				}
				if($rootScope.truescore>=64.4 && $rootScope.truescore<67.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(260deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-260deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '72%','margin-top': '-7%'};
					$scope.truevaluStyle36	= {'margin-left': '68%','margin-top': '-29%'};
				}
				if($rootScope.truescore>=67.2 && $rootScope.truescore<70)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(270deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-270deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '72%','margin-top': '3%'};
					$scope.truevaluStyle36	= {'margin-left': '68%','margin-top': '-20%'};
				}
				if($rootScope.truescore>=70 && $rootScope.truescore<72.8)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(280deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-280deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '71%','margin-top': '12%'};
					$scope.truevaluStyle36	= {'margin-left': '68%','margin-top': '-11%'};
				}
				if($rootScope.truescore>=72.8 && $rootScope.truescore<75.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(290deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-290deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '69%','margin-top': '19%'};
					$scope.truevaluStyle36	= {'margin-left': '66%','margin-top': '-5%'};
				}
				if($rootScope.truescore>=75.6 && $rootScope.truescore<78.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(300deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-300deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '65%','margin-top': '19%'};
					$scope.truevaluStyle36	= {'margin-left': '62%','margin-top': '3%'};
				}
				if($rootScope.truescore>=78.4 && $rootScope.truescore<81.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(310deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-310deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '59%','margin-top': '19%'};
					$scope.truevaluStyle36	= {'margin-left': '55%','margin-top': '10%'};
				}
				if($rootScope.truescore>=81.2 && $rootScope.truescore<84)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(320deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-320deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '54%','margin-top': '20%'};
					$scope.truevaluStyle36	= {'margin-left': '50%','margin-top': '14%'};
				}
				if($rootScope.truescore>84 && $rootScope.truescore<89.6)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(330deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-330deg)','top': '39px'};
					$scope.truevaluStyle37	= {'margin-left': '47%','margin-top': '19%'};
					$scope.truevaluStyle36	= {'margin-left': '43%','margin-top': '20%'};
				}
				if($rootScope.truescore>89.6 && $rootScope.truescore<92.4)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(340deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-340deg)','top': '47px'};
					$scope.truevaluStyle37	= {'margin-left': '39%','margin-top': '17%'};
					$scope.truevaluStyle36	= {'margin-left': '35%','margin-top': '23%'};
				}
				if($rootScope.truescore>92.4 && $rootScope.truescore<95.2)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(350deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-350deg)','top': '52px'};
					$scope.truevaluStyle37	= {'margin-left': '30%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '26%','margin-top': '29%'};
				}
				if($rootScope.truescore>95.2 && $rootScope.truescore<98)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(365deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-365deg)','top': '52px'};
					$scope.truevaluStyle37	= {'margin-left': '17%','margin-top': '18%'};
					$scope.truevaluStyle36	= {'margin-left': '13%','margin-top': '29%'};
				}
				if($rootScope.truescore>98 && $rootScope.truescore<100)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(385deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-385deg)','top': '52px'};
					$scope.truevaluStyle37	= {'margin-left': '0%','margin-top': '14%'};
					$scope.truevaluStyle36	= {'margin-left': '-3%','margin-top': '25%'};
				}
				if($rootScope.truescore==100)
				{
					$scope.truevaluStyle3	= {'transform': 'rotate(385deg)'};
					$scope.truevaluStyle32 	= {'transform': 'rotate(-385deg)','top': '52px'};
					$scope.truevaluStyle37	= {'margin-left': '-8%','margin-top': '14%'};
					$scope.truevaluStyle36	= {'margin-left': '-3%','margin-top': '25%'};
				}
			}
			else
			{

			}
	        
	    });

    }
    
})
