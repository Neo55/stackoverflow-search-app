import React, { Component } from "react";
import SearchBox from "../../components/search-box/SearchBox";
import ResultList from "../../components/result/ResultList";
import AdditionInfo from "../../components/addition-info/AdditionInfo";
import QuestionInfoScreen from "../question-info-screen/QuestionInfoScreen";
import { Input, Button } from "mdbreact";
import * as searchActions from "../../store/search/actions";
import * as additionInfoActions from "../../store/addition-info/actions";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import "./ResultScreen.scss";

class ResultScreen extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    return (
      <div className="container-result-screen">
        <div className="row content">
          <div className="menu col-md-3">
            <QuestionInfoScreen
              className="question-info-screen"
              popularAnswers={this.props.popularAnswers}
              questionTitle={this.props}
            />
          </div>
          <div className="search col-md-6">
            <Animated
              animationIn="slideInDown"
              animationOut="zoomOut"
              isVisible={this.props.mainSearchScreen}
            >
              <SearchBox
                className="serach-box result-list"
                onSearch={this.onStartSearch}
                //searchTextValue={this.props.text}
                onSearchTextChange={this.onSearchTextChange}
              />
            </Animated>

            <Animated
              animationIn="slideInUp"
              animationOut="tada"
              //isVisible={this.isVisibleResultTable()}
            >
              <div className="result-screen result-list">
                <ResultList
                  result={this.props.result}
                  selectAuthor={this.selectCurrentAuthor}
                  showPopularAnswers={this.loadPopularAnswer}
                  getUserName={this.getUserNameById}
                  authorName="name"
                  showQuestionInfo="false"
                />
              </div>
            </Animated>
          </div>
          <div className="info col-md-3">
            <Animated
              animationIn="slideInRight"
              animationOut="tada"
              //isVisible={this.isVisibleResultTable()}
            >
              <AdditionInfo popularQuestion={this.props.popularQuestion} />
            </Animated>
          </div>
        </div>
      </div>
    );
  }

  isVisibleResultTable() {
    return this.props.result.length === 0;
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

  loadPopularAnswer() {
    this.props.dispatch(additionInfoActions.getPopularQuestionAnswer());
  }

  getUserNameById(userId) {
    this.props.dispatch(additionInfoActions.getAuthorName(userId));
    //debugger;
    return this.state;
  }
}

function mapStateToProps(state) {
  return {
    text: state.search.text,
    result: state.search.result,
    popularQuestion: state.search.popularQuestion,
    currentAuthor: state.search.currentAuthor,
    selectPopularType: state.search.selectPopularType,
    popularSelectName: state.search.popularSelectName,
    authorName: state.search.authorName,
    isShowQuestionInfo: state.search.isShowQuestionInfo,
    popularAnswers: state.additionInfo.popularAnswers
  };
}

export default connect(mapStateToProps)(ResultScreen);
