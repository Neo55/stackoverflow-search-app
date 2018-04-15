import React, { Component } from "react";
import QuestionInfo from "../../components/question-info/QuestionInfo";
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
          isQuestionInfoOpen={true}
          popularAnswers={this.props.popularAnswers}
          questionTitle={this.props.questionTitle}
        />
      </Animated>
    );
  }
}

function mapStateToProps(state) {
  return {
    isShowQuestionInfo: state.search.isShowQuestionInfo,
    popularAnswers: state.additionInfo.popularAnswers
  };
}

export default connect(mapStateToProps)(QuestionInfoScreen);
