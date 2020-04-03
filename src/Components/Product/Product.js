import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        <img src={this.props.url} alt='' />
        <div>
          {this.props.name}
          {this.props.price}
        </div>
      </div>
    );
  }
}
