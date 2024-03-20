import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Wallet', price: 1000, quantity: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtJD6ehMhUSUoubyIKeEfjvmReX2R7SJfzw&usqp=CAU' },
    { id: 2, name: 'Photo Frame', price: 1500, quantity: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbm6JXo7jn9rPk-e2ARaLp9oLTmS-e0q5Pg&usqp=CAU' },
    { id: 3, name: 'Necklace', price: 2000, quantity: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHqBTbZmDXQbwjIsrFNx1sJvfFxSuWxLXIA&usqp=CAU' }
  ]);

  const handleIncrement = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt="Product" style={{marginTop:"10%",marginLeft:"3%"}} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Price:</td>
                    <td>{item.price}</td>
                  </tr>
                  <tr>
                    <td>Quantity:</td>
                    <td>
                      <button onClick={() => handleDecrement(item.id)}>-</button>
                      {item.quantity}
                      <button onClick={() => handleIncrement(item.id)}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Subtotal:</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                </tbody>
              </table>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Subtotal: {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
        <p>Shipping: 5500</p>
        <p>Total: {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + 5500}</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
