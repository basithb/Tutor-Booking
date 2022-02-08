const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// Routes for Registering

router.post("/register", async (req, res) => {

    try {
     

    // Steps for Register Route:

    //1. Destructure the req.body (name, email, password)

    const { name, email, password } = req.body;

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
        "INSERT INTO tbl_login (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptPassword]
    );

    res.json(newUser.rows[0]);

    //5. Generating our JWT Token


    

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;