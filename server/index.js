require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require('./dbConnection/connection.js');
const paymentRoute = require("./routes/payment.route.js");

const app = express();
const PORT = process.env.PORT || 8023;


// Make Connection
connection();


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//Routes
app.use("/api/v1", paymentRoute);

//Listening Part
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
