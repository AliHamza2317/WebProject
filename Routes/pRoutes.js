const { addPayment, viewPayments } = require("../Controller/PaymentController");

const paymentRouter=require("express").Router();









paymentRouter.post("/addpayment/:bookingId",addPayment)
paymentRouter.get("/viewpayments",viewPayments)



module.exports=paymentRouter


