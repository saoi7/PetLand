import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
//  Validation Component has a very simple job.
// Simply print an error message, if we get one.
// You can obviously make this Component as stylish as you required
// Here, we go for a basic print out of the error message.
class Validation extends Component {
  render() {
    // Obtain the formErrors from props
    // Remember the App has this.state.formErrors which is a JSON
    // object holding error messages for us about the form
    const formErrorsLocal = this.props.formErrors;
    return (
      <div className="container-fluid">
        <div className="alert alert-warning">
          <strong>{formErrorsLocal.name}</strong>
        </div>
        <div className="alert alert-warning">
          <strong>{formErrorsLocal.accNum}</strong>
        </div>
      </div>
    ); // end of return
  } // end of render()
} // end of Validation class
export default Validation;
