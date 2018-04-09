import React, { Component } from "react";
import "./App.scss";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import MainSearchScreen from "./components/MainSearchScreen";

const test = [4, 4, 4, 45, 45, 56];

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
        <div className="col-md-3"></div>
        <div className="col-md-6 main-search-screen">
          <MainSearchScreen></MainSearchScreen></div>
        <div className="col-md-3"></div>
      </div>

      //   <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      //     <DropdownToggle caret color="primary">
      //       Material dropdown
      //     </DropdownToggle>
      //     <DropdownMenu>
      //       <DropdownItem href="#">Action</DropdownItem>
      //       <DropdownItem href="#">Another Action</DropdownItem>
      //       <DropdownItem href="#">Something else here</DropdownItem>
      //       <DropdownItem href="#">Something else here</DropdownItem>
      //     </DropdownMenu>
      //   </Dropdown>
    );
  }
}

export default App;
