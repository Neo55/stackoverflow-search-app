import * as types from "./actionTypes";
import SearchService from "../../services/search";
import * as searchSelectors from "../search/reducer";

// export function startSearch() {
//   return {
//     type: types.START_SEARCH,
//     newSearch: true
//   };
// }

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

export function getAuthorName(authorId) {
  return {
    type: types.SET_AUTHOR_NAME,
    authorName: "Donald Trump"
  };

  //return (dispatch, getState) => {
  //const currentAuthor = searchSelectors.getSearchText(getState());
  //display_name
  // SearchService.getAuthoInfo(authorId).then(response => {
  //   debugger;
  //   dispatch({
  //     type: types.SET_AUTHOR_NAME,
  //     authorName: response.data.items[0].display_name
  //   });
  // });
  //};
}

// export function isShowQuestonInfo() {
//   return {
//     type: types.SELECT_AUTHOR,
//     isShowQuestionInfo: false
//   };
// }

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

export function getPopularQuestionAnswer() {
  return {
    type: types.GET_POPULAR_ANSWERS,
    popularAnswers: [
      {
        owner: {
          reputation: 186,
          user_id: 3461416,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/94c65d23e9b172b6f43457fd030ae5a4?s=128&d=identicon&r=PG",
          display_name: "konradk",
          link: "https://stackoverflow.com/users/3461416/konradk"
        },
        is_accepted: false,
        score: 6,
        last_activity_date: 1509699805,
        last_edit_date: 1509699805,
        creation_date: 1509696333,
        answer_id: 47091034,
        question_id: 30400104
      },
      {
        owner: {
          reputation: 3090,
          user_id: 452210,
          user_type: "registered",
          accept_rate: 75,
          profile_image:
            "https://www.gravatar.com/avatar/c10263904a524105c03e72cbaeaf2b5f?s=128&d=identicon&r=PG",
          display_name: "javabrett",
          link: "https://stackoverflow.com/users/452210/javabrett"
        },
        is_accepted: true,
        score: 7,
        last_activity_date: 1432817679,
        last_edit_date: 1432817679,
        creation_date: 1432815945,
        answer_id: 30506556,
        question_id: 30400104
      },
      {
        owner: {
          reputation: 669,
          user_id: 1988874,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/7fe769ae26b50048fb7a1220d682b0ad?s=128&d=identicon&r=PG",
          display_name: "Cyrille Pontvieux",
          link: "https://stackoverflow.com/users/1988874/cyrille-pontvieux"
        },
        is_accepted: false,
        score: -1,
        last_activity_date: 1432656952,
        creation_date: 1432656952,
        answer_id: 30463835,
        question_id: 30400104
      },
      {
        owner: {
          reputation: 1564,
          user_id: 4202262,
          user_type: "registered",
          accept_rate: 100,
          profile_image: "https://i.stack.imgur.com/nfbHB.jpg?s=128&g=1",
          display_name: "Sze-Hung Daniel Tsui",
          link: "https://stackoverflow.com/users/4202262/sze-hung-daniel-tsui"
        },
        is_accepted: false,
        score: -2,
        last_activity_date: 1432634136,
        last_edit_date: 1495535447,
        creation_date: 1432634136,
        answer_id: 30455235,
        question_id: 30400104
      },
      {
        owner: {
          reputation: 764585,
          user_id: 6309,
          user_type: "registered",
          accept_rate: 100,
          profile_image:
            "https://www.gravatar.com/avatar/7aa22372b695ed2b26052c340f9097eb?s=128&d=identicon&r=PG",
          display_name: "VonC",
          link: "https://stackoverflow.com/users/6309/vonc"
        },
        is_accepted: false,
        score: 6,
        last_activity_date: 1432632919,
        creation_date: 1432632919,
        answer_id: 30454776,
        question_id: 30400104
      },
      {
        owner: {
          reputation: 21715,
          user_id: 46194,
          user_type: "registered",
          accept_rate: 63,
          profile_image:
            "https://www.gravatar.com/avatar/4eca63bc630dcac855080d2871f73ee7?s=128&d=identicon&r=PG",
          display_name: "Klas Mellbourn",
          link: "https://stackoverflow.com/users/46194/klas-mellbourn"
        },
        is_accepted: false,
        score: 5,
        last_activity_date: 1432364036,
        last_edit_date: 1432364036,
        creation_date: 1432363574,
        answer_id: 30409801,
        question_id: 30400104
      }
    ]
  };
}
