const tour=require("../Models/tourSchema")
const Booking=require("../Models/bookingSchema")
const Customer=require("../Models/customerSchema")
const Payment=require("../Models/paymentSchema")
const nodemailer = require('nodemailer');



const booking = async (req, res) => {
    try {
      const newBooking = await Booking.create(req.body);
      const tours = await tour.findOne({ tour_id: newBooking.tour_id });
  
      if (!tours) {
        res.status(404).json({ error: 'Tour not found' });
        return;
      }
  
      const customer = await Customer.findOne({ customer_id: req.body.customer_id });
  
      if (!customer) {
        res.status(404).json({ error: 'Customer not found' });
        return;
      }
      
      customer.bookings.push({
        booking_id: newBooking.booking_id,
        tour_name: tours.tour_name,
        departure_date: tours.departure_date,
        number_of_people: newBooking.numberOfpeople,
        total_price: newBooking.totalprice,
        booking_date: newBooking.booking_date
      });
  
      await customer.save();
  
      res.status(201).json({ message: 'Tour booked successfully', booking: newBooking });
  
    } catch (error) {
        console.log(error)
      res.status(400).json({ error: 'Failed to book the tour' });
    }
  };




  module.exports=booking;