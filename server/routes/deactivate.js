const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// DEACTIVATE ROUTES

// **************************************************

// 1. Customer Deactivate Route

router.post("/customer", authorization, async(req, res) => {
    try {

        const {customer_id} = req.body;

        const deactivateCustomer = await pool.query("SELECT * FROM tbl_customer WHERE customer_id = $1", [customer_id]);        

        if(deactivateCustomer.rows[0].customer_status === 'active'){

            const updateCustomer = await pool.query("UPDATE tbl_customer SET customer_status='inactive' WHERE customer_id=$1 RETURNING *",
            [customer_id]);    
        }

        else if(deactivateCustomer.rows[0].customer_status === "inactive"){

            const updateCustomer = await pool.query("UPDATE tbl_customer SET customer_status='active' WHERE customer_id=$1 RETURNING *",
            [customer_id]);
        }

        return res.json(true);

    } catch (err) {

        console.error(err.message);
        return res.status(500).json("Server Error!");
        
    }
});

// **************************************************

// 2. Tutor Deactivate Route

router.post("/tutor", authorization, async(req, res) => {
    try {

        const {tutor_id} = req.body;

        const deactivateTutor = await pool.query("SELECT * FROM tbl_tutor WHERE tutor_id = $1", [tutor_id]);        

        if(deactivateTutor.rows[0].tutor_status === 'active'){

            const updateTutor = await pool.query("UPDATE tbl_tutor SET tutor_status='inactive' WHERE tutor_id=$1 RETURNING *",
            [tutor_id]);    
        }

        else if(deactivateTutor.rows[0].tutor_status === "inactive"){

            const updateTutor = await pool.query("UPDATE tbl_tutor SET tutor_status='active' WHERE tutor_id=$1 RETURNING *",
            [tutor_id]);
        }

        return res.json(true);

    } catch (err) {

        console.error(err.message);
        return res.status(500).json("Server Error!");
        
    }
});


// **************************************************

// 3. Category Deactivate Route

router.post("/category", authorization, async(req, res) => {
    try {

        const {category_id} = req.body;

        const deactivateCategory = await pool.query("SELECT * FROM tbl_category WHERE category_id = $1", [category_id]);        

        if(deactivateCategory.rows[0].category_status === 'active'){

            const updateCategory = await pool.query("UPDATE tbl_category SET category_status='inactive' WHERE category_id=$1 RETURNING *",
            [category_id]);    
        }

        else if(deactivateCategory.rows[0].category_status === "inactive"){

            const updateCategory = await pool.query("UPDATE tbl_category SET category_status='active' WHERE category_id=$1 RETURNING *",
            [category_id]);
        }

        return res.json(true);

    } catch (err) {

        console.error(err.message);
        return res.status(500).json("Server Error!");
        
    }
});



// **************************************************

// 4. Slot Deactivate Route

router.post("/slot", authorization, async(req, res) => {
    try {

        const {slot_id} = req.body;

        const deactivateSlot = await pool.query("SELECT * FROM tbl_slot WHERE slot_id = $1", [slot_id]);        

        if(deactivateSlot.rows[0].slot_status === 'active'){

            const updateslot = await pool.query("UPDATE tbl_slot SET slot_status='inactive' WHERE slot_id=$1 RETURNING *",
            [slot_id]);    
        }

        else if(deactivateSlot.rows[0].slot_status === "inactive"){

            const updateslot = await pool.query("UPDATE tbl_slot SET slot_status='active' WHERE slot_id=$1 RETURNING *",
            [slot_id]);
        }

        return res.json(true);

    } catch (err) {

        console.error(err.message);
        return res.status(500).json("Server Error!");
        
    }
});

// **************************************************

// 5. Subject Deactivate Route

router.post("/subject", authorization, async(req, res) => {
    try {

        const {subject_id} = req.body;

        const deactivateSubject = await pool.query("SELECT * FROM tbl_subject WHERE subject_id = $1", [subject_id]);        

        if(deactivateSubject.rows[0].subject_status === 'active'){

            const updateSubject = await pool.query("UPDATE tbl_subject SET subject_status='inactive' WHERE subject_id=$1 RETURNING *",
            [subject_id]);    
        }

        else if(deactivateSubject.rows[0].subject_status === "inactive"){

            const updateSubject = await pool.query("UPDATE tbl_subject SET subject_status='active' WHERE subject_id=$1 RETURNING *",
            [subject_id]);
        }

        return res.json(true);

    } catch (err) {

        console.error(err.message);
        return res.status(500).json("Server Error!");
        
    }
});

// **************************************************

// 5. session Deactivate Route

router.post("/session", authorization, async(req, res) => {
    try {

        const {session_master_id} = req.body;

        const deactivateSession = await pool.query("SELECT * FROM tbl_session_master WHERE session_master_id = $1", [session_master_id]);        

        if(deactivateSession.rows[0].session_status === 'active'){

            const updateSession = await pool.query("UPDATE tbl_session_master SET session_status='inactive' WHERE session_master_id=$1 RETURNING *",
            [session_id]);    
        }

        else if(deactivateSession.rows[0].session_status === "inactive"){

            const updateSession = await pool.query("UPDATE tbl_session_master SET session_status='active' WHERE session_master_id=$1 RETURNING *",
            [session_master_id]);
        }

        return res.json(true);

    } catch (err) {

        console.error(err.message);
        return res.status(500).json("Server Error!");
        
    }
});

// **************************************************





module.exports = router;
