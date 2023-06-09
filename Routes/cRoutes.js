const customerRouter=require("express").Router();
const customers = require("../Controller/CustomerController");





customerRouter.post("/add",customers)


module.exports=customerRouter