const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// FETCH ROUTES

// **************************************************

// 1. Customer Details Fetch Route

router.get("/customer", authorization, async(req, res) => {
    try {

        const fetchCustomerDetails = await pool.query("SELECT * FROM tbl_customer ORDER BY customer_id");

        return res.json(fetchCustomerDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});


// **************************************************

// 2. Tutor Details Fetch Route

router.get("/tutor", authorization, async(req, res) => {
    try {

        const fetchTutorDetails = await pool.query("SELECT * FROM tbl_tutor ORDER BY tutor_id");

        return res.json(fetchTutorDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});

// **************************************************

// 3. Category Details Fetch Route

router.get("/category", authorization, async(req, res) => {
    try {

        const fetchCategoryDetails = await pool.query("SELECT * FROM tbl_category ORDER BY category_id");

        return res.json(fetchCategoryDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});


// **************************************************

// 3. Slot Details Fetch Route

router.get("/slot", authorization, async(req, res) => {
    try {

        const fetchSlotDetails = await pool.query("SELECT * FROM tbl_slot ORDER BY slot_id");

        return res.json(fetchSlotDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});



// **************************************************

// 3. Subject Details Fetch Route

router.get("/subject", authorization, async(req, res) => {
    try {

        const fetchSubjectDetails = await pool.query("SELECT * FROM tbl_subject s, tbl_category c WHERE s.category_id=c.category_id ORDER BY subject_id");

        return res.json(fetchSubjectDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});


// **************************************************





module.exports = router;