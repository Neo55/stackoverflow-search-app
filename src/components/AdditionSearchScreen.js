import React, { Component } from "react";
import SearchBox from "./search/SearchBox";
import ResultList from "./result/ResultList";
import { Input, Button, Card, CardBody, CardImage, CardTitle, CardText } from "mdbreact";
// import
//import "./AdditionSearchScreen.scss";

export default class AdditionSearchScreen extends Component {
  render() {
    return (
      <div className="row addition-screen">
        <div className="search-result-list col-md-6">
          <SearchBox className="serach-box result-list" />
          <ResultList />
        </div>
        <div className="question-addition-info col-md-6">
          <Card cascade>
            <CardImage tag="div">
              <div className="view gradient-card-header blue-gradient">
                <h2 className="h2-responsive">Heading</h2>
                <p>Subheading</p>
              </div>
            </CardImage>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button href="#">Button</Button>
            </CardBody>
          </Card>
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
