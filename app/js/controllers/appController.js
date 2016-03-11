"use strict";
shoppingList.controller("appController", function($scope, shoppingData, $log){
    function loadData(){
        shoppingData.getAllData().success(function(data){
            $scope.data = data;
        });
    }
    loadData();
    $scope.submitItem = function(item){
        if(!item.itemName || !item.itemPrice){
            return false;
        }
        if(!item.itemQuantity) item.itemQuantity = 1;

        shoppingData.submitItem(item).success(function(){
            loadData();
            item.itemName = item.itemPrice= item.itemQuantity = undefined;
        });
    };
    $scope.deleteItem = function(item){
        shoppingData.deleteItem(item._id);
        loadData();
    };
    $scope.switchChecked = function(item){
        shoppingData.switchChecked(item._id);
        item.bought = !item.bought;
    };
    $scope.changeQty = function(item,dec){
        shoppingData.changeQuantity(item._id,dec);
        dec?item.quantity--:item.quantity++;
    };
});