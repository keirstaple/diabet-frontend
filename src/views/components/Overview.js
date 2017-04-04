import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { NavBar, OverviewInput, OverviewChart } from '../';
import { getMeasurementsThunk, measurementsResults } from './../../state';

class Overview extends Component {
  //context doesn't have to be deliberately passed from parent to child like props
  //access data throughout application without explicitly passing it
  //avoid it, except with React Router
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //grabs posts when component loads
    this.props.getMeasurements();
  }

  renderMeasurements() {
    console.log('props: ', this.props);
    if(this.props.measurements) {
      return this.props.measurements.map((datum, idx) => {
        return (
          <li className="list-group-item" key={idx}>{datum.notes}</li>
        );
      });
    }
  }

  render() {
    return (
      <div id="overview">
        <NavBar />
        <ul className="list-group">
          { this.renderMeasurements() }
        </ul>
        <OverviewInput />
        <OverviewChart />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    measurements: measurementsResults(state)
  }),
  dispatch => ({
    getMeasurements: () => dispatch(getMeasurementsThunk())
  })
)(Overview);
