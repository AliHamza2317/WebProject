const jwt=require("jsonwebtoken");
let verifyUserLoggedIn=(req,res,next)=>{
    let token=req.headers['token'];

    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(!err){
            req.decoded=decoded;
            // console.log(req)
            next();
        }
        else{
            res.send(401).send({"Message":"You are Not Authorized"})
        }
    })
}

let checkRole=(req,res,next)=>{
    if(req.decoded.role=='touragent'){
        next()
    }else{
        res.status(403).send({"Message":"You are not Touragent"})
    }
}


let checkCust=(req,res,next)=>{
    if(req.decoded.role=='customer'){
        next()
    }else{
        res.status(403).send({"Message":"You are not Customer"})
    }
}


module.exports={
    verifyUserLoggedIn,
    checkRole,
    checkCust
}