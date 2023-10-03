import React, { Component } from "react";
import CatStuff from "./ComponentCat";
import DogStuff from "./ComponentDog";
import Validate from "./checkout";
import "bootstrap/dist/css/bootstrap.css";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Helmet from "react-helmet";
import IMG_7100 from "./IMG_7100.PNG";
import MainLogo from "./MainLogo.png";
import Search from "./Search";
import { products } from "./products";
import checkedOut from "./Checkedout";

/**
 * Basket in state - you have this with a capital B but
 * refer to it a few times with lower case b - hence the 'cannot find properties'
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "None",
      variableForA: 0,
      variableForB: 0,
      catProducts: [
        { pid: 1, Product: "Cat Food", price: 5.0, Qty: 0 },
        { pid: 2, Product: "Cat Treats", price: 7.0, Qty: 0 },
        { pid: 3, Product: "Cat Friendly Chocolate", price: 4, Qty: 0 },
        { pid: 4, Product: "Cat Pawsecco", price: 4.25, Qty: 0 },
        { pid: 5, Product: "Cat Toy", price: 4.85, Qty: 0 },
        { pid: 6, Product: "Cat Hair Bow", price: 2.85, Qty: 0 },
        { pid: 7, Product: "Cat Jacket", price: 10.95, Qty: 0 },
        { pid: 8, Product: "Cat Hat", price: 6.95, Qty: 0 }
      ],
      dogProducts: [
        { pid: 9, Product: "Dog food", price: 5.0, Qty: 0 },
        { pid: 10, Product: "Dog Treats", price: 7.55, Qty: 0 },
        { pid: 11, Product: "Dog Friendly Chocolate", price: 1.25, Qty: 0 },
        { pid: 12, Product: "Dog Pawsecco", price: 2.25, Qty: 0 },
        { pid: 13, Product: "Dog Toy", price: 0.85, Qty: 0 },
        { pid: 14, Product: "Dog Hair Bow", price: 1.85, Qty: 0 },
        { pid: 15, Product: "Dog Jacket", price: 2.95, Qty: 0 },
        { pid: 16, Product: "Dog Hat", price: 0.95, Qty: 0 }
      ],
      Basket: []
    };
    this.addDogProductByID = this.addDogProductByID.bind(this);
    this.addCatProductByID = this.addCatProductByID.bind(this);
    this.showCatComponent = this.showCatComponent.bind(this);
    this.showDogComponent = this.showDogComponent.bind(this);
    this.showHomeComponent = this.showHomeComponent.bind(this);
    this.emptyBasket = this.emptyBasket.bind(this);
    this.deleteProductFromBasket = this.deleteProductFromBasket.bind(this);
    this.showcheckout = this.showcheckout.bind(this);
    this.showSearchComponent = this.showSearchComponent.bind(this);
  }
  //  Function that changes the state of choice when
  // the Home Button is clicked
  showHomeComponent() {
    this.setState({ choice: "None" });
  }
  //  Functioon that changes the state of choice when
  // the Search Button is clicked
  showSearchComponent() {
    this.setState({ choice: "Search" });
  }
  //  Functioon that changes the state of choice when
  // the Dog Button is clicked
  showDogComponent() {
    this.setState({ choice: "Dog" });
  }
  //  Functioon that changes the state of choice when
  // the Cat Button is clicked
  showCatComponent() {
    this.setState({ choice: "Cat" });
  }
  //  Functioon that changes the state of choice when
  // the Home Button is clicked
  showcheckout() {
    this.setState({ choice: "checkout" });
    this.setState({ Basket: [] });
  }
  //Function that adds dog Products to the Basket
  addDogProductByID(id) {
    let dogProduct = this.state.dogProducts.filter(
      this.searchForProductByID(id)
    );

    if (dogProduct)
      this.setState({
        Basket: this.state.Basket.concat(dogProduct)
      });
  }
  //Function that adds Cat Products to the Basket
  addCatProductByID(id) {
    let catProduct = this.state.catProducts.filter(
      this.searchForProductByID(id)
    );
    console.log(JSON.stringify(catProduct));

    if (catProduct)
      this.setState({
        Basket: this.state.Basket.concat(catProduct)
      });
  }
  // Function to Calculate the total Basket
  BasketTotal(acc, obj) {
    return acc + obj.price;
  }
  // Function that handes the Search Bar
  searchForProductByID(id) {
    return function (theObject) {
      //argument the object
      return theObject.pid === id;
    };
  }
  // Function that deletes an item from the basket
  deleteProductFromBasket(productID) {
    let indexToRemove = this.state.Basket.findIndex(
      this.searchForProductByID(productID)
    );
    if (indexToRemove >= 0) this.removeProduct(indexToRemove);
  }

  removeProduct(indexToRemove) {
    if (this.state.Basket.length > 0) {
      let tempBasket = this.state.Basket;
      tempBasket.splice(indexToRemove, 1);
      this.setState({ basket: tempBasket });
    }
  }
  emptyBasket() {
    this.setState({ Basket: [] });
  }
  sortBasket(dx, dy) {
    let DY = dy.Product.toUpperCase();
    let DX = dx.Product.toUpperCase();
    if (DX > DY) return 1;
    else if (DX < DY) return -1;
    else return 0;
  }

  render() {
    const arrayPassedAsParameter = this.props.globalArray;
    const searchTermFromProps = this.props.searchTerm;

    return (
      <div className="App">
        <Paper elevation={21} />
        <CssBaseline />
        <Helmet bodyAttributes={{ style: "background-color :white " }} />

        <img src={MainLogo} height={100} width={250} />
        <h3 style={{ color: "black" }}>All you need and more! </h3>
        <h3 style={{ color: "black" }}>World leaders in pet nutrition.</h3>

        <Button variant="contained" onClick={this.showHomeComponent}>
          Home
        </Button>

        <Button variant="contained" onClick={this.showSearchComponent}>
          Search
        </Button>

        <Button variant="contained" onClick={this.showCatComponent}>
          Cat Products
        </Button>

        <Button variant="contained" onClick={this.showDogComponent}>
          Dog Products
        </Button>

        {/* <Button variant="contained" onClick={this.showcheckout}>
          Check Out
        </Button> */}

        {this.state.choice === "Cat" && (
          <CatStuff
            addCatProductByID={this.addCatProductByID}
            catProducts={this.state.catProducts}
          />
        )}
        <br></br>
        {this.state.choice === "None" && (
          <img src={IMG_7100} height={400} width={150} />
        )}

        {this.state.choice === "Search" && <Search />}

        {this.state.choice === "Dog" && (
          <DogStuff
            addDogProductByID={this.addDogProductByID}
            dogProducts={this.state.dogProducts}
          />
        )}

        {this.state.choice === "checkout" && <Validate />}

        {this.state.Basket.length > 0 && (
          <h3>
            Your shopping basket<br></br>
            <h5>Total items {this.state.Basket.length}</h5>
            <h6>
              shopping basket total &nbsp;€
              {this.state.Basket.reduce(this.BasketTotal, 0.0).toFixed(2)}
            </h6>
          </h3>
        )}

        {this.state.Basket.length > 0 &&
          this.state.Basket.sort(this.sortBasket).map((s) => (
            <div key={s.pid}>
              {s.Product} €{s.price}&nbsp;
              <Button
                variant="contained"
                onClick={() => {
                  this.deleteProductFromBasket(s.pid);
                }}
              >
                Remove {s.Product}
              </Button>
            </div>
          ))}
        <br></br>
        {this.state.Basket.length > 0 && (
          <p>
            {" "}
            <Button variant="contained" onClick={this.emptyBasket}>
              {" "}
              Clear basket
            </Button>
            ,
            <Button variant="contained" onClick={this.showcheckout}>
              Proceed to Check Out
            </Button>
          </p>
        )}
      </div>
    );
  }
}

export default App;
