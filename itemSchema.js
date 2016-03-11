var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
	name: {
		type: String
	},
	price: {
		type: Number
	},
	quantity: {
		type: Number
	},
	bought: {
		type: Boolean
	}

});
mongoose.model("Item",Item);