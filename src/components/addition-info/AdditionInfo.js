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
            <div className="col-md-1 close-icon-col">
              <Fa
                onClick={e => this.closeAdditionInfo()}
                icon="close"
                className="mr-1 close-icon"
              />
            </div>
            <div className="col-md-11">
              <p>
                Самые популярные вопросы по {this.props.selectPopularType}:
                <br /> {this.props.popularSelectName}
              </p>
            </div>
          </div>
        </div>

        <Table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: 80 + "%" }}>Тема</th>
              <th style={{ width: 20 + "%" }}>Ответов</th>
            </tr>
          </thead>
          <tbody>
            {this.props.popularQuestion.map(item => (
              <tr key={item.question_id}>
                <td>{item.title}</td>
                <td style={{ textAlign: "center" }}>{item.answer_count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          className="button load-more"
          outline
          color="success"
          onClick={e => this.onClickLoadMoreAdditionInfo()}
        >
          Загрузить еще
        </Button>
      </div>
    );
  }

  renderLoading() {
    return <Spinner big multicolor />;
  }

  closeAdditionInfo() {
    this.props.hideAdditionInfo();
  }

  onClickLoadMoreAdditionInfo() {
    this.props.loadMoreAdditionInfo();
  }
}
