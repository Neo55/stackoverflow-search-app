import React, { Component } from "react";
import autoBind from "react-autobind";
import { Table, Badge, Spinner } from "mdbreact";
import Crouton from "react-crouton";
import "./QuestionInfo.scss";

export default class QuestionInfo extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    var data = {
      id: Date.now(),
      type: "error",
      message: "Hello React-Crouton",
      autoMiss: true || false,
      //onDismiss: listener,
      buttons: [
        {
          name: "close"
          // listener: function() {}
        }
      ],
      hidden: this.props.popularAnswers.length === 0,
      timeout: 2000
    };

    return (
      <div className="question-info">
        {/* <Crouton
          id={data.id}
          type={data.type}
          message={data.message}
          //onDismiss={data.onDismiss}
          buttons={data.buttons}
          hidden={data.hidden}
          timeout={data.timeout}
          autoMiss={data.autoMiss}
        > */}
        {/* <p>Самые ответы на вопрос: {this.props.questionTitle} </p> */}
        <div className="title question-info-table">
          <p>
            Самые популярные вопросы по
            {/* {this.props.selectPopularType}:{" "} */}
            {/* {this.props.popularSelectName}{" "} */}
          </p>
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
        {/* </Crouton> */}
      </div>
    );
  }
}
