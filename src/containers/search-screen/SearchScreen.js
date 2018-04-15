import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as searchActions from "../../store/search/actions";
import * as animateActions from "../../store/animate/actions";
import SearchBox from "../../components/search-box/SearchBox";
import { Animated } from "react-animated-css";

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
          <Animated
            animationIn="zoomIn"
            animationOut="zoomOut"
            isVisible={this.props.mainSearchScreen}
          >
            <SearchBox
              onSearch={this.onStartSearch}
              onSearchTextChange={this.onSearchTextChange}
              isDisabledButton={this.props.text.length === 0}
            />
          </Animated>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }

  onStartSearch(searchText, context) {
    this.props.history.push("/result");

    this.props.dispatch(searchActions.startSearch(this.props.searchMetaInfo));
  }

  onSearchTextChange(text) {
    this.props.dispatch(searchActions.changeSearchText(text));
  }
}

function mapStateToProps(state) {
  return {
    mainSearchScreen: true,
    text: state.search.text,
    result: [],
    searchMetaInfo: state.search.searchMetaInfo
  };
}

export default connect(mapStateToProps)(SearchScreen);
