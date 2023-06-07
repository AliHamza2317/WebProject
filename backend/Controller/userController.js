
const User=require("../Models/userModel")
const jwt=require("jsonwebtoken");
// Assuming you have a signup route or function

const signup = (req, res) => {
  // Extract the necessary user information from the request body
  const { name, username, email, password, role } = req.body;

  // Check if the role is "customer"
  if (role === "customer") {
    // Create a new user document with the bookings array initialized as an empty array
    const newUser = new User({
      name,
      username,
      email,
      password,
      role,
      bookings: []
    });

    // Save the user to the database
    newUser.save()
      .then(() => {
        // Handle successful signup
        res.status(200).json({ message: "Signup successful" });
      })
      .catch((error) => {
        // Handle error
        res.status(500).json({ error: "Error occurred during signup" });
      });
  } else {
    // Create a new user document without the bookings array
    const newUser = new User({
      name,
      username,
      email,
      password,
      role
    });

    // Save the user to the database
    newUser.save()
      .then(() => {
        // Handle successful signup
        res.status(200).json({ message: "Signup successful" });
      })
      .catch((error) => {
        // Handle error
        res.status(500).json({ error: "Error occurred during signup" });
      });
  }
};



const login = (req, res) => {
    let { username, email, password } = req.body;
  
    User.findOne({ $or: [{ username: username }, { email: email }] })
      .then(foundUser => {
        if (!foundUser) {
          res.status(400).send({ "Message": "User Not Found" });
        } else {
          if (password === foundUser.password) {
            console.log(foundUser.role)
            let token = jwt.sign(
              {
                id: foundUser._id,
                username:foundUser.username,
                email:foundUser.email,
                role: foundUser.role,
              },
              process.env.SECRET_KEY,
              {
                expiresIn: '24h',
              }
            );
  
            res.json({
              status: "SUCCESS",
              message: "User Log In Successfully",
              role:foundUser.role,
              token: token,
            });
          } else {
            res.json({
              status: "FAILED",
              message: "Password does not match",
            });
          }
        }
      })
      .catch(e => {
        res.status(500).send({ e: e });
      });
  };
module.exports={
    signup,
    login
}