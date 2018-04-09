import React, { Component } from 'react';
import { Input, Button } from "mdbreact";
import './SearchBox.scss';

export default class SearchBox extends Component {
  render() {
    return (
      <div className="row search-box">
        <div className="col-md-8 "><Input label="Введите текст для поиска" icon="search" className="input search"/></div>
        <div className="col-md-4 button search" ><Button color="primary" className="button search">Primary</Button></div>
      </div>
    )
  }
}