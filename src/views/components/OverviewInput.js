import React from 'react'
import { Field, reduxForm } from 'redux-form'

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

const OverviewInput = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
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

export default reduxForm({
  form: 'overviewInputForm',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(OverviewInput)
