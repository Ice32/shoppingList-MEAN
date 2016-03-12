"use strict";
shoppingList.controller("appController", function($scope, shoppingData, $log){
    function loadData(){
        shoppingData.getAllData().success(function(data){
            $scope.data = data;
            var totalSpent = 0;
            for(var item in data){
                totalSpent += data[item].price * data[item].quantity;
            }
            $scope.totalSpent = totalSpent;
        });
    }
    loadData();
    $scope.submitItem = function(item){
        if(!item || !item.itemName || !item.itemPrice){
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
    $scope.refreshList = function(){
        if(confirm("This action will delete all of the items. Are you sure you want to proceed?")){
            shoppingData.dropbDb().success(function(){
                loadData();
            })
        }
    };
    $scope.changeName = function(item){
        var newName = prompt("Enter the new name:");
        if(!newName)return false;
        item.name = newName;
        shoppingData.changeName(item);
    }
});