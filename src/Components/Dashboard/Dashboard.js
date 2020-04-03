import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  render() {
    const mappedInventory = this.props.inventory.map((elem) => {
      return (
        <div>
          <Product name={elem.name} price={elem.price} url={elem.imgurl} />
        </div>
      );
    });

    return (
      <div>
        <h1>Dashboard Component</h1>
        {mappedInventory}
      </div>
    );
  }
}
