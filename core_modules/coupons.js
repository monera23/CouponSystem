var mongoose = require("mongoose"),
	Schema = mongoose.Schema;



var couponSchema = mongoose.Schema({
		codeid : {type:String, unique:true, required:true,dropDups:true},
		status : String,
		expiryDate : String
});


module.exports = function(){
	// Return the Caterer Model
	return mongoose.model('coupon', couponSchema);
}();