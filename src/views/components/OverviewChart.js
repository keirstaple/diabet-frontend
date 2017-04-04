import React, {Component} from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import { connect } from 'react-redux';

import { measurementsData } from './../../state';

class OverviewChart extends Component {

  renderChart() {
    const data = this.props.measurements;
    console.log('data', data)
    if(Object.prototype.toString.call(data) === '[object Array]' && data.length > 0) {
      return(
        <div>
          <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="record_datetime" />
            <YAxis dataKey="value" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      )
    } else if(Object.prototype.toString.call(data) === '[object Array]' && data.length === 0) {
      return(
        <h5>Sorry, our records don't show any data for this range. Please select a new start and/or end point.</h5>
      )
    } else {
      return(
        <h5>Enter range to display data</h5>
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderChart() }
      </div>
    );
  }

}

export default connect(
  (state) => ({
    measurements: measurementsData(state)
  }),
  null
)(OverviewChart);
