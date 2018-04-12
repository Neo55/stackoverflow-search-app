import React, { Component } from "react";
import autoBind from "react-autobind";
import { Input, Button } from "mdbreact";
import SearchService from "../../services/search";
import "./SearchBox.scss";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="row search-box">
        <div className="col-md-8 ">
          <Input
            id="search-input"
            ref="inputSearchText"
            label="Введите текст для поиска"
            //label="Type you text here"
            icon="search"
            className="input search"
          />
        </div>
        <div className="col-md-4 button search">
          <Button
            color="primary"
            className="button search"
            onClick={this.onClickSearchButton}
          >
            Найти
          </Button>
        </div>
      </div>
    );
  }

  onClickSearchButton() {
    this.props.onSearch("searchText");
  }
}
