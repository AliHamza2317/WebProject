// const booking = require("../Controller/BookingController");
const { verifyUserLoggedIn, checkRole, checkCust } = require("../authenticate");
const tourRouter = require("./tourRoutes");
const { booking,viewbookings, deleteBooking } = require("../Controller/BookingController");




tourRouter.post("/bookings/:id",verifyUserLoggedIn,checkCust,booking)
tourRouter.get("/viewbookings",verifyUserLoggedIn ,viewbookings)
tourRouter.delete('/booking/:bookingId',verifyUserLoggedIn,checkRole, deleteBooking);
module.exports=tourRouter

