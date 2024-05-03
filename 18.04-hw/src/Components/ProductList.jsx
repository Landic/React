import React from 'react'
import ProductItem from './Productitem';
import { useProducts } from '../Context/ProductContext';
import styles from './ProductList.module.css'


export default function ProductList() {
    const { products } = useProducts();
  return (
    <>
      <h2>Products</h2>
      <div className={styles['box']}>
        {Array.isArray(products) && products.map((el) => (
          <ProductItem key={el.id} product={el}/>
        ))}
      </div>
    </>
  )
}
