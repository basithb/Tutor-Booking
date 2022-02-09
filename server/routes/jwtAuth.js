const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

// Routes for Registering

router.post("/register", async (req, res) => {

    try {
     

    // Steps for Register Route:

    //1. Destructure the req.body (name, email, password, type, status)

    const { name, email, password, type, status } = req.body; // 'type' refers to 'user_type' with possible values of 'admin', 'tutor', or 'customer' AND 'status' refers to 'user_status' with possible values of 'active', or 'inactive'.

    //2. Check if the user exists (if the user already exists, then throw an error)

    const user = await pool.query("SELECT * FROM tbl_login WHERE user_email = $1", [
        email
    ]);

    if(user.rows.length !== 0 ){
        return res.status(401).send("User already exists");
    }


    //3. Bcrypt the user password

    const saltRounds = 10;
    const salt  = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(password, salt);

    //4. Enter the new user into the database

    let newUser = await pool.query(
        "INSERT INTO tbl_login (user_name, user_email, user_password, user_type, user_status) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, email, bcryptPassword, type, status]
    );

    // res.json(newUser.rows[0]); // This has been commented to call the res.json below to get the token; works similar to a return statement inside a function.

    //5. Generating our JWT Token

    const token = jwtGenerator(newUser.rows[0].User_id); 

     res.json({token});
    

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
    
})


// Routes for Login

router.post("/login", async (req, res) => {
    try {

        
        
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");  
    }

})

module.exports = router;