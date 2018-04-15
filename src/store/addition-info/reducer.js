import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  selectPopularType: "",
  popularSelectName: "",
  authorName: "",
  isShowQuestionInfo: false,
  isShowAdditionInfo: false,
  popularAnswers: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_POPULAR_TYPE:
      //console.log(action.popularQuestionByAuthor);
      return state.merge({
        selectPopularType: action.selectPopularType
      });
    case types.SET_POPULAR_NAME:
      //console.log(action.popularQuestionByTag);
      return state.merge({
        popularSelectName: action.popularSelectName
      });
    case types.SET_AUTHOR_NAME:
      //console.log(action.popularQuestionByTag);
      return state.merge({
        authorName: action.authorName
      });
    case types.SHOW_QUESTION_INFO:
      //console.log(action.popularQuestionByTag);
      return state.merge({
        isShowQuestionInfo: action.isShowQuestionInfo
      });
    case types.SHOW_ADDITION_INFO:
      //console.log(action.popularQuestionByTag);
      return state.merge({
        isShowAdditionInfo: action.isShowAdditionInfo
      });
    case types.GET_POPULAR_ANSWERS:
      //console.log(action.popularQuestionByTag);
      return state.merge({
        popularAnswers: action.popularAnswers
      });
  }
  return state;
}

// export function getSearchResult(state) {
//   return state.topics.selectedTopicUrls;
// }
