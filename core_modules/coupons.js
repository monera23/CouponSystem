var mongoose = require("mongoose"),
	Schema = mongoose.Schema;



var couponSchema = mongoose.Schema({
		index  : {type:String,required:true},
		codeid : {type:String, required:true},
		status : String,
		expiryDate : String
});


module.exports = function(){
	// Return the Caterer Model
	return mongoose.model('coupon', couponSchema);
}();