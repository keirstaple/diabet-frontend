import React, { Component } from 'react';
import NavBar from './NavBar';
import NewMeasurement from './NewMeasurement';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NewMeasurement />
        {this.props.children}
      </div>
    );
  }
}

export default App;
