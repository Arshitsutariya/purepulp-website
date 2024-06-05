import React, { useContext } from 'react';
import './Product.css';
import { ShopContext } from './CartContext';

export const Product = (props) => {
  const { id, productName, description, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>{description}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export const ProductList = ({ products }) => (
  <div className="product-container">
    {products.map(product => (
      <Product key={product.id} data={product} />
    ))}
  </div>
);
