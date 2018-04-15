import React, { Component } from "react";
import { Table, Badge, Spinner, Button, Fa } from "mdbreact";
import autoBind from "react-autobind";
import Crouton from "react-crouton";
import "./AdditionInfo.scss";

export default class AdditionInfo extends Component {
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
      hidden: this.props.popularQuestion.length === 0,
      timeout: 2000
    };
    return (
      <div className="addition-info">
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
        <div className="title addition-table">
          <div className="row">
            <div className="col-md-2 close-icon-col">
              <Fa icon="close" className="mr-1 close-icon" />
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
        {/* </Crouton> */}
      </div>
    );
  }

  renderLoading() {
    return <Spinner big multicolor />;
  }
}
