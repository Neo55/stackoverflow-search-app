import React, { Component } from "react";
import autoBind from "react-autobind";
import { Table, Badge, Spinner, Fa, Button } from "mdbreact";
import "./QuestionInfo.scss";

export default class QuestionInfo extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div
        className="question-info"
        style={{
          visibility: !this.props.showQuestionInfo ? "hidden" : "visible"
        }}
      >
        <div className="title question-info-table">
          <div className="row">
            <div className="col-md-11">
              <p>{this.props.selectQuestionName}?</p>
            </div>
            <div className="col-md-1 close-icon-col">
              <Fa
                onClick={e => {
                  this.closeQuestionInfo();
                }}
                icon="close"
                className="mr-1 close-icon"
              />
            </div>
          </div>
        </div>
        <Table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: 20 + "%" }}>Автор</th>
              <th style={{ width: 80 + "%" }}>Ответ</th>
            </tr>
          </thead>
          <tbody>
            {this.props.popularAnswers.map(item => (
              <tr key={item.answer_id}>
                <td>{item.owner.user_id}</td>
                <td>{item.answer_count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          className="button load-more"
          outline
          color="success"
          onClick={e => this.onClickLoadMoreQuestionInfo()}
        >
          Загрузить еще
        </Button>
      </div>
    );
  }

  closeQuestionInfo() {
    this.props.hideQuestionInfo();
  }

  onClickLoadMoreQuestionInfo() {
    this.props.loadMoreQuestionInfo();
  }
}
