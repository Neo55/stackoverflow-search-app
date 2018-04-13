import * as types from "./actionTypes";
import SearchService from "../../services/search";
import * as searchSelectors from "./reducer";

// export function startSearch() {
//   return {
//     type: types.START_SEARCH,
//     newSearch: true
//   };
// }

export function changeSearchText(searchText) {
  return {
    type: types.STORE_SEARCH_TEXT,
    text: searchText
  };
}

export function selectAuthor(author) {
  return {
    type: types.SELECT_AUTHOR,
    currentAuthor: author
  };
}

export function selectTag(tag) {
  return {
    type: types.SELECT_TAG,
    currentTag: tag
  };
}

export function startSearch(result) {
  return (dispatch, getState) => {
    const searchText = searchSelectors.getSearchText(getState());

    SearchService.search(searchText).then(response => {
      dispatch({
        type: types.SET_SEARCH_RESULT,
        result: response.data.items
      });
    });
  };
}

export function searchPopularQuestionByAuthor(authorId) {
  return (dispatch, getState) => {
    // const currentAuthor = searchSelectors.getCurrentAuthor(getState());

    SearchService.getPopularQuestionByAuthor(authorId).then(response => {
      debugger;
      dispatch({
        type: types.GET_POPULAR_QUESTION_BY_AUTHOR,
        popularQuestion: response.data.items
      });
    });
  };
}

export function searchPopularQuestionByTag(popularQuestions) {
  return (dispatch, getState) => {
    const searchText = searchSelectors.getSearchText(getState());
    const fetchPromises = SearchService.getTestData(searchText).then(
      response => {
        dispatch({
          type: types.GET_POPULAR_QUESTION_BY_AUTHOR,
          result: response.data.items
        });
      }
    );
  };
}
