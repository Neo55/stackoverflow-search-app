import axios from "axios";

const configuration = require("./configuration");

class SearchService {
  search(searchText) {
    return configuration.get(
      `search?((&site=stackoverflow&order=desc&sort=activity&intitle=${searchText}&filter=default`
    );
  }

  getPopularQuestionByAuthor(authorId) {
    return configuration.get(
      `users/${authorId}/favorites?((&order=desc&sort=activity&site=stackoverflow`
    );
  }

  getPopularQuestionByTag(tag) {
    return configuration.get(
      `questions?((&order=desc&sort=activity&tagged=${tag}&site=stackoverflow`
    );
  }
}

export default new SearchService();
