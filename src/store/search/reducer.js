import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  text: "",
  result: [],
  popularQuestion: [],
  // currentAuthor: "",
  // currentTag: "",
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
      debugger;
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
    // case types.SELECT_AUTHOR:
    //   return state.merge({
    //     currentAuthor: action.currentAuthor
    //   });
    // case types.SELECT_TAG:
    //   debugger;
    //   return state.merge({
    //     currentTag: action.currentTag
    //   });
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

// export function getCurrentAuthor(state) {
//   return state.search.currentAuthor;
// }

// export function getCurrentTag(state) {
//   debugger;
//   return state.search.currentTag;
// }

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
