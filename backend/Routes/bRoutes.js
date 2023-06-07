// const booking = require("../Controller/BookingController");
const { verifyUserLoggedIn, checkRole, checkCust } = require("../authenticate");
const tourRouter = require("./tourRoutes");
const { booking,viewbookings, deleteBooking } = require("../Controller/BookingController");




tourRouter.post("/bookings/:id",checkCust,verifyUserLoggedIn,booking)
tourRouter.get("/viewbookings",checkRole,verifyUserLoggedIn,viewbookings)
tourRouter.delete('/booking/:bookingId',checkRole,verifyUserLoggedIn, deleteBooking);
module.exports=tourRouter

