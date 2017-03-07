import React, {Component} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
require('es6-promise').polyfill();
require('isomorphic-fetch');

//figure out how to import JSON data
//set that data.results.value(s) to the LineChart data

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then((response) => {
        console.log(response);
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        console.log(response.json());
        return response.json();
      })
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div id="overview">
        <h1>Your Measurements</h1>
        <p>This page provides an overview of your measurements</p>
        <label>Time frame</label>
        <select defaultValue="Select the duration">
          <option value="" disabled>Select the duration</option>
          <option value="today">Only today</option>
          <option value="last-week">Last week</option>
          <option value="last-month">Last month</option>
        </select>

        <LineChart width={600} height={300} data={this.state.data.results} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }

}

export default Overview;
