import React, { Component } from "react";
import { Table, Badge, Spinner, Button, Fa } from "mdbreact";
import autoBind from "react-autobind";
import "./AdditionInfo.scss";

export default class AdditionInfo extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div
        className="addition-info"
        style={{
          visibility: !this.props.showAdditionInfo ? "hidden" : "visible"
        }}
      >
        <div className="title addition-table">
          <div className="row">
            <div className="col-md-2 close-icon-col">
              <Fa
                onClick={e => this.closeAdditionInfo()}
                icon="close"
                className="mr-1 close-icon"
              />
            </div>
            <div className="col-md-10">
              <p>
                Самые популярные вопросы по {this.props.selectPopularType}:{" "}
                {this.props.popularSelectName}{" "}
              </p>
            </div>
          </div>
        </div>

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
      </div>
    );
  }

  renderLoading() {
    return <Spinner big multicolor />;
  }

  closeAdditionInfo() {
    this.props.hideAdditionInfo();
  }
}
