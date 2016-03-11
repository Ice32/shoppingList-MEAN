var express = require("express");
var server  = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var ObjectId = require('mongodb').ObjectID;
mongoose.connect('mongodb://localhost/listTest');
require("./itemSchema");
var Item = mongoose.model('Item'); //Schema


server.use(express.static("app"));
server.use(bodyParser.json());
//Add an item
server.post("/add", function(req, res, next){
    console.log(req.body);
    var item = new Item();
    item.name = req.body.itemName;
    item.quantity = req.body.itemQuantity;
    item.price = req.body.itemPrice;
    item.bought = false;
    item.save(function (err, item) {
        if(err)
            return next(err);
        res.json(item);
    });
});
server.get("/get", function(req, res, next){
    Item.find({}, function(err, res2){
        if(err)
            return next(err);
        res.json(res2);
    });
});
//Remove item from teh DB
server.post("/delete", function(req, res, next){
    console.log(req.body.id);
    Item.remove({"_id": ObjectId(req.body.id)}, function(err, res){
    });
});

//Update an item
server.post("/checking", function(req, res, next){
    Item.find({_id:ObjectId(req.body.id)}, function(err, doc){
        var currentStatus = doc[0].bought;
        Item.update({"_id" : ObjectId(req.body.id)},{"bought" : !currentStatus}, function(err, res){
            if(err){
                return next(err);
            }
        });
    });


});

server.listen(3210);
console.log("Server listening on port 3210");