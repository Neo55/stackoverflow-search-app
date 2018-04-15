import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  text: "",
  result: [],
  popularQuestion: [],
  currentAuthor: "",
  currentTag: "",
  searchMetaInfo: {
    page: 0,
    limit: 0
  }
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_POPULAR_QUESTION_BY_AUTHOR:
      return state.merge({
        popularQuestion: action.popularQuestion
      });
    case types.GET_POPULAR_QUESTION_BY_TAG:
      return state.merge({
        popularQuestion: action.popularQuestion
      });
    case types.SET_SEARCH_RESULT:
      return state.merge({
        result: action.result
      });
    case types.STORE_SEARCH_TEXT:
      return state.merge({
        text: action.text
      });
    case types.SELECT_AUTHOR:
      return state.merge({
        currentAuthor: action.currentAuthor
      });
    case types.SELECT_TAG:
      return state.merge({
        currentTag: action.currentTag
      });
    case types.SEARCH_META_INFO:
      return state.merge({
        searchMetaInfo: action.searchMetaInfo
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

export function getMeta(state) {
  return state.search.searchMetaInfo;
}
