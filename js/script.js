$(document).ready(function(){


angular.module('myApp', []).controller('myCtrl', function($scope){

$(".password .tip").hide();

$scope.colors = [
	{name:'purple',hex:'#9C27B0'},
	{name:'red',hex:'#f44336'},
	{name:'yellow',hex:'#FFEB3B'},
	{name:'blue',hex:'#2196F3'},
	{name:'orange',hex:'#FF9800'},
	{name:'green',hex:'#4CAF50'}
];


$scope.flavorDict1 = ["path", "rabbit", "dress", "page", "replied", "bus", "product", "sky", "wonder" ]; 
$scope.flavorDict2 = ["river", "river", "chapter", "respect", "medicine", "outside", "available", "replace", "life" ]; 
$scope.flavorDict3 = ["car", "orbit", "region", "wing", "section", "short", "money", "suppose", "lonely" ]; 
$scope.flavorDict4 = ["swim", "substance", "fill", "black", "use", "pet", "high", "strong", "national" ]; 
$scope.flavorDict5 = ["until", "second", "motion", "hair", "purple", "charge", "represent", "enjoy", "more" ]; 
$scope.flavorDict6 = ["single", "shall", "musical", "dirt", "speech", "gentle", "plastic", "affect", "break" ]; 


$scope.flavor = $scope.flavorDict1;
var total = "";
$scope.password;
$scope.num = "";


$scope.select = function(e){

	if ($scope.num !== "") {
		generate(num);
	}

	switch (e) {
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
}


var lock = new PatternLock('#patternHolder',{
	allowRepeat: false,
	onDraw:function(pattern){
        num = lock.getPattern();
        generate(num);
        $(".flavors").css("height","60%");
        $(".password").css("height","40%");
        $(".password .tip").show();
    }

});


function generate(num){
		for(i=0;i<num.length;i++){
			if ("undefined" !== typeof $scope.flavorDict1[num[i]]){
			total += $scope.flavor[num[i]];
		}
		}		
		$scope.password = total;
    	console.log(num);
    	$(".password .text").html(total);
    }
});
});

// #TODO: 1) Utilize all 6 word lists for different colors.
// 	   2) Decide custom hash/color algorithm.
// 	   3) Display password
// 	   4) $scope.hash