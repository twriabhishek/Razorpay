const express = require("express");
const router = express.Router();
const { handleCheckout,handlePaymentVerification } = require("../controllers/payment.controller.js");

router.post("/checkout", handleCheckout);
router.post("/paymentverification", handlePaymentVerification);
router.get("/getkey", (req, res)=>{
    res.status(200).json({key:process.env.RAZORPAY_API_KEY});
});


module.exports = router;