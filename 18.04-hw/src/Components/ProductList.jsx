// ProductList.jsx
import React from 'react'
import ProductItem from './Productitem';
import { useProducts } from '../Context/ProductContext';

export default function ProductList() {
  const { products } = useProducts();
  return (
    <>
      <h2>Products</h2>
      <div className='box'>
        {Array.isArray(products) && products.map((el) => (
          <ProductItem key={el.id} product={el}/>
        ))}
      </div>
    </>
  )
}