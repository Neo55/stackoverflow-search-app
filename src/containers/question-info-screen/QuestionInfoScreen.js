import React, { Component } from "react";
import QuestionInfo from "../../components/question-info/QuestionInfo";
import * as additionInfoActions from "../../store/addition-info/actions";
import { Input, Button } from "mdbreact";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import "./QuestionInfoScreen.scss";

class QuestionInfoScreen extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    return (
      <Animated
        animationIn="slideInLeft"
        animationOut="zoomOutDown"
        isVisible={true}
      >
        <QuestionInfo
          showQuestionInfo={this.props.isShowQuestionInfo}
          popularAnswers={this.props.popularAnswers}
          questionTitle={this.props.questionTitle}
          hideQuestionInfo={this.hideQuestionInfo}
          selectQuestionName={this.props.selectQuestionName}
          loadMoreQuestionInfo={this.loadMoreQuestionInfo}
        />
      </Animated>
    );
  }

  hideQuestionInfo() {
    this.props.dispatch(additionInfoActions.isShowQuestonInfo(false));
  }

  loadMoreQuestionInfo() {
    this.props.dispatch(additionInfoActions.loadMoreQuestionInfo());
  }
}

function mapStateToProps(state) {
  return {
    isShowQuestionInfo: state.additionInfo.isShowQuestionInfo,
    popularAnswers: state.additionInfo.popularAnswers,
    selectQuestionName: state.additionInfo.selectQuestionName
  };
}

export default connect(mapStateToProps)(QuestionInfoScreen);
