import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  text: "",
  result: [],
  popularQuestion: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_POPULAR_QUESTION_BY_AUTHOR:
      console.log(action.popularQuestionByAuthor);
      return state.merge({
        popularQuestion: action.popularQuestion
      });
    case types.GET_POPULAR_QUESTION_BY_TAG:
      console.log(action.popularQuestionByTag);
      return state.merge({
        popularQuestion: action.popularQuestion
      });
    case types.SET_SEARCH_RESULT:
      console.log(action.result);
      return state.merge({
        result: action.result
      });
    case types.STORE_SEARCH_TEXT:
      console.log(action.text);
      return state.merge({
        text: action.text
      });
    case types.SELECT_AUTHOR:
      console.log(action.currentAuthor);
      return state.merge({
        currentAuthor: action.currentAuthor
      });
    case types.SELECT_TAG:
      console.log(action.currentTag);
      return state.merge({
        currentTag: action.currentTag
      });
  }
  return state;
}

export function getSearchText(state) {
  return state.search.text;
}

export function getCurrentAuthor(state) {
  return state.search.currentAuthor;
}

export function getCurrentTag(state) {
  return state.search.currentTag;
}
// export function getSearchResult(state) {
//   return state.topics.selectedTopicUrls;
// }
