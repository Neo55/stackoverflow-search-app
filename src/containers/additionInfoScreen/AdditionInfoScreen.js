import React, { Component } from "react";
import AdditionInfo from "../../components/addition-info/AdditionInfo";
import * as additionInfoActions from "../../store/addition-info/actions";
import * as searchActions from "../../store/search/actions";
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
          selectPopularType={this.props.selectPopularType}
          popularSelectName={this.props.popularSelectName}
          loadMoreAdditionInfo={this.loadMoreAdditionInfo}
        />
      </Animated>
    );
  }

  hideAdditionInfo() {
    this.props.dispatch(additionInfoActions.isShowAdditionInfo(false));
  }

  loadMoreAdditionInfo() {
    this.props.dispatch(searchActions.loadMoreAdditionInfo());
  }
}

function mapStateToProps(state) {
  return {
    isShowAdditionInfo: state.additionInfo.isShowAdditionInfo,
    popularAnswers: state.additionInfo.popularAnswers,
    selectPopularType: state.additionInfo.selectPopularType,
    popularSelectName: state.additionInfo.popularSelectName
  };
}

export default connect(mapStateToProps)(AdditionInfoScreen);
