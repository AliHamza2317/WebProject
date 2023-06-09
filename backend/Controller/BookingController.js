const Tour = require("../Models/tourSchema");
const Booking = require("../Models/bookingSchema");
const User = require("../Models/userModel");
const Payment = require("../Models/paymentSchema");
const nodemailer = require('nodemailer');

const booking = async (req, res) => {
  try {
    const { id } = req.params;
    const tour_id = Number(id);

    const newBooking = await Booking.create({ ...req.body, tour_id });

    const tour = await Tour.findOne({ tour_id });
    if (!tour) {
      res.status(404).json({ error: 'Tour not found' });
      return;
    }

    const user = await User.findOne({ _id: req.body.user_id });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    if (user.role !== 'customer') {
      res.status(400).json({ error: 'Only customers can make bookings' });
      return;
    }

    const numberOfPeople = newBooking.numberOfpeople;
    const totalPrice = tour.price * numberOfPeople;

    user.bookings.push({
      booking_id: newBooking.booking_id,
      tour_name: tour.tour_name,
      departure_date: tour.departure_date,
      number_of_people: numberOfPeople,
      total_price: totalPrice,
      booking_date: newBooking.booking_date
    });

    await user.save();

    // Update the total price in the created booking
    newBooking.totalprice = totalPrice;
    await newBooking.save();

    res.status(201).json({ message: 'Tour booked successfully', booking: newBooking });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Failed to book the tour' });
  }
};





const viewbookings = async (req, res) => {
  try {
    const user_id = req.params.user_id; // Retrieve user_id from request parameters

    const bookings = await Booking.find({ user_id });

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


const allbookings = async (req, res) => {
  try {
    // Retrieve user_id from request parameters

    const bookings = await Booking.find();

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};






const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    // Find the booking by ID and remove it
    const deletedBooking = await Booking.findOneAndRemove({ booking_id: bookingId });

    if (!deletedBooking) {
      res.status(404).json({ error: 'Booking not found' });
      return;
    }

    // Find the user by their associated booking and update their bookings array
    const user = await User.findOneAndUpdate(
      { 'bookings.booking_id': bookingId },
      { $pull: { bookings: { booking_id: bookingId } } },
      { new: true }
    );

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete the booking' });
  }
};

module.exports = {
  booking,
  viewbookings,
  deleteBooking,
  allbookings
};


