import axios from "axios";

const configuration = require("./configuration");

class SearchService {
  getTestData() {
    return configuration.get(
      "search?((&site=stackoverflow&order=desc&sort=activity&intitle=extjs&filter=default"
     // "/2.2/search?page=1&pagesize=10&order=desc&sort=activity&intitle=extjs&site=stackoverflow"
    );
  }
}

export default new SearchService();
