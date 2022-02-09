const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization ,async (req, res) =>{

    try {

        //req.user has the payload
        // res.json(req.user);

        const user = await pool.query("SELECT user_name FROM tbl_login WHERE user_id = $1", [req.user]);

        res.json(user.rows[0]);
       
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
})

module.exports = router;