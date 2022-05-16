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


// 4. Total Session Details Fetch Route

router.get("/session-total", authorization, async(req, res) => {
    try {

        const fetchTotalSessionDetails = await pool.query("SELECT * FROM tbl_session_master sm , tbl_session_child sc, tbl_tutor t, tbl_category c, tbl_subject s, tbl_slot sl WHERE sm.session_master_id=sc.session_master_id AND sm.tutor_id=t.tutor_id AND sc.category_id = c.category_id AND sc.subject_id = s.subject_id AND sc.slot_id = sl.slot_id ORDER BY sm.session_master_id");

        console.log(fetchTotalSessionDetails.rows[0]);

        return res.json(fetchTotalSessionDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});


// **************************************************

// 3. Card Details Fetch Route

router.get("/card/:cardCustomerID", authorization, async(req, res) => {
    try {

        const { cardCustomerID } = req.params;

        const fetchCardDetails = await pool.query("SELECT * FROM tbl_card c, tbl_customer cm WHERE c.customer_id=cm.customer_id AND c.customer_id = $1 ORDER BY card_id");

        return res.json(fetchCardDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});


// **************************************************


// 4. Card Details Fetch Route

router.get("/card", authorization, async(req, res) => {
    try {


        
        const fetchCardDetails = await pool.query("SELECT * FROM tbl_card c, tbl_customer cm WHERE c.customer_id=cm.customer_id ORDER BY card_id");

        return res.json(fetchCardDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});


// **************************************************

// 5. Booking Details Fetch Route for Admin

router.get("/admin-booking", authorization, async(req, res) => {
    try {


        
        const fetchBookingDetails = await pool.query("SELECT * FROM tbl_booking b, tbl_customer c, tbl_session_master s WHERE b.customer_id=c.customer_id AND b.session_master_id=s.session_master_id ORDER BY booking_id");
        // const fetchBookingDetails = await pool.query("SELECT * FROM tbl_booking ORDER BY booking_id");


        return res.json(fetchBookingDetails.rows);
        

    } catch (error) {

        console.error(error.message);
        return res.status(500).json("Server Error!");
        
    }
});



module.exports = router;