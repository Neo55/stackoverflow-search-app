import React, { Component } from "react";
import SearchBox from "./search/SearchBox";
import ResultList from "./result/ResultList";
import { Input, Button } from "mdbreact";
// import
import "./ResultSearchScreen.scss";

export default class ResultSearchScreen extends Component {
  render() {
    return (
      <div className="container">
        <div className="row content">
          <div className="menu col-md-2" />
          <div className="search col-md-7">
            <SearchBox className="serach-box result-list" />
            <ResultList />
          </div>
          <div className="info col-md-3" />
        </div>
      </div>
    );
  }
}
// export default className ResultSearchScreen extends Component {
//   render() {
//     return (
//       <div className="search col-md-7">
//         <p>sdfsdfsdf</p>
//       </div>
//     );
//   }
// }
