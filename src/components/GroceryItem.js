import React, { Component } from 'react';
import './GroceryItem.css';

export default class GroceryItem extends Component {
  render() {
    return (
      <div className="GroceryItem">
        <label>
          <input type="checkbox" className="GroceryItem-checkbox" checked={this.props.checked} onChange={this.props.onToggle}/>
          <span className="GroceryItem-name">{this.props.item.name}</span>
          <span className="GroceryItem-qty">({this.props.item.qty})</span>
        </label>
      </div>
    );
  }
}
