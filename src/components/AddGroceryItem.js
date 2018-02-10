import React, { Component } from 'react';
import './AddGroceryItem.css';

const initialState = { name: '', qty: 1 };

export default class AddGroceryItem extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    // bind `this` for handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="AddGroceryItem">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" className="AddGroceryItem-nameInput" value={this.state.name} onChange={this.handleChange}/>
          <input type="number" name="qty" className="AddGroceryItem-qtyInput" value={this.state.qty} onChange={this.handleChange}/>
          <input type="submit" value="Add" disabled={!this.state.name.trim().length}/>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.name, this.state.qty);
    this.reset();
  }

  reset() {
    this.setState(initialState);
  }
}
