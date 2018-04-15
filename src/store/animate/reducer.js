import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  mainSearchScreen: true,
  resultSearchScreen: true,
  questionScreen: true
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_ANIMATE_VISIBLE_STATUS:
      return state.merge({
        mainSearchScreen: action.status
      });
  }
  return state;
}

// export function getSearchText(state) {
//   return state.search.text;
// }
//
// export function getCurrentAuthor(state) {
//   return state.search.currentAuthor;
// }
//
// export function getCurrentTag(state) {
//   return state.search.currentTag;
// }
// export function getSearchResult(state) {
//   return state.topics.selectedTopicUrls;
// }
