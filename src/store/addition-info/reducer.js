import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

const initialState = Immutable({
  selectPopularType: "",
  popularSelectName: "",
  selectQuestionName: "",
  authorData: {
    id: "",
    name: ""
  },
  isShowQuestionInfo: false,
  isShowAdditionInfo: false,
  popularAnswers: [],
  searchMetaInfoQuestionInfo: {
    page: 1
  }
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_POPULAR_TYPE:
      return state.merge({
        selectPopularType: action.selectPopularType
      });
    case types.SET_POPULAR_NAME:
      return state.merge({
        popularSelectName: action.popularSelectName
      });
    case types.SET_AUTHOR_DATA:
      return state.merge({
        authorData: action.authorData
      });
    case types.SHOW_QUESTION_INFO:
      return state.merge({
        isShowQuestionInfo: action.isShowQuestionInfo
      });
    case types.SHOW_ADDITION_INFO:
      return state.merge({
        isShowAdditionInfo: action.isShowAdditionInfo
      });
    case types.GET_POPULAR_ANSWERS:
      return state.merge({
        popularAnswers: action.popularAnswers
      });
    case types.GET_SELECT_QUESTION_TITLE:
      return state.merge({
        selectQuestionName: action.selectQuestionName
      });
    case types.SEARCH_META_INFO_QUESTION_INFO:
      return state.merge({
        searchMetaInfoQuestionInfo: action.searchMetaInfoQuestionInfo
      });
  }
  return state;
}

export function getMetaQuestionInfo(state) {
  return state.additionInfo.searchMetaInfoQuestionInfo;
}

export function getCurrentQuestionInfo(state) {
  return state.additionInfo.popularAnswers;
}

export function getSelectPopularType(state) {
  return state.additionInfo.selectPopularType;
}

export function getSelectPopularName(state) {
  return state.additionInfo.popularSelectName;
}
