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
              selectQuestionName={this.props.selectQuestionName}
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
                  authorName="name"
                  showQuestionInfo="false"
                />
                <Button
                  className="button load-more"
                  onClick={e => this.onClickLoadMoreResult()}
                  outline
                  color="success"
                  style={{
                    display: !this.props.hasNextResult ? "none" : "inline-block"
                  }}
                >
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

  onStartSearch() {
    this.props.history.push("/result");
    this.props.dispatch(searchActions.startSearch(this.props.text));
  }

  onSearchTextChange(text) {
    this.props.dispatch(searchActions.changeSearchText(text));
  }

  selectCurrentAuthor(authorData) {
    this.props.dispatch(additionInfoActions.isShowAdditionInfo(true));
    this.props.dispatch(additionInfoActions.setPopularType("автору"));
    this.props.dispatch(additionInfoActions.setPopularName(authorData));
    this.props.dispatch(
      searchActions.searchPopularQuestionByAuthor(authorData.id)
    );
  }

  selectCurrentTag(tagName) {
    this.props.dispatch(additionInfoActions.isShowAdditionInfo(true));
    this.props.dispatch(additionInfoActions.setPopularType("тегу"));
    this.props.dispatch(additionInfoActions.setPopularName(tagName));
    this.props.dispatch(searchActions.searchPopularQuestionByTag(tagName));
  }

  loadPopularAnswer(title, questionId) {
    this.props.dispatch(additionInfoActions.selectQuestionName(title));
    this.props.dispatch(additionInfoActions.isShowQuestonInfo(true));
    this.props.dispatch(additionInfoActions.selectQuestionId(questionId));
    this.props.dispatch(
      additionInfoActions.getPopularQuestionAnswer(questionId)
    );
  }

  onClickLoadMoreResult() {
    this.props.dispatch(searchActions.loadMoreResult());
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
    hasNextResult: state.search.hasNextResult,
    authorData: state.search.authorData,
    popularAnswers: state.additionInfo.popularAnswers,
    selectQuestionName: state.additionInfo.selectQuestionName
  };
}

export default connect(mapStateToProps)(ResultScreen);
