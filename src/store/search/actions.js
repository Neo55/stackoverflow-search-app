import * as types from "./actionTypes";

export function startSearch(searchText) {
  return {
    type: types.START_SEARCH,
    text: searchText
  };
}
