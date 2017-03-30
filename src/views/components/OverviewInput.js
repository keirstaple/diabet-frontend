import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { getMeasurementsThunk } from './../../state';

const validate = values => {
  const errors = {}
  if (!values.startDate) {
    errors.startDate = '*Required'
  }
  if (!values.startTime) {
    errors.startTime = '*Required'
  }
  if (!values.endDate) {
    errors.age = '*Required'
  }
  if (!values.endTime) {
    errors.age = '*Required'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  //write some if statement about if the dates or times are larger than the current date/time
  return warnings
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span style={{color: 'red'}}>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class OverviewInput extends Component {
  onSubmit() {
    // console.log('props', this.props.formValues)
    const { startDate, startTime, endDate, endTime } = this.props;
    const inputs = {
      startDate,
      startTime,
      endDate,
      endTime
    };
    console.log('inputs', inputs);
    this.props.getMeasurements(inputs)
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="startDate" type="date" component={renderField} label="Start Date" />
        <Field name="startTime" type="time" component={renderField} label="Start Time" />
        <Field name="endDate" type="date" component={renderField} label="End Date" />
        <Field name="endTime" type="time" component={renderField} label="End Time" />
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    )
  }
}

OverviewInput = reduxForm({
  form: 'overviewInputForm',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(OverviewInput)

const selector = formValueSelector('overviewInputForm')

OverviewInput = connect(
  state => {
    const { startDate, startTime, endDate, endTime } = selector(state, 'startDate', 'startTime', 'endDate', 'endTime')
    return {
      startDate,
      startTime,
      endDate,
      endTime
    }
  },
  dispatch => ({
    getMeasurements: (inputs) => dispatch(getMeasurementsThunk(inputs))
  })
)(OverviewInput)

export default OverviewInput;
// export default reduxForm({
//
//   },
//   (state) => ({
//     formValues: getFormValues('overviewInputForm')(state)
//   }),
//   dispatch => ({
//     getMeasurements: (inputs) => dispatch(getMeasurementsThunk(inputs))
//   })
// )(OverviewInput)
