import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

import { NavBar, OverviewInput, OverviewChart, OverviewTable } from '../';
import { getMeasurementsPastDayThunk, measurementsPastDayResults } from './../../state';

class Overview extends Component {
  //context doesn't have to be deliberately passed from parent to child like props
  //access data throughout application without explicitly passing it
  //avoid it, except with React Router
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //grabs posts when component loads
    this.props.getMeasurementsPastDay();
  }

  renderPastDay() {
    let data;
    if(this.props.measurementsPastDay){
      data = this.props.measurementsPastDay.reverse();
    };
    console.log('data', data)
    if(Object.prototype.toString.call(data) === '[object Array]' && data.length > 0) {
      return(
        <div>
          <h3>Readings for past 24 hours</h3>
          <LineChart width={500} height={150} data={data}
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
    }
  }

  render() {
    return (
      <div id="overview">
        <NavBar />
        <ul className="list-group">
          { this.renderPastDay() }
        </ul>
        <OverviewInput />
        <OverviewChart />
        <OverviewTable />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    measurementsPastDay: measurementsPastDayResults(state)
  }),
  dispatch => ({
    getMeasurementsPastDay: () => dispatch(getMeasurementsPastDayThunk())
  })
)(Overview);
