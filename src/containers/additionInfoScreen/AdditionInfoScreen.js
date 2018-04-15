import React, { Component } from "react";
import AdditionInfo from "../../components/addition-info/AdditionInfo";
import * as additionInfoActions from "../../store/addition-info/actions";
import { Input, Button } from "mdbreact";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import "./AdditionInfoScreen.scss";

class AdditionInfoScreen extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  debugger;
  render() {
    return (
      <Animated
        animationIn="slideInLeft"
        animationOut="zoomOutDown"
        isVisible={true}
      >
        <AdditionInfo
          popularQuestion={this.props.popularQuestion}
          hideAdditionInfo={this.hideAdditionInfo}
          showAdditionInfo={this.props.isShowAdditionInfo}
        />
      </Animated>
    );
  }

  hideAdditionInfo() {
    debugger;
    this.props.dispatch(additionInfoActions.isShowAdditionInfo(false));
  }
}

function mapStateToProps(state) {
  return {
    isShowAdditionInfo: state.additionInfo.isShowAdditionInfo,
    popularAnswers: state.additionInfo.popularAnswers
  };
}

export default connect(mapStateToProps)(AdditionInfoScreen);
