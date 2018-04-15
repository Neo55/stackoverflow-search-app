import React, { Component } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { Router, Route, Link, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import SearchScreen from "./containers/search-screen/SearchScreen";
import ResultScreen from "./containers/result-screen/ResultScreen";
import AdditionSearchScreen from "./components/AdditionSearchScreen";
import QuestionInfoScreen from "./containers/question-info-screen/QuestionInfoScreen";

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
            <Route exact path="/" component={SearchScreen} />
            <Route path="/result" component={ResultScreen} />
            <Route path="/info" component={AdditionSearchScreen} />
            <Route path="/question" component={QuestionInfoScreen} />
          </Switch>
        </div>

        {/*<Switch>*/}
        {/*<Route path="/" component={ResultSearchScreen} />*/}
        {/*<Route path="/" component={AdditionSearchScreen} />*/}
        {/*<Route path="/dfs" component={SearchScreen} />*/}
        {/*</Switch>*/}
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentScreen: state.search.searchWindow
  };
}

export default connect(mapStateToProps)(App);
