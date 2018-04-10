import React, { Component } from "react";
import SearchBox from "./search/SearchBox";

export default class MainSearchScreen extends Component {
  render() {
    return (
      <div className="row main-screen">
        <div className="col-md-3" />
        <div className="col-md-6 main-search-screen">
          <SearchBox />
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
