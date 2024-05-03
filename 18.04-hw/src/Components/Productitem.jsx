import React from "react";
import { Link } from "react-router-dom";
import styles from './ProductList.module.css'

export default function ProductItem(props) {
  const { id, title, price } = props.product;
  return (
    <Link className="Link" to={`/product/${id}`}>
      <div className={styles['container']}>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </Link>
  );
}