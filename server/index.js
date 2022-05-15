const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json()); // Request data from client side
app.use(cors());

// Routes

// Register and Login Routes

app.use("/auth", require("./routes/jwtAuth"));

// Dashboard Route

app.use("/dashboard", require("./routes/dashboard")); 

// Addition Route

app.use("/add", require("./routes/add")); 

// Updatation Route

// app.use("/update", require("./routes/update")); 

// Fetch Route

app.use("/fetch", require("./routes/fetch")); 

// Deactivation Route

app.use("/deactivate", require("./routes/deactivate")); 


app.listen(5000, () => {
    console.log("Server is running on Port 5000");
});




