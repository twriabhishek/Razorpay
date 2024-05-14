import React from 'react';
import axios from 'axios';

const ProductCard = ({ amount, imageUrl }) => {

  const handleCheckout = async () => {
    const {data:{key}} = await axios.get("http://localhost:8000/api/v1/getkey")
    const {data:{order}} = await axios.post("http://localhost:8000/api/v1/checkout", {
        amount
    })
    const options = {
        key: key, 
        amount: order.amount, 
        currency: "INR",
        name: "Abhishek Tiwari",
        description: "Test Transaction",
        image: "https://drive.google.com/file/d/1RdnhE0PzihLqnz0NjWsCcjx9E_VyaOkK/view",
        order_id: order.id,
        callback_url: "http://localhost:8000/api/v1/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3d3f43"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="Product" height={242} width={323} />
      <div className="card-body">
        <h5 className="card-title">Product Name</h5>
        <p className="card-text">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <p className="card-text">Amount: {amount} INR</p>
        <button className="btn btn-primary" onClick={handleCheckout}>
          Proceed to payment
        </button>
      </div>
    </div>
  );
};

export default ProductCard;