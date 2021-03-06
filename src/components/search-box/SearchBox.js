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
        <div className="col-md-9 ">
          <Input
            id="search-input"
            onKeyPress={this.handleKeyPress}
            label="Введите текст для поиска по сайту stackoverflow"
            defaultValue={this.props.searchText}
            onChange={this.onSearchInputChange}
            icon="search"
            className="input search"
          />
        </div>
        <div className="col-md-3 button search">
          <Button
            color="primary"
            className="button search"
            onClick={e => this.onClickSearchButton()}
            disabled={this.props.isDisabledButton}
          >
            Найти
          </Button>
        </div>
      </div>
    );
  }

  handleKeyPress = event => {
    if (event.key == "Enter" && !this.props.isDisabledButton) {
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
