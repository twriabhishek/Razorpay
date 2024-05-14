import React from "react";
import axios from "axios";

const Cards = () => {
  const handleCheckout = async()=>{
    const {} = await axios.post("http://localhost:8000", {
      
    })
  }
  return (
    <div className="container">
      <div className="text-center my-3">
        <h1>Item List</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." height={242} width={323}/>
            <div class="card-body">
              <h5 class="card-title">Iphone 15</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                Amount: 52000 INR
              </p>
              <button className="btn btn-primary" onClick={handleCheckout}>Proceed to payment</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." height={242} width={323}/>
            <div class="card-body">
              <h5 class="card-title">Ipad</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>Amount: 93000 INR</p>
              <button className="btn btn-primary" onClick={handleCheckout}>Proceed to payment</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Watch</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <p>Amount: 90000 INR</p>
              <button className="btn btn-primary" onClick={handleCheckout}>Proceed to payment</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Shoes</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>Amount: 98000 INR</p>
              <button className="btn btn-primary" onClick={handleCheckout}>Proceed to payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;