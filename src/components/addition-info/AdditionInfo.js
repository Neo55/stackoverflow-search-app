import React, { Component } from "react";
import { Table, Badge, Spinner } from "mdbreact";
import autoBind from "react-autobind";
import "./AdditionInfo.scss";

export default class AdditionInfo extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    // if (!this.props.result) return this.renderLoading();
    return (
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Тема</th>
            <th>Ответов</th>
            <th>Теги</th>
          </tr>
        </thead>
        <tbody>
          {this.props.popularQuestion.map(item => (
            <tr key={item.question_id}>
              <td>{item.title}</td>
              <td>{item.answer_count}</td>
              <td>
                {item.tags.map(tag => {
                  <h6>
                    <Badge color="indigo">{tag}</Badge>
                  </h6>;
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  renderLoading() {
    return <Spinner big multicolor />;
  }
}
