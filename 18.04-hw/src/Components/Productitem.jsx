import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const { id, title, price } = product;
  return (
    <Link className="Link" to={`/product/${id}`}>
      <div className='container'>
        <h3>{title}</h3>
        <p>{price}$</p>
      </div>
    </Link>
  );
}