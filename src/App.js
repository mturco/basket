import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import GroceryList from './components/GroceryList';
import GroceryItemModel from './models/GroceryItemModel';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        new GroceryItemModel('Eggs', 3),
        new GroceryItemModel('Bacon', 1),
      ],
    };

    // bind `this` for handlers
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <div className="App-container">
          <GroceryList
            title="Shopping list"
            list={this.state.items.filter(item => !item.picked)}
            checkIfPicked={false}
            handleItemChange={this.handleItemChange.bind(this, true)}/>
          <GroceryList
            title="In your basket"
            list={this.state.items.filter(item => item.picked)}
            checkIfPicked={true}
            handleItemChange={this.handleItemChange.bind(this, false)}/>
        </div>
      </div>
    );
  }

  handleItemChange(pick, id) {
    const items = this.state.items.slice();
    const item = items.find(item => item.id === id);
    if (item) {
      item.picked = pick;
      this.setState({ items });
    }
  }
}
