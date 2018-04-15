import React, { Component } from "react";
import { Table, Badge, Spinner } from "mdbreact";
import autoBind from "react-autobind";
import { Animated } from "react-animated-css";
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
            <th style={{ width: 10 + "%" }}>Автор</th>
            <th style={{ width: 65 + "%" }}>Тема</th>
            <th style={{ width: 10 + "%" }}>Ответов</th>
            <th style={{ width: 15 + "%" }}>Теги</th>
          </tr>
        </thead>
        <tbody>
          {this.props.result.map(item => (
            <tr key={item.question_id}>
              {/* <Animated animationIn="fadeIn" animationOut="tada" isVisible={true}> */}
              <td scope="row" style={{ textAlign: "center" }}>
                <div
                  className="div coursor"
                  onClick={e => this.clickAuthor(item.owner.user_id)}
                >
                  <img
                    className="author-icon"
                    src={item.owner.profile_image}
                    alt="author-icon"
                  />
                  <p>
                    {
                      //this.props.getUserName(item.owner.user_id)
                      //"name"
                    }
                  </p>
                  <p>{this.props.authorName}</p>
                  <p>{item.owner.user_id}</p>
                </div>
              </td>
              <td>
                <div
                  className="div coursor"
                  onClick={e => this.showQuestionInfo()}
                >
                  {item.title}
                </div>
              </td>
              <td style={{ textAlign: "center" }}>
                <div
                  className="div coursor"
                  onClick={e => this.showQuestionInfo()}
                >
                  {item.answer_count}
                </div>
              </td>
              <td style={{ textAlign: "center" }}>
                {item.tags.map(tag => {
                  {
                    return (
                      <h6 key={tag}>
                        <Badge onClick={e => this.onTagClick(tag)} key={tag}>
                          {tag}
                        </Badge>
                      </h6>
                    );
                  }
                })}
              </td>
              {/* </Animated> */}
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

  onTagClick(tag) {
    console.log(tag);
  }

  getUserName(userId) {
    this.props.getUserNameById(userId);
  }

  showQuestionInfo() {
    this.props.showQuestionInfo;
    this.props.showPopularAnswers();
  }
}
