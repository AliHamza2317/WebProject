const jwt = require("jsonwebtoken");

let verifyUserLoggedIn = (req, res, next) => {
  let token = req.headers['token'];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (!err) {
      req.decoded = decoded;
      next();
    } else {
      res.status(401).send({ "Message": "You are Not Authorized" });
    }
  });
};

let checkRole = (req, res, next) => {
  if (req.decoded.role === 'touragent') {
    next();
  } else {
    res.status(403).send({ "Message": "You are not a Tour Agent" });
  }
};


let checkCust = (req, res, next) => {
    if (req.decoded.role === 'customer') {
      next();
    } else {
      res.status(403).json({ "Message": "You are not a Customer" });
    }
  };

module.exports = {
  verifyUserLoggedIn,
  checkRole,
  checkCust
};
