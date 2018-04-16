import * as types from "./actionTypes";
import SearchService from "../../services/search";
import * as searchSelectors from "../search/reducer";
import * as additionInfoSelectors from "./reducer";

export function setPopularType(selectPopularType) {
  return {
    type: types.SET_POPULAR_TYPE,
    selectPopularType: selectPopularType
  };
}

export function setPopularName(popularSelectName) {
  return {
    type: types.SET_POPULAR_NAME,
    popularSelectName: popularSelectName
  };
}

export function selectQuestionName(selectQuestionName) {
  return {
    type: types.GET_SELECT_QUESTION_TITLE,
    selectQuestionName: selectQuestionName
  };
}

export function selectQuestionId(selectQuestionId) {
  return {
    type: types.GET_SELECT_QUESTION_ID,
    selectQuestionId: selectQuestionId
  };
}

export function loadMoreQuestionInfo() {
  return (dispatch, getState) => {
    const currentMeta = additionInfoSelectors.getMetaQuestionInfo(getState());
    const currentResult = additionInfoSelectors.getCurrentQuestionInfo(
      getState()
    );
    const newMeta = {
      page: currentMeta.page + 1
    };
    dispatch({
      type: types.SEARCH_META_INFO_QUESTION_INFO,
      searchMetaInfoQuestionInfo: newMeta
    });
    const currentQuestionId = additionInfoSelectors.getSelectQuestionId(
      getState()
    );
    const fetchPromises = SearchService.getMoreAnswersByQustion(
      currentQuestionId,
      newMeta
    ).then(response => {
      dispatch({
        type: types.HAS_NEXT_QUESTION_ANSWER,
        hasNextQuestionAnswers: response.data.has_more
      });

      dispatch({
        type: types.GET_POPULAR_ANSWERS,
        popularAnswers: [...currentResult, ...response.data.items]
      });
    });
  };
}

export function isShowQuestonInfo(isShow) {
  return {
    type: types.SHOW_QUESTION_INFO,
    isShowQuestionInfo: isShow
  };
}

export function isShowAdditionInfo(isShow) {
  return {
    type: types.SHOW_ADDITION_INFO,
    isShowAdditionInfo: isShow
  };
}

export function getPopularQuestionAnswer(questionId) {
  return (dispatch, getState) => {
    const fetchPromises = SearchService.getAnswersByQustion(questionId).then(
      response => {
        dispatch({
          type: types.HAS_NEXT_QUESTION_ANSWER,
          hasNextQuestionAnswers: response.data.has_more
        });
        dispatch({
          type: types.GET_POPULAR_ANSWERS,
          popularAnswers: response.data.items
        });
      }
    );
  };
}
