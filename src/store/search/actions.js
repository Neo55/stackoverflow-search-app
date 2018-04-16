import * as types from "./actionTypes";
import SearchService from "../../services/search";
import * as searchSelectors from "./reducer";
import * as additionSelectors from "../addition-info/reducer";

export function searchMetaInfo() {
  return {
    type: types.SEARCH_META_INFO,
    searchMetaInfo: searchMetaInfo
  };
}

export function changeSearchText(searchText) {
  return {
    type: types.STORE_SEARCH_TEXT,
    text: searchText
  };
}

export function loadMoreAdditionInfo() {
  return (dispatch, getState) => {
    const currentMeta = searchSelectors.getMetaAdditionInfo(getState());

    const currentResult = searchSelectors.getCurrentAdditionInfo(getState());
    const newMeta = {
      page: currentMeta.page + 1
    };

    const getSelectPopularType = additionSelectors.getSelectPopularType(
      getState()
    );

    dispatch({
      type: types.SEARCH_META_INFO_ADDITION_INFO,
      searchMetaInfoAdditionInfo: newMeta
    });

    if (getSelectPopularType === "тегу") {
      const fetchPromises = SearchService.getMoreDataPopularQuestionByTag(
        additionSelectors.getSelectPopularName(getState()),
        newMeta
      ).then(response => {
        dispatch({
          type: types.GET_POPULAR_QUESTION_BY_TAG,
          popularQuestion: [...currentResult, ...response.data.items]
        });
      });
    } else {
      const fetchPromises = SearchService.getMoreDataPopularQuestionByAuthorMoreData(
        additionSelectors.getSelectPopularName(getState()).id,
        newMeta
      ).then(response => {
        dispatch({
          type: types.GET_POPULAR_QUESTION_BY_AUTHOR,
          popularQuestion: [...currentResult, ...response.data.items]
        });
      });
    }
  };
}

export function loadMoreResult() {
  return (dispatch, getState) => {
    const currentMeta = searchSelectors.getMeta(getState());
    const currentResult = searchSelectors.getCurrentResult(getState());
    const newMeta = {
      page: currentMeta.page + 1
    };

    dispatch({
      type: types.SEARCH_META_INFO,
      searchMetaInfo: newMeta
    });

    const searchText = searchSelectors.getSearchText(getState());
    const fetchPromises = SearchService.searchMoreData(
      searchText,
      newMeta
    ).then(response => {
      dispatch({
        type: types.HAS_NEXT_RESULT,
        hasNextResult: response.data.has_more
      });
      dispatch({
        type: types.SET_SEARCH_RESULT,
        result: [...currentResult, ...response.data.items]
      });
    });
  };
}

export function startSearch(searchText) {
  return (dispatch, getState) => {
    SearchService.search(searchText).then(response => {
      dispatch({
        type: types.HAS_NEXT_RESULT,
        hasNextResult: response.data.has_more
      });
      dispatch({
        type: types.SET_SEARCH_RESULT,
        result: response.data.items
      });
    });
  };
}

export function searchPopularQuestionByAuthor(authorId) {
  return (dispatch, getState) => {
    SearchService.getPopularQuestionByAuthor(authorId).then(response => {
      dispatch({
        type: types.HAS_NEXT_ADDITION_INFO,
        hasNextAdditionInfo: response.data.has_more
      });
      dispatch({
        type: types.GET_POPULAR_QUESTION_BY_AUTHOR,
        popularQuestion: response.data.items
      });
    });
  };
}

export function searchPopularQuestionByTag(popularQuestions) {
  return (dispatch, getState) => {
    const selectedTag = additionSelectors.getSelectPopularName(getState());
    const fetchPromises = SearchService.getPopularQuestionByTag(
      selectedTag
    ).then(response => {
      dispatch({
        type: types.HAS_NEXT_ADDITION_INFO,
        hasNextAdditionInfo: response.data.has_more
      });

      dispatch({
        type: types.GET_POPULAR_QUESTION_BY_TAG,
        popularQuestion: response.data.items
      });
    });
  };
}
