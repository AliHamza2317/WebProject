const tour=require("../Models/tourSchema")
const Booking=require("../Models/bookingSchema")
const Customer=require("../Models/customerSchema")
const Payment=require("../Models/paymentSchema")
const nodemailer = require('nodemailer');
const User = require("../Models/userModel");




const stripe = require('stripe')('sk_test_51N5keOESFgqQlsyzUyepxrlBjulvqwPcMbWvWtfvvPVqvwRG6JZ2q18fUpNFHiV1WfJ24cOUmz6Gbb9C5aSyy44O000prjxjFi');

const addPayment = async (req, res) => {
  try {
    const booking_id=req.params.bookingId
    const { id, user_id, amount, payment_method, transaction_id, status } = req.body;

    // Create a new payment object
    const payment = new Payment({
      booking_id,
      amount,
      user_id,
      payment_method,
      transaction_id,
      status
    });

    // Save the payment to the database
    const savedPayment = await payment.save();

    const booking = await Booking.findOne({ booking_id: booking_id });

    if (!booking) {
      res.status(404).json({ error: 'Booking not found' });
      return;
    }

    const cust = await User.findOne({ _id: req.body.user_id });

    if (!cust) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }

    await Booking.updateOne({ booking_id: booking_id }, { $set: { paymentstatus: 'paid' } });

    // Charge the payment using Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe requires the amount in cents
      currency: 'usd',
      payment_method: id,
      confirmation_method: 'manual',
      confirm: true
    });

    // Check if the payment was successful
    if (paymentIntent.status === 'succeeded') {
      res.status(201).json({ message: 'Payment added and processed successfully', payment: savedPayment });
      await sendPaymentConfirmationEmail(cust.email, payment);
    } else {
      res.status(500).json({ error: 'Payment processing failed' });
    }
  } catch (error) {
    console.error('Error adding payment:', error);
    res.status(500).json({ error: 'Failed to add payment' });
  }
};


  const viewPayments = async (req, res) => {
    try {
      const { customer_id } = req.body; // Extract customer_id from the request body
      const customer = await Customer.findOne({ customer_id: customer_id });
  
      if (!customer) {
        res.status(404).json({ error: 'Customer not found' });
        return;
      }
  
      // Retrieve payments associated with the customer
      const payments = await Payment.find({ booking_id: { $in: customer.bookings.map(booking => booking.booking_id) } });
      
      res.status(200).json({ customer, payments });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve customer payments' });
    }
  };


  const sendPaymentConfirmationEmail = async (customerEmail, payment) => {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email service credentials here
      service: 'gmail',
      auth: {
        user: 'a.hamza2317@gmail.com',
        pass: 'hkyupolwrytbvjuv',
      },
    });
  
    // Compose the email
    const mailOptions = {
      from: 'a.hamza2317@gmail.com',
      to: customerEmail,
      subject: 'Payment Confirmation',
      text: `Thank you for your payment! Payment details:\n\nAmount: ${payment.amount}\nPayment Method: ${payment.payment_method}\nTransaction ID: ${payment.transaction_id}`,
    };
  
    // Send the email
    await transporter.sendMail(mailOptions);
  };


  



  module.exports={
    addPayment,
    viewPayments
  }