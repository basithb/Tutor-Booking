const jwt = require("jsonwebtoken");
require('dotenv').config();

function jwtGenerator(user_id){

    const payload = {
        user: user_id // takes user_id
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1hr"}); // sign the JWT token by passing the payload data, the jwtSecret and also the expiration time. 
}

module.exports = jwtGenerator;