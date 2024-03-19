import React from 'react'
import './Pay.css';

function Payment() {
  return (
    <div><>
    <title> Create Mobile Payment Page Design </title>
    <link rel="stylesheet" href="style.css" />
    <div className="app-container">
      <div className="top-box">
        <p>
          <span className="left-icon">↖</span>CHECKOUT
          <span className="right-icon">···</span>
        </p>
      </div>
      <div className="middle-box">
        <h1>
          <span></span>
        </h1>
        <p>Payment</p>
      </div>
      <div className="bottom-box">
        <button type="button" className="payment-option-btn">
          Pay with Paypal
        </button>
        <button type="button" className="payment-option-btn">
          Pay with Netbanking
        </button>
      </div>
      <div className="card-details">
        <p>Pay using credit or debit card</p>
        <div className="card-num-field-group">
          <label>Card Number</label>
          <br />
          <input
            type="text"
            className="card-num-field"
            placeholder="xxxx-xxxx-xxxx-xxxx"
          />
        </div>
        <div className="date-field-group">
          <label>Expiry Date</label>
          <br />
          <input type="text" className="date-field" placeholder="mm" />
          <input type="text" className="date-field" placeholder="yyyy" />
        </div>
        <div className="cvc-field-group">
          <label>CVC</label>
          <br />
          <input type="password" className="cvc-field" placeholder="xxx" />
        </div>
        <div className="name-field-group">
          <label>Card Holder Name</label>
          <br />
          <input type="text" className="name-field" placeholder="Full Name" />
        </div>
        <button type="button" className="pay-btn">
          Pay Now
        </button>
      </div>
    </div>
  </>
  </div>
  )
}

export default Payment