"use strict";
shoppingList.controller("appController", function($scope, shoppingData, $http){
    $scope.item = "test samo";
    function loadData(){
        shoppingData.getAllData().success(function(data){
            console.log(data);
            $scope.data = data;
        });
    }
    loadData();
    $scope.submitItem = function(item){
        console.log(item);
        shoppingData.submitItem(item).success(function(){
            loadData();
            console.log("success")
        });
    };
    $scope.deleteItem = function(item){
        shoppingData.deleteItem(item._id);
    };
    $scope.switchChecked = function(item, check){
        shoppingData.switchChecked(item._id);
    }
});