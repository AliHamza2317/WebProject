const { addPayment, viewPayments } = require("../Controller/PaymentController");

const paymentRouter=require("express").Router();









paymentRouter.post("/addpayment",addPayment)
paymentRouter.get("/viewpayments",viewPayments)



module.exports=paymentRouter


