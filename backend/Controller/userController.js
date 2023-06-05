
const User=require("../Models/userModel")
const jwt=require("jsonwebtoken");
const signup= (req,res)=>{
   let {username,password,name,role,email}=req.body;
   let user=new User({
    username,
    password,
    name,
    role,
    email
   })
   user.save().then((user)=>{
    {
        res.status(200).json({status:"SUCCESS", message: "User Successfully Created", user: user });
    }
   }).catch(err=>{
    res.status(400).json({ err: err, message: "User Not Created" });
   })
}


const login = (req, res) => {
    let { username, email, password } = req.body;
  
    User.findOne({ $or: [{ username: username }, { email: email }] })
      .then(foundUser => {
        if (!foundUser) {
          res.status(400).send({ "Message": "User Not Found" });
        } else {
          if (password === foundUser.password) {
            let token = jwt.sign(
              {
                id: foundUser._id,
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