import React, { Component } from "react";
import SearchBox from "../../components/search-box/SearchBox";
import ResultList from "../../components/result/ResultList";
import AdditionInfo from "../../components/addition-info/AdditionInfo";
import QuestionInfoScreen from "../question-info-screen/QuestionInfoScreen";
import AdditionInfoScreen from "../additionInfoScreen/AdditionInfoScreen";
import { Input, Button } from "mdbreact";
import * as searchActions from "../../store/search/actions";
import * as additionInfoActions from "../../store/addition-info/actions";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import "./ResultScreen.scss";
import { runInThisContext } from "vm";

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
                searchText={this.props.text}
                onSearchTextChange={this.onSearchTextChange}
                isDisabledButton={this.props.text.length === 0}
              />
            </Animated>

            <Animated
              animationIn="slideInUp"
              animationOut="tada"
              //isVisible={this.isVisibleResultTable()}
            >
              <div
                style={{
                  visibility:
                    this.props.result.length === 0 ? "hidden" : "visible"
                }}
                className="result-screen result-list"
              >
                <ResultList
                  result={this.props.result}
                  selectAuthor={this.selectCurrentAuthor}
                  selectTag={this.selectCurrentTag}
                  showPopularAnswers={this.loadPopularAnswer}
                  getUserName={this.getUserNameById}
                  authorName="name"
                  showQuestionInfo="false"
                />
                <Button className="button load-more" outline color="success">
                  Загрузить еще
                </Button>
              </div>
            </Animated>
          </div>
          <div className="info col-md-3">
            <Animated
              animationIn="slideInRight"
              animationOut="tada"
              //isVisible={this.isVisibleResultTable()}
              isVisible={false}
            >
              <AdditionInfoScreen
                popularQuestion={this.props.popularQuestion}
              />
              {/* <AdditionInfo popularQuestion={this.props.popularQuestion} /> */}
            </Animated>
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
    this.props.dispatch(additionInfoActions.isShowAdditionInfo(true));
    this.props.dispatch(additionInfoActions.setPopularType("автору"));
    this.props.dispatch(additionInfoActions.setPopularName(authorId));
  }

  selectCurrentTag(tagName) {
    this.props.dispatch(searchActions.searchPopularQuestionByTag(tagName));
    this.props.dispatch(additionInfoActions.isShowAdditionInfo(true));
    this.props.dispatch(additionInfoActions.setPopularType("тегу"));
    this.props.dispatch(additionInfoActions.setPopularName(tagName));
  }

  loadPopularAnswer(title) {
    this.props.dispatch(additionInfoActions.selectQuestionName(title));
    this.props.dispatch(additionInfoActions.getPopularQuestionAnswer());
    this.props.dispatch(additionInfoActions.isShowQuestonInfo(true));
  }

  getUserNameById(userId) {
    this.props.dispatch(additionInfoActions.getAuthorName(userId));

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
    popularAnswers: state.additionInfo.popularAnswers
  };
}

export default connect(mapStateToProps)(ResultScreen);
