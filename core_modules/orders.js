var mongoose = require("mongoose"),
	Schema = mongoose.Schema;



var orderSchema = mongoose.Schema({
	orderId : String,
	orderAmount : String
});


module.exports = function(){
	// Return the Caterer Model
	return mongoose.model('order', orderSchema);
}();