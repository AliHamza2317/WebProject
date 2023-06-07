const express=require ("express");
const uRoutes = require("./Routes/userRoutes");
const tRoutes = require("./Routes/tourRoutes");
const bRoutes = require("./Routes/bRoutes");
const cRoutes = require("./Routes/cRoutes");
const pRoutes = require("./Routes/pRoutes");
const app=express();
const stripe = require("stripe")("sk_test_51N5keOESFgqQlsyzUyepxrlBjulvqwPcMbWvWtfvvPVqvwRG6JZ2q18fUpNFHiV1WfJ24cOUmz6Gbb9C5aSyy44O000prjxjFi")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require("dotenv").config();


app.use(cors())
app.use(express.json())
const mongoose = require("mongoose"); 
app.use('/public', express.static(__dirname + '/public'));
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected")
}).catch(err=>{
   console.log(err) 
}) 

app.listen(process.env.PORT || 3001,()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})

app.use("/user",uRoutes); 
app.use("/tour",tRoutes); 
app.use("/tour",bRoutes); 
app.use("/customer",cRoutes);
app.use("/payment",pRoutes);  

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Spatula company",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})