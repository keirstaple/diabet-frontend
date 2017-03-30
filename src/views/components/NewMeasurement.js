import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getMeasurementsThunk, measurementsData, measurementsResults } from './../../state';
import { Link } from 'react-router';

class NewMeasurement extends Component {
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
      <div id="new-measurement">
        <ul className="list-group">
          { this.renderMeasurements() }
        </ul>
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
)(NewMeasurement);

// // same as const handleSubmit = this.props.handleSubmit;
// // same as const title = this.props.fields.title;
// // const { fields: { title, categories, content }, handleSubmit } = this.props;
//
// onSubmit(props) {
//   this.props.createPost(props)
//     .then(() => {
//       // blog post has been created, navigate the user to the index
//       // We navigate by calling this.context.router.push with the
//       // new path to navigate to.
//       this.context.router.push('/');
//     });
// }
//
// function validate(values) {
//   const errors = {};
//
//   if (!values.title) {
//     errors.title = 'Enter a username';
//   }
//   if (!values.categories) {
//     errors.categories = 'Enter categories';
//   }
//   if(!values.content) {
//     errors.content = 'Enter some content';
//   }
//
//   return errors;
// }
//
// // connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// // reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// export default reduxForm({
//   form: 'PostsNewForm',
//   fields: ['title', 'categories', 'content'],
//   validate
// }, null, { createPost })(NewMeasurement);
//
//
// <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//     {/*Handing responsibility of form submission over to redux-form with this handler handleSubmit, which will call our action creator*/}
//   <h3>Create A New Post</h3>
//
//   {/*If div has been touched and is invalid, add class-name has danger. Else, don't add classname*/}
//   <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
//     <label>Title</label>
//     {/*{...title} would be same as onChange={title.onChange} for all the methods provided by redux-form*/}
//     <input type="text" className="form-control" {...title} />
//     <div className="text-help">
//       {title.touched ? title.error : ''}
//     </div>
//   </div>
//
//   <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
//     <label>Categories</label>
//     <input type="text" className="form-control" {...categories} />
//     <div className="text-help">
//       {categories.touched ? categories.error : ''}
//     </div>
//   </div>
//
//   <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
//     <label>Content</label>
//     <textarea className="form-control" {...content} />
//     <div className="text-help">
//       {content.touched ? content.error : ''}
//     </div>
//   </div>
//
//   <button type="submit" className="btn btn-primary">Submit</button>
//   <Link to="/" className="btn btn-danger">Cancel</Link>
// </form>
