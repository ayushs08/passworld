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


$scope.flavorDict1 = ["path", "rabbit", "dress", "page", "replied", "bus", "product", "sky", "wonder", "dirt" ]; 
$scope.flavorDict2 = ["river", "river", "chapter", "respect", "medicine", "outside", "available", "replace", "life", "hair" ]; 
$scope.flavorDict3 = ["car", "orbit", "region", "wing", "section", "short", "money", "suppose", "lonely", "single" ]; 
$scope.flavorDict4 = ["swim", "substance", "fill", "black", "use", "pet", "high", "strong", "national", "shall" ]; 
$scope.flavorDict5 = ["until", "second", "motion", "hair", "purple", "charge", "represent", "enjoy", "more", "car" ]; 
$scope.flavorDict6 = ["single", "shall", "musical", "dirt", "speech", "gentle", "plastic", "affect", "break", "orbit" ]; 

$scope.hover;

var total = "";
$(".flavors ul li").click(function(){
	total += $(this).html();
	$scope.hover = $(this).css("border-color");
	$(this).css("background",$scope.hover);
	$(this).css("color","white");
	$(this).siblings().css("background","none");
});


$scope.flavor = $scope.flavorDict1;
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
        
        total="";
    }

});

$scope.test = "";

function generate(num){
		num = num.toString();
		for(i=0;i<=num.length;i++){
			if ("undefined" !== typeof $scope.flavor[num[i]]){
			total += $scope.flavor[num[i]];
			}
		}
		if($scope.hash){
			total += $scope.hash;
		}
    	$(".password .text").html(total);
    }
});
});

