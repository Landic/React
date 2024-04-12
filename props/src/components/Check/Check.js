import React, { Component } from 'react'
import List_product from '../List/List-product';
import classes from './check-style.module.css'

export default class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [
            { name: 'Хлеб', price: 1.5 },
            { name: 'Молоко', price: 2.0 },
            { name: 'Яблоки', price: 3.0 }
          ]
        };
      }
    
      render() {
        return (
          <div className={classes.box}>
            <List_product items={this.state.items} />
          </div>
        );
      }
}
