import React, { Component } from "react";
import { products } from "./products";

const localproducts = products;
// This Componet handles all the elements of Products Array
//to allow the user to see what products are instock

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", len: 0, globalArray: localproducts };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
  }

  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
    let sTerm = event.target.value; // typed in value
    let numChars = sTerm.length;
    this.setState({ len: numChars });
  }
  render() {
    return (
      <div className="App">
        <br></br>
        <b>{this.state.searchTerm}</b>

        <SearchForm
          searchTerm={this.state.searchTerm}
          onChange={this.onSearchFormChange}
        />
        <SearchResults
          searchTerm={this.state.searchTerm}
          globalArray={this.state.globalArray}
        />
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

class SearchResults extends Component {
  productsFilterFunction(searchTerm) {
    return function (addrObject) {
      let product = addrObject.Product.toLowerCase();
      let Instock = addrObject.Instock.toLowerCase();

      return (
        searchTerm !== "" &&
        (product.includes(searchTerm.toLowerCase()) ||
          Instock.includes(searchTerm.toLowerCase()))
      );
    };
  }

  render() {
    const arrayPassedAsParameter = this.props.globalArray;
    const searchTermFromProps = this.props.searchTerm;

    let numberResults = arrayPassedAsParameter.filter(
      this.productsFilterFunction(searchTermFromProps)
    ).length;

    return (
      <div className="SearchResultsDisplay">
        <hr />
        <h1>Search Results</h1>
        Number of Results found {numberResults}
        {arrayPassedAsParameter
          .filter(this.productsFilterFunction(searchTermFromProps))
          .map((a) => (
            <div key={a.Product}>
              <b>{a.Product}</b>,{" "}
              <h4 style={{ color: "green" }}>{a.Instock}</h4>
            </div>
          ))}
      </div>
    );
  }
}

class SearchForm extends Component {
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;

    return (
      <div className="SearchFormForm">
        <form>
          <b>Check Stock info here </b>
          <input
            type="text"
            value={searchTermFromProps}
            onChange={onChangeFromProps}
          />
        </form>
        <hr />
      </div>
    );
  }
} // close the SearchForm Component

export default Search;
