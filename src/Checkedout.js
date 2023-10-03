import React, { Component } from "react";

class CheckedOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: "Order Summary",
      x: "Thank you for your Order",
      y: "Standard Delivery is 2-99 working days",
      z: " Your Order Number is - CS385 "
    };
  }

  render() {
    return (
      <div className="App">
        {this.props.emptyBasket}

        <h1> {this.state.x}</h1>
        <br></br>
        <h1> {this.state.Y}</h1>
        <br></br>
        <h1> {this.state.z}</h1>
        <br></br>
      </div>
    );
  }
}
export default CheckedOut;
