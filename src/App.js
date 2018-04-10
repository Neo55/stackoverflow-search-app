import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { Router, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import MainSearchScreen from "./components/MainSearchScreen";
import ResultSearchScreen from "./components/ResultSearchScreen";

const history = createBrowserHistory();

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
      <Router history={history}>
        <Switch>
          <Route path="/" component={MainSearchScreen} />
          <Route path="/result/screen" component={ResultSearchScreen} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentScreen: state.searchQuestions.searchWindow
  };
}

export default connect(mapStateToProps)(App);
