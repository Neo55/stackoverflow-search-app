import React, { Component } from "react";
import { Input, Button } from "mdbreact";
import SearchBox from "../search/SearchBox";
import "./ResultScreen.scss";

export default class SearchBox extends Component {
  render() {
    return (
      <div class="container">
        <div class="row header">
          <div class="header col-xs-12">
            <SearchBox />
          </div>
        </div>
        <div class="row content">
          <div class="menu col-md-2" />
          <div class="search col-md-7" />
          <div class="info col-md-3" />
        </div>
      </div>
    );
  }
}
