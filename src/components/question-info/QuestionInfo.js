import React, { Component } from "react";
import autoBind from "react-autobind";
import { Table, Badge, Spinner, Fa } from "mdbreact";
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
            <div className="col-md-10">
              <p>
                Ответы на: {this.props.selectPopularType}:{" "}
                {this.props.popularSelectName}{" "}
              </p>
            </div>
            <div className="col-md-2 close-icon-col">
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
      </div>
    );
  }

  closeQuestionInfo() {
    this.props.hideQuestionInfo();
  }
}
