shoppingList.factory("shoppingData", function($http){
   return{
       getAllData:function(){
           return $http({method:"GET", url:"/get"});
       },
       submitItem:function(item){
            return $http({method:"POST", url:"/add", data:item})
       },
       deleteItem:function(itemId){
           var data = {id:itemId};
           return $http({method:"POST", url:"/delete", data:JSON.stringify(data)})
       },
       switchChecked:function(itemId){
           var data = {id:itemId};
           return $http({method:"POST", url:"/checking", data:JSON.stringify(data)})
       },
       changeQuantity:function(itemId, dec){
           var data = {id:itemId, decrease:dec};
           return $http({method:"PUT", url:"/changeQty", data:JSON.stringify(data)})
       },
       dropbDb:function(){
           return $http({method:"GET", url:"/drop"});
       },
       changeName:function(item){
           var data = {id:item._id, name:item.name};
           return $http({method:"PUT", url:"/chgName", data:data});
       }
   }
});