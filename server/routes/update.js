const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

// UPDATE ROUTES

// **************************************************

// Customer Details Update Route

router.post("/customerDetails", authorization, async (req, res) => {
    try {

        const { customerEditFirstName, customerEditLastName, customerEditEmail, customerEditPassword, customerEditStateName, customerEditCityName, user_id } = req.body;


        const updateCustomerDetails = await pool.query("UPDATE tbl_customer SET customerEditFirstName=$1, customerEditLastName=$2, customerEditEmail=$3, customerEditPassword=$4, customerEditStateName=$5, customerEditCityName=$6 WHERE user_id=$7 RETURNING *",
            [customerEditFirstName, customerEditLastName, customerEditEmail, customerEditPassword, customerEditStateName, customerEditCityName, user_id]);

        if (updateCustomerDetails.rows.length === 0) {
            return res.status(401).json("Updation Failed!");
        }


        const user = await pool.query("SELECT * FROM tbl_login WHERE user_id = $1", user_id);

        res.json(user.rows[0]);


    } catch (error) {

        console.error(error.message);
        res.status(500).json("Server Error!");

    }
});