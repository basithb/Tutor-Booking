const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

// ADDITION ROUTES

// **************************************************

// Category Addition Route


router.post("/category", authorization, async (req, res) => {

    try {
        const { category_name } = req.body;

        // Check if category already exists (if yes, then display error)

        // const checkCategory = await pool.query("SELECT * FROM tbl_category WHERE category_name=$1", [category_name]);

        // if (checkCategory.rows.length !== 0) {
        //     res.json(false);
        //     return res.status(401).json("Category already exists.");
        // }

        // Add a new category to the database

        let addNewCategory = await pool.query("INSERT INTO tbl_category(category_name,category_status)VALUES ($1,'active') RETURNING *",
            [category_name]);

        if (addNewCategory) {
            res.json(true);
        }
    }


    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);

    }


});


// **************************************************

// 2. Slot Addition Route

router.post("/slot", authorization, async (req, res) => {

    try {
        const { slot_date, slot_time } = req.body;

        // // Check if Slot already exists (if yes, then display error)
        // const checkSlot = await pool.query("SELECT * FROM tbl_slot WHERE slot_date=$1 AND slot_time=$2", [slot_date, slot_time]);
        // if (checkSlot.rows.length !== 0) {
        //     res.json(false);
        //     // return res.status(401).json("Slot already exists.");
        //     return 0;
        // }

        // Add a new Slot to the database

        let addNewSlot = await pool.query("INSERT INTO tbl_slot (slot_date, slot_time, slot_status) VALUES ($1,$2,'active') RETURNING *",
            [slot_date, slot_time]);

        if (addNewSlot) {
            res.json(true);
        }
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);

    }


});

// **************************************************

// 3. Subject Addition Route


router.post("/subject", authorization, async (req, res) => {

    try {
        const { subject_name, category_id } = req.body;


        // Check if Subject already exists (if yes, then display error)

        // const checkSubject = await pool.query("SELECT * FROM tbl_subject WHERE subject_name=$1", [subject_name]);

        // if (checkSubject.rows.length !== 0) {
        //     res.json(false);
        //     return res.status(401).json("Subject already exists.");
        // }

        // Add a new subject to the database

        let addNewSubject = await pool.query("INSERT INTO tbl_subject (subject_name, category_id, subject_status) VALUES ($1, $2, 'active') RETURNING *",
            [subject_name, category_id]);



        if (addNewSubject) {
            res.json(true);
        }
    }


    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);

    }


});

// **************************************************

// 4. Session Addition Route


router.post("/session", authorization, async (req, res) => {

    try {
        const { slot, tutor_id, session_price, subject_id, category_id } = req.body;

        console.log(req.body);

        // Check if Session already exists (if yes, then display error)

        // const checkSession = await pool.query("SELECT * FROM tbl_session WHERE session_name=$1", [session_name]);

        // if (checkSession.rows.length !== 0) {
        //     res.json(false);
        //     return res.status(401).json("Session already exists.");
        // }

        // let getSlotID = await pool.query("SELECT slot_id FROM tbl_slot WHERE slot_date = $1 AND slot_time = $2",
        // [slot_date, slot_time]);

        // Add a new session to the database

        let addNewSessionMaster = await pool.query("INSERT INTO tbl_session_master (tutor_id, session_price, session_status) VALUES ($1, $2, 'active') RETURNING *",
            [tutor_id, session_price]);


        if (addNewSessionMaster) {

            const holdSessionMasterID = addNewSessionMaster.rows[0].session_master_id;

            let addNewSessionChild = await pool.query("INSERT INTO tbl_session_child (session_master_id,subject_id, category_id, slot_id) VALUES ($1, $2, $3, $4) RETURNING *",
                [holdSessionMasterID, subject_id, category_id, slot]);

            // console.log(getSlotID.rows[0].slot_id);

            res.json(true);
        }
    }


    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);

    }


});


// **************************************************

// 5. Card Addition Route

router.post("/card", authorization, async (req, res) => {

    try {
        const { card_number, card_holder, card_expiry } = req.body;
        console.log(req.body);

        let customer_id = '';

        customer_id = req.header("customer_id");

        // Add a new card to the database

        let addNewCard = await pool.query("INSERT INTO tbl_card (customer_id, card_number, card_holder, card_expiry, card_status) VALUES ($1, $2, $3,$4, 'active') RETURNING *",
            [customer_id, card_number, card_holder, card_expiry]);



        if (addNewCard) {
            res.json(true);
        }
    }


    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);

    }


});

// **************************************************

// 6. Booking Session Route

router.post("/booking", authorization, async (req, res) => {

    try {
        const { session_id, card_id} = req.body;

        console.log(req.body);

        let customer_id = '';

        customer_id = req.header("customer_id");

        console.log(customer_id);

        function formatDate(){
            var date=new Date();
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' +  date.getFullYear();
        }
        let currentDate = formatDate();

        // Add a new booking to the database

        let addNewBooking = await pool.query("INSERT INTO tbl_booking (customer_id, session_master_id, booking_date, booking_status) VALUES ($1, $2, $3, 'active') RETURNING *",
            [customer_id, session_id, currentDate]);


        if (addNewBooking) {

            const holdBookingID = addNewBooking.rows[0].booking_id;
            // const holdCardID = addNewBooking.rows[0].card_id;

            let addNewPaymentID = await pool.query("INSERT INTO tbl_payment (booking_id, card_id,  payment_date, payment_status) VALUES ($1, $2, $3, 'active') RETURNING *",
                [holdBookingID, card_id, currentDate]);

            res.json(true);


        }
    }


    catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);

    }


});


module.exports = router;

