import React, { Component } from 'react';
import GroceryItem from './GroceryItem';
import './GroceryList.css';

export default class GroceryList extends Component {
  render() {
    const items = this.props.list.map(item =>
      <GroceryItem key={item.id}
        item={item}
        checked={this.props.checkIfPicked && item.picked}
        onToggle={this.props.handleItemChange.bind(this, item.id)}/>
    );
    return (
      <div className="GroceryList">
        <h1 className="GroceryList-title">{this.props.title}</h1>
        {!this.props.list.length &&
          <p className="GroceryList-emptyMessage">Nothing in your {this.props.title.toLowerCase()} yet.</p>
        }
        {items}
      </div>
    );
  }
}
