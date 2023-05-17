const booking = require("../Controller/BookingController");
const tourRouter = require("./tourRoutes");

const bookingRouter=require("express").Router();



tourRouter.post("/bookings",booking)

module.exports=tourRouter

