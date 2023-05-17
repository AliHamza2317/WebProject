
const Customer=require("../Models/customerSchema")



const customers=async (req, res) => {
    try {
      const customer = await Customer.create(req.body);
      res.status(201).json({ customer });
    } catch (error) {
      res.status(400).json({ error: 'Failed to add the customer' });
    }
  };  

  module.exports=customers