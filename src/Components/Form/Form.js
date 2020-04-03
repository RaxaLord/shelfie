import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      imgurl: '',
    };
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleImgUrl = this.handleImgUrl.bind(this);
    // to clear state values
    this.baseState = this.state;
    this.resetState = this.resetState.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleImgUrl(e) {
    this.setState({
      imgurl: e.target.value,
    });
  }

  resetState() {
    this.setState(this.baseState);
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Form Component</h1>
        <form>
          <label for='imgurl'>Image Url:</label>
          <input
            type='text'
            id='imgurl'
            name='imgurl'
            value={this.state.imgurl}
            onChange={this.handleImgUrl}
          />

          <label for='productname'>Product Name:</label>
          <input
            type='text'
            id='productname'
            name='productname'
            value={this.state.name}
            onChange={this.handleName}
          />

          <label for='price'>Price:</label>
          <input
            type='text'
            id='price'
            name='price'
            value={this.state.price}
            onChange={this.handlePrice}
          />

          <input type='button' value='Cancel' onClick={this.resetState} />
          <input type='submit' value='Add to Inventory' />
        </form>
      </div>
    );
  }
}
