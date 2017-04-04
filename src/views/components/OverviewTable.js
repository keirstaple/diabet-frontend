import React, {Component} from 'react';
import { connect } from 'react-redux';

import { measurementsData } from './../../state';

class OverviewTable extends Component {

  renderTable() {
    const data = this.props.measurements;
    console.log('data', data)
    if(Object.prototype.toString.call(data) === '[object Array]' && data.length > 0) {
      return(
        <div>
            <table>
              <thead>
                <tr>
                  <th>Measurement</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                  {
                    data.map((item, idx) => {
                      let date = new Date(item.record_datetime).toString().replace(' GMT-0800 (PST)', '');
                      return(
                        <tr key={idx}>
                          <td>{item.value}</td>
                          <td>{date}</td>
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        { this.renderTable() }
      </div>
    );
  }

}

export default connect(
  (state) => ({
    measurements: measurementsData(state)
  }),
  null
)(OverviewTable);
