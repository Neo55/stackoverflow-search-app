import React, { Component } from "react";
import SearchBox from "../../components/search-box/SearchBox";
import ResultList from "../../components/result/ResultList";
import AdditionInfo from "../../components/addition-info/AdditionInfo";
import { Input, Button } from "mdbreact";
import * as searchActions from "../../store/search/actions";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import "./ResultScreen.scss";

class ResultScreen extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    return (
      <div className="container">
        <div className="row content">
          <div className="menu col-md-1" />
          <div className="search col-md-10">
            <SearchBox
              className="serach-box result-list"
              onSearch={this.onStartSearch}
              //searchTextValue={this.props.text}
              onSearchTextChange={this.onSearchTextChange}
            />
            <ResultList
              result={this.props.result}
              selectAuthor={this.selectCurrentAuthor}
            />
          </div>
          <div className="info col-md-2">
            <AdditionInfo popularQuestion={this.props.popularQuestion} />
          </div>
        </div>
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

  selectCurrentAuthor(authorId) {
    this.props.dispatch(searchActions.searchPopularQuestionByAuthor(authorId));
  }
}

function mapStateToProps(state) {
  return {
    text: state.search.text,
    result: state.search.result,
    popularQuestion: state.search.popularQuestion,
    currentAuthor: state.search.currentAuthor
  };
}

export default connect(mapStateToProps)(ResultScreen);
