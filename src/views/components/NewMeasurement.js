import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, formValueSelector, reset } from 'redux-form';
import { connect } from 'react-redux';
import { postMeasurementThunk, postResponseStatus } from './../../state';
// import { Link } from 'react-router';

const validate = values => {
  const errors = {}
  if (!values.value) {
    errors.value = '*Required'
  }
  if (!values.category) {
    errors.category = '*Required'
  }
  if (!values.type) {
    errors.type = '*Required'
  }
  if (!values.record_datetime) {
    errors.record_datetime = '*Required'
  }
  if (!values.notes) {
    errors.notes = '*Required'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  //write some if statement about if the dates or times are larger than the current date/time
  // if(new Date(values.startDate) > new Date(values.endDate)) {
  //   warnings.startDate = '*This date is after the end date';
  //   warnings.endDate = '*This date is before the start date';
  // }
  return warnings
}

const renderField = ({ element, input, label, type, children, meta: { touched, error, warning } }) => {
  if(element === 'input') {
    return(
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && ((error && <span style={{color: 'red'}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  } else if(element === 'select') {
    return(
      <div>
        <label>{label}</label>
        <div>
          <select {...input} placeholder={label} type={type} >
            {children}
          </select>
          {touched && ((error && <span style={{color: 'red'}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  } else {
    return;
  }
}

class NewMeasurement extends Component {
  onSubmit() {
    const { value, category, type, record_datetime, notes } = this.props;
    const inputs = {
      value: parseInt(value),
      category: parseInt(category),
      type: parseInt(type),
      record_datetime: record_datetime + ':00Z',
      notes,
      user: 2
    };

    this.props.postMeasurement(inputs).then(() => {
      this.props.resetForm()
    })
  }

  responseApproved () {
    if(this.props.postResponse === undefined) {
      return
    } else if(this.props.postResponse === 201) {
      return (
        <span style={{ background: '#5CB85C', height: '20px', padding: '5px', color: 'white', margin: '25px 0 0 0'}}>Created measurement successfully!</span>
      )
    } else {
      return(
        <span style={{ background: '#D90900', height: '20px', padding: '5px', color: 'white', margin: '25px 0 0 0'}}>Uh oh! Something went wrong, please try again.</span>
      )
    }
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field element="input" name="value" type="number" component={renderField} label="Glucose Value" />
          <Field element="select" name="category" component={renderField} label="Category" >
            <option></option>
            <option value="1">Breakfast</option>
            <option value="2">Lunch</option>
            <option value="3">Dinner</option>
            <option value="4">Snack</option>
            <option value="5">Bedtime</option>
            <option value="6">Before Exercise</option>
            <option value="7">After Exercise</option>
            <option value="8">No Category</option>
          </Field>
          <Field element="select" name="type" component={renderField} label="Type of Reading" >
            <option></option>
            <option value="0">Sensor Reading</option>
            <option value="1">Meter Reading</option>
            <option value="2">Hourly Average</option>
            <option value="3">Daily Average</option>
          </Field>
          <Field element="input" name="record_datetime" type="datetime-local" component={renderField} label="Date and Time of the Reading" />
          <Field element="input" name="notes" type="textarea" component={renderField} label="Notes" />

          <div>
            <button type="submit" disabled={submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>

        {this.responseApproved()}
      </div>
    )
  }
}

NewMeasurement = reduxForm({
  form: 'newMeasurementForm',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(NewMeasurement)

const selector = formValueSelector('newMeasurementForm')

NewMeasurement = connect(
  state => {
    const { value, category, type, record_datetime, notes } = selector(state, 'value', 'category', 'type', 'record_datetime', 'notes')
    const postResponse = postResponseStatus(state)
    return {
      value,
      category,
      type,
      record_datetime,
      notes,
      postResponse
    }
  },
  dispatch => ({
    resetForm: () => dispatch(reset('newMeasurementForm')),
    postMeasurement: (inputs) => dispatch(postMeasurementThunk(inputs))
  })
)(NewMeasurement)

export default NewMeasurement;
