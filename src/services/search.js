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

  getAuthoInfo(authorId) {
    return function() {
      return {
        items: [
          {
            badge_counts: {
              bronze: 27,
              silver: 8,
              gold: 2
            },
            account_id: 5091125,
            is_employee: false,
            last_modified_date: 1522512426,
            last_access_date: 1523737220,
            reputation_change_year: 353,
            reputation_change_quarter: -17,
            reputation_change_month: -17,
            reputation_change_week: -27,
            reputation_change_day: -45,
            reputation: 3266,
            creation_date: 1411750631,
            user_type: "registered",
            user_id: 4084160,
            accept_rate: 100,
            location: "USA",
            website_url: "",
            link: "https://stackoverflow.com/users/4084160/henrydev",
            profile_image: "https://i.stack.imgur.com/TTMdn.jpg?s=128&g=1",
            display_name: "HenryDev"
          }
        ],
        has_more: false,
        quota_max: 10000,
        quota_remaining: 9696
      };
    };
    // return configuration.get(
    //   `users/${authorId}?((&site=stackoverflow&order=desc&sort=reputation&filter=default`
    // );
  }

  getAnswersByQustion(questionId) {
    return configuration.get(
      `questions/${questionId}?((&site=stackoverflow&order=desc&sort=votes`
    );
  }
}

export default new SearchService();
