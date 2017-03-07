import React, {Component} from 'react';

class NewMeasurement extends Component {
  constructor() {
    super();
    this.state = {
      measurement: null,
      time: null,
      date: ''
    }
  }

  render() {
    return (
      <div id="new-measurement">
        <h1>Register a New Measurement</h1>
        <p>Enter a new measurement. It will be stored on our insecure cloud server. You can retreive it from anywhere in the world.</p>
        <label>Measurement</label>
        <input
          placeholder="0 mmol/l"
        />
        <label>Time</label>
        <input
          placeholder="00:00"
        />
        <label>Date</label>
        <input
          placeholder="YYYY/MM/DD"
        />
      <button id="new-measurement-button">Submit</button>
      </div>
    );
  }

}

export default NewMeasurement;
