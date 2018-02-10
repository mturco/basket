import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import AddGroceryItem from './components/AddGroceryItem';
import GroceryList from './components/GroceryList';
import GroceryItemModel from './models/GroceryItemModel';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    // bind `this` for handlers
    this.addItem = this.addItem.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.clearBasket = this.clearBasket.bind(this);
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <div className="App-container">
          <AddGroceryItem handleSubmit={this.addItem}/>

          <GroceryList
            title="Shopping list"
            list={this.state.items.filter(item => !item.picked)}
            checkIfPicked={false}
            handleItemChange={this.handleItemChange.bind(this, true)}/>
          
          <GroceryList
            title="Basket"
            list={this.state.items.filter(item => item.picked)}
            checkIfPicked={true}
            handleItemChange={this.handleItemChange.bind(this, false)}/>
          
          {this.state.items.filter(item => item.picked).length > 0 &&
            <button className="Button" onClick={this.clearBasket}>Clear basket</button>
          }
        </div>
      </div>
    );
  }

  addItem(name, qty) {
    this.setState({
      items: [...this.state.items, new GroceryItemModel(name, qty)],
    });
  }

  handleItemChange(pick, id) {
    const items = this.state.items.slice();
    const item = items.find(item => item.id === id);
    if (item) {
      item.picked = pick;
      this.setState({ items });
    }
  }

  clearBasket() {
    const items = this.state.items.slice();
    this.setState({ items: items.filter(item => !item.picked) });
  }
}
