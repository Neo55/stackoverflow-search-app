import React, { Component } from "react";
import { Table, Badge, Spinner } from "mdbreact";
import autoBind from "react-autobind";
import "./ResultList.scss";

export default class ResultScreen extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    if (!this.props.result) return this.renderLoading();
    return (
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Автор</th>
            <th>Тема</th>
            <th>Ответов</th>
            <th>Теги</th>
          </tr>
        </thead>
        <tbody>
          {this.props.result.map(item => (
            <tr key={item.question_id}>
              <td scope="row">
                <div onClick={e => this.clickAuthor(item.owner.user_id)}>
                  <img
                    className="author-icon"
                    src={item.owner.profile_image}
                    alt=""
                  />
                  <p>{item.owner.user_id}</p>
                </div>
              </td>
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

  clickAuthor(authorId) {
    this.props.selectAuthor(authorId);
    console.log(authorId);
  }
}
