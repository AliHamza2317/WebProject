const mongoose=require ("mongoose")


const paymentSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    booking_id: {
        type: Number,
        required: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,  // Assuming user_id is stored as ObjectId in the UserSchema
      ref: 'User',  // Reference the User model
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    payment_method: {
      type: String,
      required: true
    },
    transaction_id: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  {timestamps:true}
  )

  
  
  module.exports=mongoose.model("payments",paymentSchema);
  