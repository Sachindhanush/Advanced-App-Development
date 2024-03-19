import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        <div className="cart-item">
          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSvyTsiZ7qvdcjKdXeZFTde_EWVvHatQTFR3rb92Xo7igfPOb8KWmMObLdLLjLtZalc-W9OsYEOUQUtedZFoq3BCZ6UkPxHSUaybSrAqunpJ3J8M4xHzINzQ" alt="Product" />
          <div className="item-details">
            <h3>Wallet</h3>
            <div className="price-quantity-remove">
              <p>Price: 1000</p>
              <p>Quantity: 2</p>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>
        {/* Additional cart items */}
        <div className="cart-item">
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_XCAKEU0WZ96czCVdnj2LTZWoBAFUcCyhLUKQErumLeu70s3SMSSr0ihlCAfIwF7e02D-GqD-2HXZ39rs2HiqOYsTfaWzgekdT0DHRfiA&usqp=CAc" alt="Product" />
          <div className="item-details">
            <h3>Photo Frame</h3>
            <div className="price-quantity-remove">
              <p>Price: 1500</p>
              <p>Quantity: 1</p>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>
        <div className="cart-item">
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRm9Gq14qVVScjfX2m7RDGNmzx59_UEeeQUUryysLBMdFbmlt3eAxSElzYnn0lC5H5XccWnqd24ZqoWUfLcRNA306qYRYPvQQkK67mbnnUdKpp_8eRjZID9uA" alt="Product" />
          <div className="item-details">
            <h3>Necklace</h3>
            <div className="price-quantity-remove">
              <p>Price: 2000</p>
              <p>Quantity: 1</p>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Subtotal: 5500</p>
        <p>Shipping: 5500</p>
        <p>Total: 11000</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
