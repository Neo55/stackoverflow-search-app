import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  text: ""
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.START_SEARCH:
      console.log(action.text);
      return state.merge({
        text: action.text
      });
  }
  return state;
}
