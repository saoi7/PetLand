import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { Banner, StaticBanner } from "material-ui-banner";

class DogStuff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogProducts: this.props.dogProducts
    }; //end of this.state
  }
  render() {
    return (
      <div className="DogStuff">
        <h1>Dog Products</h1>

        {this.state.dogProducts.map((s) => (
          <div key={s.pid}>
            <b> PID:{s.pid}</b> <b>{s.Product}</b> <b>€{s.price}</b> &ensp;
            <Button
              variant="contained"
              onClick={() => {
                this.props.addDogProductByID(s.pid);
                // this.props.searchForProductByID(p.id);
              }}
            >
              Add {s.Product} to Basket
            </Button>
          </div>
        ))}
      </div>
    );
  }
}
export default DogStuff;
