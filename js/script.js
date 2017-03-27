$(document).ready(function(){

	angular.module('myApp', []).controller('myCtrl', function($scope){
		$(".password .tip").hide();

		$scope.flavorDict1 = ["path", "rabbit", "dress", "page", "replied", "bus", "product", "sky", "wonder" ]; 
		$scope.flavorDict2 = ["river", "river", "chapter", "respect", "medicine", "outside", "available", "replace", "life"]; 
		$scope.flavorDict3 = ["car", "orbit", "region", "wing", "section", "short", "money", "suppose", "lonely" ]; 
		$scope.flavorDict4 = ["swim", "substance", "fill", "black", "use", "pet", "high", "strong", "national" ]; 
		$scope.flavorDict5 = ["until", "second", "motion", "hair", "hero", "charge", "represent", "enjoy", "more"]; 
		$scope.flavorDict6 = ["single", "shall", "musical", "dirt", "speech", "gentle", "plastic", "affect", "break"]; 
		$scope.hover;

		var password = "";
		// flavor onClick 
		$(".flavors ul li").click(function(){
			$scope.select($(this).html());
			password += $(this).html();
			$scope.hover = $(this).css("border-color");
			$(this).css("background",$scope.hover);
			$(this).css("color","white");
			$(this).siblings().css("background","none");
		});

		$scope.flavor = $scope.flavorDict1;
		$scope.userPattern = "";

		// selecting vocabulary according to flavor
		$scope.select = function(test){
			switch (test) {
				case 'purple': $scope.flavor = $scope.flavorDict1;
								break;
				case 'red': $scope.flavor = $scope.flavorDict2;
								break;
				case 'yellow': $scope.flavor = $scope.flavorDict3;
								break;
				case 'blue': $scope.flavor = $scope.flavorDict4;
								break;
				case 'orange': $scope.flavor = $scope.flavorDict5;
								break;
				case 'green': $scope.flavor = $scope.flavorDict6;
								break;	
			}
			if ($scope.userPattern !== ""){
				generate(userPattern);
			}
		}

		// onDraw() from patternLock.js returns userPattern 
		var lock = new PatternLock('#patternHolder',{
			allowRepeat: false,
			onDraw:function(pattern){
			    userPattern = lock.getPattern();
			    generate(userPattern);   
		        $(".flavors").css("height","60%");
		        $(".password").css("height","40%");
		        $(".password .tip").show();
		        password="";
		    }
		});

		// generates password
		function generate(userPattern){
			userPattern = userPattern.toString();
			for(i=0;i<=userPattern.length;i++){
				if("undefined" !== typeof $scope.flavor[userPattern[i]-1]){
					password += $scope.flavor[userPattern[i]-1];
				}
			}
			if($scope.hash){
				password += $scope.hash;
			}
	    	$(".password .text").html(password);
		}
	});
});

