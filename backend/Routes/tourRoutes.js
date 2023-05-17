const tourRouter=require("express").Router();
const jwt=require("jsonwebtoken");
const {verifyUserLoggedIn} = require("../authenticate");
const { addtour, viewtour, deletetour, updateTour } = require("../Controller/TourController");




tourRouter.post("/add",verifyUserLoggedIn,addtour)
tourRouter.get("/view",verifyUserLoggedIn,viewtour)
tourRouter.put("/update/:id",verifyUserLoggedIn,updateTour)
tourRouter.delete("/delete/:id",verifyUserLoggedIn,deletetour)




module.exports=tourRouter