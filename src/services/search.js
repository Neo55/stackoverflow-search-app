import axios from "axios";

const configuration = require("./configuration");

class SearchService {
  search(searchText) {
    return configuration.get(
      `search?((&page=1&pagesize=50&site=stackoverflow&order=desc&sort=relevance&intitle=${searchText}&filter=default`
    );
  }

  searchMoreData(searchText, meta) {
    return configuration.get(
      `search?((&page=${
        meta.page
      }&pagesize=50&site=stackoverflow&order=desc&sort=activity&intitle=${searchText}&filter=default`
    );
  }

  getPopularQuestionByAuthor(authorId) {
    return configuration.get(
      `users/${authorId}/questions?page=1&pagesize=20&order=desc&sort=votes&site=stackoverflow`
    );
  }

  getMoreDataPopularQuestionByAuthorMoreData(authorId, meta) {
    return configuration.get(
      `users/${authorId}/questions?page=${
        meta.page
      }&pagesize=20&order=desc&sort=votes&site=stackoverflow`
    );
  }

  getPopularQuestionByTag(tag) {
    return configuration.get(
      `questions?page=1&pagesize=20&order=desc&sort=votes&tagged=${tag}&site=stackoverflow`
    );
  }

  getMoreDataPopularQuestionByTag(tag, meta) {
    return configuration.get(
      `questions?page=${
        meta.page
      }&pagesize=20&order=desc&sort=votes&tagged=${tag}&site=stackoverflow`
    );
  }

  getAnswersByQustion(questionId) {
    return configuration.get(
      `questions/${questionId}/answers?page=1&pagesize=20&order=desc&sort=votes&site=stackoverflow&filter=withbody`
    );
  }

  getMoreAnswersByQustion(questionId, meta) {
    return configuration.get(
      `questions/${questionId}/answers?page=${
        meta.page
      }&pagesize=20&order=desc&sort=votes&site=stackoverflow&filter=withbody`
    );
  }
}

export default new SearchService();
