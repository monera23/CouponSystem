var mongoose = require("mongoose"),
	Schema = mongoose.Schema;



var customerSchema = mongoose.Schema({
		emailId : {type:String, unique:true, required:true},
		orderId : String,
		codeId : String
});


module.exports = function(){
	// Return the Customer Model
	return mongoose.model('customer', customerSchema);
}();