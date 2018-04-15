import * as types from "./actionTypes";
import * as animateSelectors from "./reducer";

export function changeAnimateVisibleStatus(status) {
  return {
    type: types.CHANGE_ANIMATE_VISIBLE_STATUS,
    currentAuthor: !status
  };
}
