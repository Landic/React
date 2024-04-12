import React from 'react'
import classes from './List.module.css'

export default function List_product(props) {
    const { items } = props;

    return (
      <div>
        <h2>Список товаров:</h2>
          {items.map((item, index) => (
            <div className={classes.box}>
                <p><span className={classes.name}>Name:</span> {item.name}</p>
                <p><span className={classes.name}>Price:</span> ${item.price}</p>
            </div>
          ))}
      </div>
    );
}
