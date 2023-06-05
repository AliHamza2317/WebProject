const express=require ("express");
const uRoutes = require("./Routes/userRoutes");
const tRoutes = require("./Routes/tourRoutes");
const bRoutes = require("./Routes/bRoutes");
const cRoutes = require("./Routes/cRoutes");
const pRoutes = require("./Routes/pRoutes");
require("dotenv").config();
const app=express();
const cors = require("cors"); 
app.use(cors())
app.use(express.json())
const mongoose = require("mongoose"); 
app.use('/public', express.static(__dirname + '/public'));
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected")
}).catch(err=>{
   console.log(err) 
}) 

app.listen(process.env.PORT || 3000,()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})

app.use("/user",uRoutes); 
app.use("/tour",tRoutes); 
app.use("/tour",bRoutes); 
app.use("/customer",cRoutes);
app.use("/payment",pRoutes);  

