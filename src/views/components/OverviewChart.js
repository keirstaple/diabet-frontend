import React, {Component} from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import { connect } from 'react-redux';

import { measurementsData } from './../../state';

class OverviewChart extends Component {

  renderChart() {
    const data = this.props.measurements;
    console.log('data', data)
    if(Object.prototype.toString.call(data) === '[object Array]' ) {
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
