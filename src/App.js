import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import MainSearchScreen from "./components/MainSearchScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="row main-screen">
        <div className="col-md-3" />
        <div className="col-md-6 main-search-screen">
          <MainSearchScreen />
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentScreen: state.searchQuestions.searchWindow
  };
}

export default connect(mapStateToProps)(App);
