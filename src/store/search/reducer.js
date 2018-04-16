import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  text: "",
  result: [],
  popularQuestion: [],
  hasNextAdditionInfo: false,
  hasNextResult: false,
  searchMetaInfo: {
    page: 1
  },
  searchMetaInfoAdditionInfo: {
    page: 1
  }
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_POPULAR_QUESTION_BY_AUTHOR:
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
    case types.HAS_NEXT_RESULT:
      return state.merge({
        hasNextResult: action.hasNextResult
      });
    case types.HAS_NEXT_ADDITION_INFO:
      return state.merge({
        hasNextAdditionInfo: action.hasNextAdditionInfo
      });
    case types.SEARCH_META_INFO:
      return state.merge({
        searchMetaInfo: action.searchMetaInfo
      });
    case types.SEARCH_META_INFO_ADDITION_INFO:
      return state.merge({
        searchMetaInfoAdditionInfo: action.searchMetaInfoAdditionInfo
      });
  }
  return state;
}

export function getSearchText(state) {
  return state.search.text;
}

export function getMeta(state) {
  return state.search.searchMetaInfo;
}

export function getCurrentResult(state) {
  return state.search.result;
}

export function getMetaAdditionInfo(state) {
  return state.search.searchMetaInfoAdditionInfo;
}

export function getCurrentAdditionInfo(state) {
  return state.search.popularQuestion;
}
