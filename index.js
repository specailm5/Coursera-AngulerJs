(function(){
'use strict';
angular.module('MyFirstApp',[])

.controller('MyFirstController', function($scope){
    $scope.name="";
    $scope.TotalValue=0;
    $scope.DisplayNumeric = function(){
        var totalNameValue=calNumForStr($scope.name);
        $scope.TotalValue=totalNameValue;

    };

    function calNumForStr(string){
        var totalStrValue=0;
        for ( var i =0; i < string.length; i++){
            totalStrValue += string.charCodeAt(i)
        }

        return totalStrValue;
    }
    
})




})();