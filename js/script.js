$(document).ready(function(){
angular.module('myApp', []).controller('myCtrl', function($scope){
  

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

var total = "";
$scope.num = "";
var lock = new PatternLock('#patternHolder',{
	allowRepeat: false,
	onDraw:function(pattern){
        num = lock.getPattern();
        generate(num);	
    }

});


function generate(num){
		for(i=0;i<num.length;i++){
			if ("undefined" !== typeof $scope.flavorDict1[num[i]]){
			total += $scope.flavorDict1[num[i]];
		}
		}		
    	console.log(num);
    	console.log(total);
    }

});
});

// #TODO: 1) Utilize all 6 word lists for different colors.
// 	   2) Decide custom hash/color algorithm.
// 	   3) Display password
// 	   4) $scope.hash