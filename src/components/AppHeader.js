import React, { Component } from 'react';
import './AppHeader.css';

export default class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        <a href="/" className="AppHeader-brand">Basket</a>
      </div>
    );
  }
}
