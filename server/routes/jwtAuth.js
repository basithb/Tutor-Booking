const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

// ROUTES FOR REGISTRATION

// **************************************************

// 1. Customer Registration

router.post("/customer-register", validInfo, async (req, res) => {

    try {
     

    // Steps for Register Route:

    //1. Destructure the req.body (name, email, password, type, status)

    const {email, password, firstName, lastName, stateName, cityName } = req.body; // 'type' refers to 'user_type' with possible values of 'admin', 'tutor', or 'customer' AND 'status' refers to 'user_status' with possible values of 'active', or 'inactive'.

    //2. Check if the user exists (if the user already exists, then throw an error)

    const user = await pool.query("SELECT * FROM tbl_login WHERE user_email = $1", [
        email
    ]);

    if(user.rows.length !== 0 ){
        return res.status(401).json("User already exists");
    }


    //3. Bcrypt the user password

    const saltRounds = 10;
    const salt  = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(password, salt);

    //4. Enter the new user into the database

    let newUserLoginDetails = await pool.query(
        "INSERT INTO tbl_login (user_name, user_email, user_password, user_type, user_status) VALUES ($1, $2, $3, 'customer', 'active') RETURNING *", [firstName, email, bcryptPassword]
    )

    const userID = newUserLoginDetails.rows[0].user_id;
    

    let newUserBasicDetails = await pool.query(
        "INSERT INTO tbl_customer (user_id,customer_firstName, customer_lastName, customer_stateName, customer_cityName) VALUES ($1, $2, $3, $4, $5) RETURNING *", [userID, firstName, lastName, stateName, cityName]
    )


    // res.json(newUser.rows[0]); // This has been commented to call the res.json below to get the token; works similar to a return statement inside a function.

    //5. Generating our JWT Token

    const token = jwtGenerator(newUserLoginDetails.rows[0].user_id);

     res.json({token});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
    
});

// **************************************************

// 2. Tutor Registration

router.post("/tutor-register", validInfo, async (req, res) => {

    try {
     

    // Steps for Register Route:

    //1. Destructure the req.body (name, email, password, type, status)

    const {tutorEmail, tutorPassword, tutorFirstName, tutorLastName, tutorStateName, tutorCityName } = req.body; // 'type' refers to 'user_type' with possible values of 'admin', 'tutor', or 'customer' AND 'status' refers to 'user_status' with possible values of 'active', or 'inactive'.

    //2. Check if the user exists (if the user already exists, then throw an error)

    const user = await pool.query("SELECT * FROM tbl_login WHERE user_email = $1", [
        tutorEmail
    ]);

    if(user.rows.length !== 0 ){
        return res.status(401).json("User already exists");
    }


    //3. Bcrypt the user password

    const saltRounds = 10;
    const salt  = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(tutorPassword, salt);

    //4. Enter the new user into the database

    let newUserLoginDetails = await pool.query(
        "INSERT INTO tbl_login (user_name, user_email, user_password, user_type, user_status) VALUES ($1, $2, $3, 'tutor', 'active') RETURNING *", [tutorFirstName, tutorEmail, bcryptPassword]
    )

    const userID = newUserLoginDetails.rows[0].user_id;
    

    let newUserBasicDetails = await pool.query(
        "INSERT INTO tbl_tutor (user_id,tutor_firstName, tutor_lastName, tutor_stateName, tutor_cityName) VALUES ($1, $2, $3, $4, $5) RETURNING *", [userID, tutorFirstName, tutorLastName, tutorStateName, tutorCityName]
    )


    // res.json(newUser.rows[0]); // This has been commented to call the res.json below to get the token; works similar to a return statement inside a function.

    //5. Generating our JWT Token

    // const token = jwtGenerator(newUserLoginDetails.rows[0].user_id);

    //  res.json({token});

    if(newUserBasicDetails){
        res.json(true);
    }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
    
});


// **************************************************

// ROUTES FOR LOGIN

router.post("/login", validInfo, async (req, res) => {
    try {

    // Steps for Login Route
    
    //1. Destructure the req.body  
    
    const { email, password } = req.body;  // Only email and password is required in the login routes.
        let id ="";

    //2. Check if the user exists within the database (if not, return error)

    const user = await pool.query("SELECT * FROM tbl_login WHERE user_email =$1", [email]);

    if(user.rows.length === 0)
    {
        return res.status(401).json("Incorrect Email or Password"); // return res.status(401).send("Incorrect Email or Password"); is also correct
    }

    //3. Check if the input password is the same as the database password.

    const validPassword = await bcrypt.compare(password, user.rows[0].user_password ); //Compares the input password with the User password stored in the database.

    // console.log(validPassword, `The password is ${validPassword}!`); // Just to check if the password is the correct inside the console.

    if(!validPassword)
    {
       return res.status(401).json("Incorrect Email or Password");
    }

    //4. If all tests are passed, then we give them a JWT token 


    const token = jwtGenerator(user.rows[0].user_id);
    const user_type = user.rows[0].user_type;
    const user_id = user.rows[0].user_id;
    if(user_type === 'tutor'){
      const tutor = await pool.query("SELECT * FROM tbl_tutor WHERE user_id = $1", [
        user_id
      ]);
      id = tutor.rows[0].tutor_id;
    }
    else if(user_type === 'customer'){
      const customer = await pool.query("SELECT * FROM tbl_customer WHERE user_id = $1", [
        user_id
      ]);
      id = customer.rows[0].customer_id;
    }
    return res.json({ token, user_type, id, user_id });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
        

// **************************************************

//  ROUTE FOR VERIFCATION/AUTHORIZATION OF JWT TOKENS 

router.get("/verify", authorization , async ( req , res ) => {

try {
    
    res.json(true);

} catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");  
}

});


module.exports = router;