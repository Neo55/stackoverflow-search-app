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
            onKeyPress={this.handleKeyPress}
            label="Введите текст для поиска"
            defaultValue={this.props.searchText}
            onChange={this.onSearchInputChange}
            icon="search"
            className="input search"
          />
        </div>
        <div className="col-md-4 button search">
          <Button
            color="primary"
            className="button search"
            onClick={e => this.onClickSearchButton()}
          >
            Найти
          </Button>
        </div>
      </div>
    );
  }

  handleKeyPress = event => {
    if (event.key == "Enter") {
      this.onClickSearchButton();
    }
  };

  onClickSearchButton() {
    this.props.onSearch();
  }

  onSearchInputChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }
}
