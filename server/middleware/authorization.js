const jwt = require("jsonwebtoken");
require("dotenv").config(); // config() is to gain access to the environment variables in .env since we need that secret i.e jwtSecret


module.exports = async (req, res, next) => {
    try {
        
    //1. Destructure the token i.e get the token from the fetch request

    const jwtToken = req.header("token");

    if (!jwtToken){
        console.error(error.message);
        return res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret) // this verify() method tells us whether the JWT token is valid by comparing it with the jwtSecret

    req.user = payload.user;
    next(); // authorization/verification of the JWT token won't probably work without this function

    } catch (error) {
        console.error(error.message);
        return res.status(403).json("Not Authorized");
        
    }
};