// Data.jsx
import React from 'react';
import "./Data.css";

const Data = () => {
  return (
    <div className="data">
      <table>
        <thead>
          <tr>
            <th>Recipient Information</th>
            <th>Gift Details</th>
            <th>Delivery Method</th>
            <th>Order Confirmation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Name: Sachin</p>
              <p>Address: 123 Devendra St,Dharapuram</p>
              <p>Contact: 9835678900</p>
            </td>
            <td>
              <p>Item: Custom Mug</p>
              <p>Quantity: 2</p>
              <p>Color: Blue</p>
            </td>
            <td>
              <p>Method: Standard Shipping</p>
              <p>Estimated Delivery: March 30, 2024</p>
            </td>
            <td>
              <p>Order Number: #123456789</p>
              <p>Total Cost: 500</p>
              <p>Confirmation Email Pending</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name: Sneha</p>
              <p>Address: 789 Bharathi St, Paramakudi</p>
              <p>Contact: 9871234567</p>
            </td>
            <td>
              <p>Item: Handbag</p>
              <p>Quantity: 1</p>
              <p>Color: Red</p>
            </td>
            <td>
              <p>Method: Priority Shipping</p>
              <p>Estimated Delivery: March 18, 2024</p>
            </td>
            <td>
              <p>Order Number: #789123456</p>
              <p>Total Cost: 1200</p>
              <p>Confirmation Email Sent</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name: Nandhitha</p>
              <p>Address: 234 salem St,Salem</p>
              <p>Contact: 9456789012</p>
            </td>
            <td>
              <p>Item: Watch</p>
              <p>Quantity: 1</p>
              <p>Color: Silver</p>
            </td>
            <td>
              <p>Method: Express Shipping</p>
              <p>Estimated Delivery: March 22, 2024</p>
            </td>
            <td>
              <p>Order Number: #345678901</p>
              <p>Total Cost: 250</p>
              <p>Confirmation Email Sent</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Name: Ranga</p>
              <p>Address: 678 Madurai, Village</p>
              <p>Contact: 9678901234</p>
            </td>
            <td>
              <p>Item: Customized Wallet</p>
              <p>Quantity:1</p>
              <p>Color: Brown</p>
            </td>
            <td>
              <p>Method: Priority Shipping</p>
              <p>Estimated Delivery: March 17, 2024</p>
            </td>
            <td>
              <p>Order Number: #567890123</p>
              <p>Total Cost: 600</p>
              <p>Confirmation Email Sent</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Data;
