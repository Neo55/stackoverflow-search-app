import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { Router, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import MainSearchScreen from "./components/MainSearchScreen";
import ResultSearchScreen from "./components/ResultSearchScreen";
import AdditionSearchScreen from "./components/AdditionSearchScreen";

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
        <div>
              <Switch>
                <Route path='/main' component={MainSearchScreen} />
                <Route path='/result' component={ResultSearchScreen}/>
                <Route path='/info' component={AdditionSearchScreen}/>
              </Switch>
        </div>

        {/*<Switch>*/}
          {/*<Route path="/" component={ResultSearchScreen} />*/}
          {/*<Route path="/" component={AdditionSearchScreen} />*/}
          {/*<Route path="/dfs" component={MainSearchScreen} />*/}
        {/*</Switch>*/}
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
