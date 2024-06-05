import React, { useContext, useState } from "react";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "./Products";
import "./Cart.css";

import { ShopContext } from "./CartContext";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const handleCheckout = () => {
    checkout();
    setCheckoutMessage("Thank you for your purchase! Redirecting to Home page !!");
    setTimeout(() => {
      navigate("/");
    }, 5000); 
  };

  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue </button>
          <button onClick={handleCheckout}> Checkout </button>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}

      {checkoutMessage && (
        <div className="checkout-message">
          <p>{checkoutMessage}</p>
        </div>
      )}
    </div>
  );
};
