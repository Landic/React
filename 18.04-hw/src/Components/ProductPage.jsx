import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import styles from './ProductPage.module.css'

export default function ProductPage() {
    const { id } = useParams();
    const { products } = useProducts();
    const product = products.find((el) => el.id === parseInt(id, 10));
    if (!product) {
      return <div>Продукт не найден</div>;
    }
    const { title, price } = product;
  
    return (
      <div className={styles['box']}>
        <p>Name: {title}</p>
        <p>Price: {price}$</p>
      </div>
    );
}