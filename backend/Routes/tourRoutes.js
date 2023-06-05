const tourRouter=require("express").Router();
const jwt=require("jsonwebtoken");
const {verifyUserLoggedIn, checkRole} = require("../authenticate");
const { addtour, viewtour, deletetour, updateTour, viewtourbyid } = require("../Controller/TourController");




tourRouter.post("/add",verifyUserLoggedIn,checkRole,addtour)
tourRouter.get("/view",verifyUserLoggedIn,checkRole,viewtour)
tourRouter.put("/update",verifyUserLoggedIn,checkRole,updateTour)
tourRouter.delete("/delete/:id",verifyUserLoggedIn,checkRole,deletetour)


tourRouter.get("/viewtourbyid/:id",viewtourbyid)



module.exports=tourRouter