const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

// Routes for Registering

router.post("/customer-register", validInfo, async (req, res) => {

    try {
     

    // Steps for Register Route:

    //1. Destructure the req.body (name, email, password, type, status)

    const { name, email, password } = req.body; // 'type' refers to 'user_type' with possible values of 'admin', 'tutor', or 'customer' AND 'status' refers to 'user_status' with possible values of 'active', or 'inactive'.

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

    let newUser = await pool.query(
        "INSERT INTO tbl_login (user_name, user_email, user_password, user_type, user_status) VALUES ($1, $2, $3, 'customer', 'active') RETURNING *", [name, email, bcryptPassword]
    );

    // res.json(newUser.rows[0]); // This has been commented to call the res.json below to get the token; works similar to a return statement inside a function.

    //5. Generating our JWT Token

    const token = jwtGenerator(newUser.rows[0].user_id); 

     res.json({token});
    

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
    
});


// Routes for Login

router.post("/login", validInfo, async (req, res) => {
    try {

    // Steps for Login Route
    
    //1. Destructure the req.body  
    
    const { email, password } = req.body;  // Only email and password is required in the login routes.


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

    res.json({token});
        
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");  
    }

});

// Route for Verification/Authorization of JWT tokens 

router.get("/verify", authorization , async ( req , res ) => {

try {
    
    res.json(true);

} catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");  
}

});

module.exports = router;