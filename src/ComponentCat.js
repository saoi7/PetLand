import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";

class CatStuff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catproducts: this.props.catProducts
    }; //end of this.state
  }
  render() {
    return (
      <div className="CatStuff">
        <h1>Cat Products</h1>

        {this.state.catproducts.map((s) => (
          <div key={s.pid}>
            <b>PID:{s.pid}</b> <b>{s.Product}</b> <b>€{s.price}</b> &ensp;
            <Button
              variant="contained"
              onClick={() => {
                this.props.addCatProductByID(s.pid);

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
export default CatStuff;
