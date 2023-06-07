const mongoose=require ("mongoose")


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        max:30,
        min:3
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true
    },
    bookings: [{
        booking_id: Number,
        tour_name: String,
        departure_date: Date,
        number_of_people: Number,
        total_price: Number,
        booking_date: Date
      }],
},
{timestamps:true}
)


module.exports=mongoose.model("AppUsers",userSchema)