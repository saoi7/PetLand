import React, { Component } from "react";
import Validation from "./Validation";
import "bootstrap/dist/css/bootstrap.css";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Helmet from "react-helmet";
import CheckedOut from "./Checkedout";

class Validate extends Component {
  constructor(props) {
    super(props);

    // notice that formErrors is an object with
    // two properties.
    this.state = {
      choice: "Nothing",
      name: "",
      accNum: "",
      address: "",
      eircode: "",
      cardName: "",
      cardNumber: "",
      expieryDate: "",

      formErrors: {
        name: "",
        accNum: "",
        address: "",
        eircode: "",
        cardName: "",
        cardNumber: "",
        expieryDate: ""
      },

      accNumValid: false,
      nameValid: false,
      addressValid: false,
      eircodeValid: false,
      cardNameValid: false,
      cardNumberValid: false,
      expieryDateValid: false,

      formValid: false
    };

    this.handleChangeNameBox = this.handleChangeNameBox.bind(this);
    this.handleChangeAccBox = this.handleChangeAccBox.bind(this);
    this.submitButtonClick = this.submitButtonClick.bind(this);
    this.handleChangeAddressBox = this.handleChangeAddressBox.bind(this);
    this.handleChangeEircodeBox = this.handleChangeEircodeBox.bind(this);
    this.handleChangeCardNameBox = this.handleChangeCardNameBox.bind(this);
    this.handleChangeCardNumberBox = this.handleChangeCardNumberBox.bind(this);
    this.handleChangeExpieryDateBox = this.handleChangeExpieryDateBox.bind(
      this
    );
  }
  // name box handler method.
  // We pass the event - and this method will call validation
  // on the data typed in this box.
  showCheckOut() {
    this.setState({ choice: "Done" });
    // this.setState({ Basket: [] });
  }

  handleChangeNameBox(event) {
    this.setState({ name: event.target.value });
    this.validateName(event.target.value);
  }
  //Handle Address Change Box
  handleChangeAddressBox(event) {
    this.setState({ address: event.target.value });
    this.validateAddress(event.target.value);
  } //End Address Function

  // Changes the state of The adress
  validateAddress(address) {
    let localFormErrors = this.state.formErrors;

    if (address.length < 6) {
      localFormErrors.name = "The Address is too short";
    } // we have a simple valid name.
    else {
      localFormErrors.name = "";
      this.setState({ addressValid: true });
    }
    // set the state variable for form errors (name updated)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form.
    this.validateForm();
  } // End of address function

  handleChangeAccBox(event) {
    this.setState({ accNum: event.target.value });
    this.validateAccNum(event.target.value);
  }

  // Validation of the name box.
  // This can be as simple or complex as our application require
  // We will just check if the name is 6 or more chars long
  validateName(name) {
    let localFormErrors = this.state.formErrors;

    if (name.length < 6) {
      localFormErrors.name = "The name is too short";
    } // we have a simple valid name.
    else {
      localFormErrors.name = "";
      this.setState({ nameValid: true });
    }
    // set the state variable for form errors (name updated)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form.
    this.validateForm();
  }
  // Validation of the account box.
  // This can be as simple or complex as our application require
  // We will just check if the number is 6 or more chars long
  // and of course that it is an integer number. No other chars

  validateAccNum(accNum) {
    let localFormErrors = this.state.formErrors;
    this.setState({ accNumValid: false });
    if (accNum.length < 2) {
      localFormErrors.accNum = "The CVV number is too short";
    } else if (isNaN(accNum)) {
      localFormErrors.accNum = "The CVV number is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(accNum)) {
      // Here we use a regular expression
      localFormErrors.accNum =
        "The CVV number is not actually a number (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.accNum = "";
      this.setState({ accNumValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  }

  //Handles the Eircode Change
  handleChangeEircodeBox(event) {
    this.setState({ eircode: event.target.value });
    this.validateEircode(event.target.value);
  }

  // Validate Eircode Function
  validateEircode(eircode) {
    let localFormErrors = this.state.formErrors;
    if (eircode.length < 6) {
      localFormErrors.name = "The Eircode is too short";
    } // we have a simple valid name.
    else {
      localFormErrors.name = "";
      this.setState({ eircodeValid: true });
    }
    this.setState({ formErrors: localFormErrors });
    this.validateForm();
  } //End of Validate Eircode Function

  //Handles the CardName Change
  handleChangeCardNameBox(event) {
    this.setState({ cardName: event.target.value });
    this.validateCardName(event.target.value);
  }

  // Validate CardName Function
  validateCardName(cardName) {
    let localFormErrors = this.state.formErrors;
    if (cardName.length < 6) {
      localFormErrors.name = "The Card Name is too short";
    } // we have a simple valid name.
    else {
      localFormErrors.name = "";
      this.setState({ cardNameValid: true });
    }
    this.setState({ formErrors: localFormErrors });
    this.validateForm();
  } //End of Validate Eircode Function

  //Handles the change in the Card Number Validation box
  handleChangeCardNumberBox(event) {
    this.setState({ cardNumber: event.target.value });
    this.validateCardNumber(event.target.value);
  } //Ends Card Number Box

  //CardNumber Validation Function
  validateCardNumber(cardNumber) {
    let localFormErrors = this.state.formErrors;
    this.setState({ cardNumberValid: false });
    if (cardNumber.length < 12) {
      localFormErrors.accNum = "The Card number is too short";
    } else if (isNaN(cardNumber)) {
      localFormErrors.accNum = "The Card number is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(cardNumber)) {
      // Here we use a regular expression
      localFormErrors.accNum =
        "The Card number is not actually a number (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.cardNumber = "";
      this.setState({ cardNumberValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  } /// End of Card Validation Box

  handleChangeExpieryDateBox(event) {
    this.setState({ expieryDate: event.target.value });
    this.validateExpieryDate(event.target.value);
  }

  validateExpieryDate(expieryDate) {
    let localFormErrors = this.state.formErrors;
    this.setState({ expieryDateValid: false });
    if (expieryDate.length < 7) {
      localFormErrors.accNum = "The Expiery Date is too short";
    } else if (isNaN(expieryDate)) {
      localFormErrors.expieryDate = "The Expiery Date is not actually a number";
      // For now we'll just be satistified with user input of a
      // large integer.
    } else if (!/^\d+$/.test(expieryDate)) {
      // Here we use a regular expression
      localFormErrors.accNum =
        "The Expiery Date is not actually a number (reg exp)";
    } else {
      // the account name is valid. So there is no error
      localFormErrors.expieryDate = "";
      this.setState({ expieryDateValid: true });
    }
    // update the state variable formErrors (accNum is valid no error)
    this.setState({ formErrors: localFormErrors });

    // validate the whole form
    this.validateForm();
  } /// End of Card Validation Box

  // This validation method just checks if both the name
  // and the account number is correct.
  validateForm() {
    this.setState({
      formValid:
        this.state.accNumValid &&
        this.state.nameValid &&
        this.state.addressValid &&
        this.state.eircodeValid &&
        this.state.cardNameValid &&
        this.state.cardNumberValid
    });
  }

  submitButtonClick() {
    // Do something with the data you have captured.
    console.log(this.state.name);
    console.log(this.state.name);
    console.log(this.state.accNum);
    console.log(this.state.addressValid);
    this.setState({ Basket: [] });
    this.setState({ choice: "Done" });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="alert alert-primary">
          <h2>Checkout</h2>
          <form>
            <div className="form-group">
              <label>
                {" "}
                {/* this renders the name change */}
                Full Name:
                <input
                  type="text"
                  value={this.state.name}
                  name="getName"
                  onChange={this.handleChangeNameBox}
                />
              </label>{" "}
              {/* end of render of name */}
              <label>
                {" "}
                {/* this renders the Address change */}
                Address:
                <input
                  type="text"
                  value={this.state.address}
                  name="getAddress"
                  onChange={this.handleChangeAddressBox}
                />
              </label>{" "}
              {/* End of Render for Address Change */}
              <label>
                {" "}
                {/* this renders the Eircode change */}
                Eircode:
                <input
                  type="text"
                  value={this.state.eircode}
                  name="getAddress"
                  onChange={this.handleChangeEircodeBox}
                />
              </label>{" "}
              {/* End of Render for Eircode Change */}
              <label>
                {" "}
                {/* this renders the CardName change */}
                Card Name:
                <input
                  type="text"
                  value={this.state.cardName}
                  name="getAddress"
                  onChange={this.handleChangeCardNameBox}
                />
              </label>{" "}
              {/* End of Render for CardName Change */}
              <label>
                {" "}
                {/* this renders the CardName change */}
                Card Number:
                <input
                  type="text"
                  value={this.state.cardNumber}
                  name="getAddress"
                  onChange={this.handleChangeCardNumberBox}
                />
              </label>{" "}
              {/* End of Render for CardName Change */}
              <label>
                Expiery Date (MMYYYYY)
                <input
                  type="text"
                  value={this.state.expieryDate}
                  name="getNum"
                  onChange={this.handleChangeExpieryDateBox}
                />
              </label>
              <label>
                CVV
                <input
                  type="text"
                  value={this.state.accNum}
                  name="getNum"
                  onChange={this.handleChangeAccBox}
                />
              </label>
              <br />
              <Button
                variant="contained"
                onClick={this.submitButtonClick}
                disabled={!this.state.formValid}
                //type="Button"
                //class="btn btn-warning btn-lg"
              >
                Check Out
              </Button>
            </div>
          </form>
          {/* Invoke the Validation component to display error messages */}
          <Validation formErrors={this.state.formErrors} />

          {this.state.choice === "Done" && (
            <CheckedOut emptyBasket={this.emptyBasket} />
          )}
        </div>
      </div>
    ); // end of return
  } // end of render()
} // end of App class
export default Validate;
