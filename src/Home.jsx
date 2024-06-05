import React from 'react'
import { PRODUCTS } from './Products'
import { Product } from './Product';
import './Home.css';

export const Home = () => {
  return (
    <div className='main'>
        <div className="products">
            {PRODUCTS.map((product) => <Product data={product}/>)}
        </div>
    </div>
  )
}