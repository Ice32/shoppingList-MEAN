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
            console.log("itemID in the factory is ", itemId);
           var data = {id:itemId};
           return $http({method:"POST", url:"/checking", data:JSON.stringify(data)})
       }
   }
});