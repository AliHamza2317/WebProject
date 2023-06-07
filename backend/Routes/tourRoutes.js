const tourRouter=require("express").Router();
const jwt=require("jsonwebtoken");
const {verifyUserLoggedIn, checkRole} = require("../authenticate");
const { addtour, viewtour, deletetour, updateTour } = require("../Controller/TourController");




tourRouter.post("/add",checkRole,verifyUserLoggedIn,addtour)
tourRouter.get("/view",verifyUserLoggedIn,viewtour)
tourRouter.put("/update",checkRole,verifyUserLoggedIn,updateTour)
tourRouter.delete("/delete/:id",checkRole,verifyUserLoggedIn,deletetour)






module.exports=tourRouter