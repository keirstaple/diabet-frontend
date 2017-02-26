import React, { Component } from 'react';

import NewMeasurement from './NewMeasurement';
import Overview from './Overview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewMeasurement />
        <Overview />
      </div>
    );
  }
}

export default App;
