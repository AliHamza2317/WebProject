const {signup, login}=require("../Controller/userController");
const userRouter=require("express").Router();
const jwt=require("jsonwebtoken");






userRouter.post('/signup',signup)
userRouter.post('/login',login)


module.exports=userRouter;