$(document).ready(function(){
angular.module('myApp', []).controller('myCtrl', function($scope){
  



$scope.flavorDict1 = ["path", "rabbit", "dress", "page", "replied", "bus", "product", "sky", "wonder" ]; 
$scope.flavorDict2 = ["river", "river", "chapter", "respect", "medicine", "outside", "available", "replace", "life" ]; 
$scope.flavorDict3 = ["car", "orbit", "region", "wing", "section", "short", "money", "suppose", "lonely" ]; 
$scope.flavorDict4 = ["swim", "substance", "fill", "black", "use", "pet", "high", "strong", "national" ]; 
$scope.flavorDict5 = ["until", "second", "motion", "hair", "purple", "charge", "represent", "enjoy", "more" ]; 
$scope.flavorDict6 = ["single", "shall", "musical", "dirt", "speech", "gentle", "plastic", "affect", "break" ]; 


var lock = new PatternLock('#patternHolder',{
    
     mapper: {1:$scope.flavorDict1[0],2:$scope.flavorDict1[1],3:$scope.flavorDict1[2],4:$scope.flavorDict1[3],5:$scope.flavorDict1[4],6:$scope.flavorDict1[5],7:$scope.flavorDict1[6],8:$scope.flavorDict1[7],9:$scope.flavorDict1[8]}

});
console.log(lock);


$scope.generate = function(){

}
});



console.log("askds");
});





