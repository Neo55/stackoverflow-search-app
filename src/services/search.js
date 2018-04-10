import axios from "axios";

const configuration = require("./configuration");

class SearchService {
  getTestData() {
    return configuration.get(
      "search?((&site=stackoverflow&order=desc&sort=activity&intitle=extjs&filter=default"
    );
  }
}

export default new SearchService();
