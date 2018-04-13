import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as searchActions from "../../store/search/actions";
import SearchBox from "../../components/search-box/SearchBox";

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="row main-screen">
        <div className="col-md-3" />
        <div className="col-md-6 main-search-screen">
          <SearchBox
            onSearch={this.onStartSearch}
            onSearchTextChange={this.onSearchTextChange}
          />
        </div>
        <div className="col-md-3" />
      </div>
    );
  }

  onStartSearch(searchText, context) {
    this.props.history.push("/result");

    this.props.dispatch(searchActions.startSearch());
  }

  onSearchTextChange(text) {
    this.props.dispatch(searchActions.changeSearchText(text));
  }
}

function mapStateToProps(state) {
  return {
    text: state.text,
    result: []
  };
}

export default connect(mapStateToProps)(SearchScreen);
