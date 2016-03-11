/**
 * Created by Keno on 3/11/2016.
 */
shoppingList.factory("shoppingData", function($http){
   return{
       getAllData:function(){
           return $http({method:"GET", url:"/get"});
         /*  return [
               {
                   name:"Bananas",
                   price:2,
                   quantity:2,
                   bought:false

               },
               {
                   name:"Washing Machine",
                   price:200,
                   quantity:1,
                   bought:true
               },
               {
                   name:"Milk",
                   price:1,
                   quantity:3,
                   bought:true
               }
           ];*/
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