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

// export function selectAuthor(author) {
//   return {
//     type: types.SELECT_AUTHOR,
//     currentAuthor: author
//   };
// }

// export function selectTag(tag) {
//   debugger;
//   return {
//     type: types.SELECT_TAG,
//     currentTag: tag
//   };
// }

export function loadMoreAdditionInfo() {
  return (dispatch, getState) => {
    const currentMeta = searchSelectors.getMetaAdditionInfo(getState());

    const currentResult = searchSelectors.getCurrentAdditionInfo(getState());
    const newMeta = {
      page: currentMeta.page + 1
    };

    debugger;
    // const searchTag = searchSelectors.getCurrentTag(getState());
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
        debugger
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
    // const fetchPromises = SearchService.searchMoreData(
    //   searchText,
    //   newMeta
    // ).then(response => {
    //   dispatch({
    //     type: types.SET_SEARCH_RESULT,
    //     result: [...currentResult, ...response.data.items]
    //   });
    // });
  };
}

export function startSearch(meta) {
  return {
    type: types.SET_SEARCH_RESULT,
    result: [
      {
        tags: ["extjs"],
        owner: {
          reputation: 469,
          user_id: 3043818,
          user_type: "registered",
          accept_rate: 15,
          profile_image: "https://i.stack.imgur.com/fe7Lb.jpg?s=128&g=1",
          display_name: "Greg Lafrance",
          link: "https://stackoverflow.com/users/3043818/greg-lafrance"
        },
        is_answered: true,
        view_count: 5199,
        accepted_answer_id: 23751009,
        answer_count: 1,
        score: 2,
        last_activity_date: 1456384907,
        creation_date: 1400552399,
        last_edit_date: 1400561853,
        question_id: 23750013,
        link:
          "https://stackoverflow.com/questions/23750013/how-do-i-dynamically-add-items-to-extjs-4-2-1-border-layout-region-containers",
        title:
          "How do I dynamically add items to ExtJS 4.2.1 border layout region containers?"
      },
      {
        tags: ["javascript", "web-services", "http", "rest", "extjs"],
        owner: {
          reputation: 11646,
          user_id: 218028,
          user_type: "registered",
          accept_rate: 84,
          profile_image: "https://i.stack.imgur.com/xLpyz.jpg?s=128&g=1",
          display_name: "HDave",
          link: "https://stackoverflow.com/users/218028/hdave"
        },
        is_answered: true,
        view_count: 2282,
        accepted_answer_id: 13852553,
        answer_count: 1,
        score: 2,
        last_activity_date: 1400939652,
        creation_date: 1355341458,
        last_edit_date: 1495542133,
        question_id: 13847374,
        link:
          "https://stackoverflow.com/questions/13847374/extjs-4-accessing-custom-reponse-headers-within-rest-proxy-and-or-store",
        title:
          "ExtJS 4 - Accessing custom reponse headers within REST proxy and/or store?"
      },
      {
        tags: ["javascript", "extjs", "extjs4.1"],
        owner: {
          reputation: 2066,
          user_id: 143191,
          user_type: "registered",
          accept_rate: 54,
          profile_image: "https://i.stack.imgur.com/KqGdj.png?s=128&g=1",
          display_name: "Kabeer",
          link: "https://stackoverflow.com/users/143191/kabeer"
        },
        is_answered: false,
        view_count: 101,
        answer_count: 1,
        score: 2,
        last_activity_date: 1385550197,
        creation_date: 1385529288,
        last_edit_date: 1385532765,
        question_id: 20234439,
        link:
          "https://stackoverflow.com/questions/20234439/how-can-i-prevent-extjs-menu-container-from-spilling-out-of-the-body",
        title:
          "How can I prevent ExtJs menu container from spilling out of the body?"
      },
      {
        tags: ["javascript", "extjs", "combobox", "extjs6-classic"],
        owner: {
          reputation: 5063,
          user_id: 1934903,
          user_type: "registered",
          accept_rate: 87,
          profile_image:
            "https://www.gravatar.com/avatar/76bdc41c55536cde6af2a7fc165ce0a0?s=128&d=identicon&r=PG",
          display_name: "Chris Schmitz",
          link: "https://stackoverflow.com/users/1934903/chris-schmitz"
        },
        is_answered: true,
        view_count: 2202,
        accepted_answer_id: 33430057,
        answer_count: 1,
        score: 2,
        last_activity_date: 1446186848,
        creation_date: 1446164674,
        question_id: 33426987,
        link:
          "https://stackoverflow.com/questions/33426987/setting-an-extjs-6-comboboxs-store-data-at-runtime-results-in-display-error",
        title:
          "Setting an extjs 6 combobox&#39;s store data at runtime results in display error"
      },
      {
        tags: ["extjs4"],
        owner: {
          reputation: 2668,
          user_id: 461880,
          user_type: "registered",
          accept_rate: 68,
          profile_image:
            "https://www.gravatar.com/avatar/e7b5c1d57731e90eb18cbc1edc334fee?s=128&d=identicon&r=PG",
          display_name: "frosty",
          link: "https://stackoverflow.com/users/461880/frosty"
        },
        is_answered: true,
        view_count: 8360,
        accepted_answer_id: 9081004,
        answer_count: 1,
        score: 2,
        last_activity_date: 1328019269,
        creation_date: 1327948084,
        last_edit_date: 1327948922,
        question_id: 9068842,
        link:
          "https://stackoverflow.com/questions/9068842/how-to-load-a-create-and-load-a-new-record-into-a-form-in-extjs-4-0",
        title:
          "how to load a create and load a new record into a form in extjs 4.0"
      },
      {
        tags: ["javascript", "extjs", "combobox"],
        owner: {
          reputation: 13,
          user_id: 1279626,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/a0bc5db349f912d65557c18175215339?s=128&d=identicon&r=PG&f=1",
          display_name: "gdc",
          link: "https://stackoverflow.com/users/1279626/gdc"
        },
        is_answered: true,
        view_count: 673,
        accepted_answer_id: 32783514,
        answer_count: 1,
        score: 2,
        last_activity_date: 1443188330,
        creation_date: 1443014426,
        question_id: 32740736,
        link:
          "https://stackoverflow.com/questions/32740736/extjs-combobox-configured-with-querymode-remote-and-forceselection-true-automa",
        title:
          "ExtJS ComboBox (configured with queryMode remote and forceSelection true) automatically clears input field"
      },
      {
        tags: ["extjs"],
        owner: {
          reputation: 11,
          user_id: 1935826,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/pgeBw.jpg?s=128&g=1",
          display_name: "qlc",
          link: "https://stackoverflow.com/users/1935826/qlc"
        },
        is_answered: false,
        view_count: 898,
        answer_count: 0,
        score: 2,
        last_activity_date: 1437421460,
        creation_date: 1361210957,
        last_edit_date: 1437421460,
        question_id: 14942663,
        link:
          "https://stackoverflow.com/questions/14942663/extjs-4-infinite-grid-hangs-on-loading-when-applying-sort-to-a-column",
        title:
          "ExtJS 4 infinite grid hangs on &quot;Loading...&quot; when applying sort to a column"
      },
      {
        tags: ["javascript", "extjs", "extjs4", "extjs4.1"],
        owner: {
          reputation: 1689,
          user_id: 1230594,
          user_type: "registered",
          accept_rate: 90,
          profile_image: "https://i.stack.imgur.com/a42bz.png?s=128&g=1",
          display_name: "Isaac",
          link: "https://stackoverflow.com/users/1230594/isaac"
        },
        is_answered: true,
        view_count: 1271,
        accepted_answer_id: 20319285,
        answer_count: 1,
        score: 2,
        last_activity_date: 1385945963,
        creation_date: 1385827249,
        question_id: 20302319,
        link:
          "https://stackoverflow.com/questions/20302319/how-to-change-an-extjs-components-rendertpl-after-its-been-initialized",
        title:
          "How to change an ExtJS component&#39;s renderTpl after it&#39;s been initialized?"
      },
      {
        tags: ["drag-and-drop", "extjs", "tree"],
        owner: {
          reputation: 3818,
          user_id: 62361,
          user_type: "registered",
          accept_rate: 76,
          profile_image:
            "https://www.gravatar.com/avatar/cf3f5dda4a8d1034fdbee468a288640e?s=128&d=identicon&r=PG",
          display_name: "Chau",
          link: "https://stackoverflow.com/users/62361/chau"
        },
        is_answered: true,
        view_count: 1338,
        accepted_answer_id: 3635951,
        answer_count: 1,
        score: 2,
        last_activity_date: 1283518790,
        creation_date: 1282118279,
        last_edit_date: 1283241058,
        question_id: 3510016,
        link:
          "https://stackoverflow.com/questions/3510016/wanted-directions-ideas-for-a-custom-tree-to-tree-dragndrop-implementation-in",
        title:
          "Wanted: Directions/ideas for a custom tree-to-tree drag&#39;n&#39;drop implementation in ExtJS"
      },
      {
        tags: ["javascript", "extjs", "sencha-architect", "extjs4.2"],
        owner: {
          reputation: 174,
          user_id: 2459115,
          user_type: "registered",
          accept_rate: 33,
          profile_image: "https://i.stack.imgur.com/2VyZD.jpg?s=128&g=1",
          display_name: "Anand Singh",
          link: "https://stackoverflow.com/users/2459115/anand-singh"
        },
        is_answered: true,
        view_count: 9684,
        answer_count: 3,
        score: 2,
        last_activity_date: 1425673904,
        creation_date: 1372321654,
        question_id: 17338276,
        link:
          "https://stackoverflow.com/questions/17338276/how-to-check-all-the-checkboxes-in-checkbox-group-in-extjs",
        title: "How to check all the checkboxes in checkbox group in extjs?"
      },
      {
        tags: ["javascript", "extjs", "extjs3"],
        owner: {
          reputation: 1579,
          user_id: 1364646,
          user_type: "registered",
          accept_rate: 65,
          profile_image:
            "https://www.gravatar.com/avatar/6f1d61bcd9f8c9ec1314718f42186bb7?s=128&d=identicon&r=PG",
          display_name: "Anurag Sharma",
          link: "https://stackoverflow.com/users/1364646/anurag-sharma"
        },
        is_answered: true,
        view_count: 677,
        accepted_answer_id: 11993453,
        answer_count: 1,
        score: 2,
        last_activity_date: 1345142459,
        creation_date: 1345142070,
        question_id: 11993352,
        link:
          "https://stackoverflow.com/questions/11993352/disable-mouse-click-on-grid-when-ext-window-is-open-extjs-3",
        title: "disable mouse click on grid when ext.window is open extjs 3"
      },
      {
        tags: ["extjs"],
        owner: {
          user_type: "does_not_exist",
          display_name: "user1920442"
        },
        is_answered: true,
        view_count: 1272,
        accepted_answer_id: 14152796,
        answer_count: 1,
        score: 2,
        last_activity_date: 1357285139,
        creation_date: 1357283449,
        question_id: 14152748,
        link:
          "https://stackoverflow.com/questions/14152748/how-to-store-the-data-from-the-servlet-to-the-grid-in-extjs",
        title: "How to store the data from the servlet to the Grid in ExtJs?"
      },
      {
        tags: ["sencha-touch", "extjs", "sencha-touch-2"],
        owner: {
          reputation: 1673,
          user_id: 419935,
          user_type: "registered",
          accept_rate: 63,
          profile_image:
            "https://www.gravatar.com/avatar/e22f83b5d5bf992edda0c57549805ec0?s=128&d=identicon&r=PG",
          display_name: "Dominic Watson",
          link: "https://stackoverflow.com/users/419935/dominic-watson"
        },
        is_answered: true,
        view_count: 3306,
        answer_count: 1,
        score: 2,
        last_activity_date: 1343482784,
        creation_date: 1343385658,
        last_edit_date: 1343405131,
        question_id: 11686206,
        link:
          "https://stackoverflow.com/questions/11686206/extjs-sencha-touch-2-how-to-grab-an-element-component-with-multiple-classes-in",
        title:
          "ExtJS/Sencha Touch 2 - How to grab an element/component with multiple classes in"
      },
      {
        tags: ["extjs", "extjs4.1"],
        owner: {
          reputation: 13,
          user_id: 1682928,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/6b0446d1adf8581f47aad19df94f4628?s=128&d=identicon&r=PG",
          display_name: "alind",
          link: "https://stackoverflow.com/users/1682928/alind"
        },
        is_answered: true,
        view_count: 1979,
        accepted_answer_id: 12499743,
        answer_count: 1,
        score: 2,
        last_activity_date: 1348698570,
        creation_date: 1348055701,
        last_edit_date: 1348698570,
        question_id: 12494203,
        link:
          "https://stackoverflow.com/questions/12494203/how-to-allow-only-positive-numbers-in-numeric-filter-in-grid-in-extjs",
        title:
          "how to allow only positive numbers in numeric filter in grid in extjs"
      },
      {
        tags: ["web-applications", "extjs", "extjs4"],
        owner: {
          reputation: 376,
          user_id: 261299,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/6bbe1b43bc443720d47a327667bc7b55?s=128&d=identicon&r=PG",
          display_name: "devinallenaz",
          link: "https://stackoverflow.com/users/261299/devinallenaz"
        },
        is_answered: false,
        view_count: 3650,
        answer_count: 1,
        score: 2,
        last_activity_date: 1336157290,
        creation_date: 1316624808,
        last_edit_date: 1316677328,
        question_id: 7503761,
        link:
          "https://stackoverflow.com/questions/7503761/is-there-a-way-to-get-all-controllers-in-an-extjs-4-0-application",
        title:
          "Is there a way to get all controllers in an ExtJS 4.0 application"
      },
      {
        tags: ["javascript", "templates", "extjs", "extjs4", "render"],
        owner: {
          reputation: 18,
          user_id: 4266595,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/12f561067dbdb37b1e0fda76ff3b8245?s=128&d=identicon&r=PG",
          display_name: "Daniel Sauble",
          link: "https://stackoverflow.com/users/4266595/daniel-sauble"
        },
        is_answered: false,
        view_count: 673,
        answer_count: 0,
        score: 2,
        last_activity_date: 1416332085,
        creation_date: 1416331724,
        last_edit_date: 1495540360,
        question_id: 27000332,
        link:
          "https://stackoverflow.com/questions/27000332/render-extjs-components-into-a-grid-column-once-renderer-has-run",
        title:
          "Render extjs components into a grid column once renderer has run"
      },
      {
        tags: ["extjs", "textfield"],
        owner: {
          reputation: 75,
          user_id: 1490608,
          user_type: "registered",
          accept_rate: 43,
          profile_image:
            "https://www.gravatar.com/avatar/88372d887a39a221cb1993d4046fd17a?s=128&d=identicon&r=PG",
          display_name: "ramya sri",
          link: "https://stackoverflow.com/users/1490608/ramya-sri"
        },
        is_answered: true,
        view_count: 5841,
        accepted_answer_id: 15441239,
        answer_count: 1,
        score: 2,
        last_activity_date: 1363858321,
        creation_date: 1363320093,
        last_edit_date: 1363755258,
        question_id: 15424484,
        link:
          "https://stackoverflow.com/questions/15424484/how-to-change-the-fieldcls-of-a-textfield-dynamically-in-extjs",
        title: "How to change the fieldCls of a textfield dynamically in extjs?"
      },
      {
        tags: ["sorting", "extjs", "pagination", "extjs4.2", "extjs-stores"],
        owner: {
          reputation: 11444,
          user_id: 1951708,
          user_type: "registered",
          accept_rate: 90,
          profile_image: "https://i.stack.imgur.com/uUTYl.jpg?s=128&g=1",
          display_name: "Lorenz Meyer",
          link: "https://stackoverflow.com/users/1951708/lorenz-meyer"
        },
        is_answered: true,
        view_count: 6201,
        accepted_answer_id: 22401745,
        answer_count: 6,
        score: 2,
        last_activity_date: 1402987352,
        creation_date: 1390969337,
        question_id: 21422041,
        link:
          "https://stackoverflow.com/questions/21422041/extjs-paging-and-buffering-grid-based-on-remote-data-without-remote-paging-and",
        title:
          "ExtJs - paging and buffering grid based on remote data WITHOUT remote paging and filtering"
      },
      {
        tags: ["extjs", "window", "submit", "new-operator", "formpanel"],
        owner: {
          reputation: 1381,
          user_id: 329001,
          user_type: "registered",
          accept_rate: 67,
          profile_image:
            "https://www.gravatar.com/avatar/14d40048caaf558273d7c97e9681e0a1?s=128&d=identicon&r=PG",
          display_name: "TekTimmy",
          link: "https://stackoverflow.com/users/329001/tektimmy"
        },
        is_answered: true,
        view_count: 8817,
        answer_count: 2,
        score: 2,
        last_activity_date: 1445607430,
        creation_date: 1306488437,
        question_id: 6150301,
        link:
          "https://stackoverflow.com/questions/6150301/extjs-open-a-new-window-when-formpanel-submit-function-is-used",
        title: "extjs: open a new window when FormPanel submit function is used"
      },
      {
        tags: [
          "javascript",
          "gridview",
          "user-interface",
          "event-handling",
          "extjs4"
        ],
        owner: {
          reputation: 1363,
          user_id: 192694,
          user_type: "registered",
          accept_rate: 97,
          profile_image:
            "https://www.gravatar.com/avatar/24157024446fccea5b94c7b9a0d5c86a?s=128&d=identicon&r=PG",
          display_name: "Bill Dami",
          link: "https://stackoverflow.com/users/192694/bill-dami"
        },
        is_answered: true,
        view_count: 2577,
        accepted_answer_id: 6170803,
        answer_count: 2,
        score: 2,
        last_activity_date: 1309995206,
        creation_date: 1306281652,
        question_id: 6118190,
        link:
          "https://stackoverflow.com/questions/6118190/show-custom-menu-on-row-hover-in-an-extjs-4-grid",
        title: "Show custom menu on row hover in an ExtJS 4 Grid"
      },
      {
        tags: ["extjs"],
        owner: {
          reputation: 2015,
          user_id: 441493,
          user_type: "registered",
          accept_rate: 57,
          profile_image:
            "https://www.gravatar.com/avatar/5d9c5222f4fc6701461a191703b23034?s=128&d=identicon&r=PG",
          display_name: "complez",
          link: "https://stackoverflow.com/users/441493/complez"
        },
        is_answered: true,
        view_count: 655,
        accepted_answer_id: 9733129,
        answer_count: 1,
        score: 2,
        last_activity_date: 1331880911,
        creation_date: 1331880740,
        question_id: 9733107,
        link:
          "https://stackoverflow.com/questions/9733107/extjs-slideout-animation-doesnot-work-when-i-put-a-duration-on-it",
        title:
          "extjs, Slideout animation doesnot work when I put a duration on it"
      },
      {
        tags: ["extjs", "textarea", "border", "styling"],
        owner: {
          reputation: 17848,
          user_id: 136141,
          user_type: "registered",
          accept_rate: 67,
          profile_image:
            "https://www.gravatar.com/avatar/9112efedbb61459c9a737beb2dc2277e?s=128&d=identicon&r=PG",
          display_name: "pencilCake",
          link: "https://stackoverflow.com/users/136141/pencilcake"
        },
        is_answered: true,
        view_count: 6875,
        accepted_answer_id: 3043602,
        answer_count: 1,
        score: 2,
        last_activity_date: 1351533605,
        creation_date: 1276589870,
        question_id: 3043522,
        link:
          "https://stackoverflow.com/questions/3043522/how-can-i-remove-the-border-of-a-textarea-in-extjs",
        title: "How can I remove the border of a textArea in extJs?"
      },
      {
        tags: ["javascript", "layout", "panel", "extjs"],
        owner: {
          reputation: 15881,
          user_id: 231002,
          user_type: "registered",
          accept_rate: 78,
          profile_image:
            "https://www.gravatar.com/avatar/e75162db7f21527c1e20da48be36f622?s=128&d=identicon&r=PG",
          display_name: "KallDrexx",
          link: "https://stackoverflow.com/users/231002/kalldrexx"
        },
        is_answered: true,
        view_count: 2746,
        accepted_answer_id: 4481184,
        answer_count: 1,
        score: 2,
        last_activity_date: 1292722424,
        creation_date: 1292709609,
        last_edit_date: 1292714245,
        question_id: 4480405,
        link:
          "https://stackoverflow.com/questions/4480405/why-will-my-extjs-tab-will-not-show-items-with-a-border-layout",
        title: "Why will my ExtJS tab will not show items with a border layout"
      },
      {
        tags: ["extjs", "extjs4.2"],
        owner: {
          reputation: 42225,
          user_id: 177800,
          user_type: "registered",
          accept_rate: 78,
          profile_image:
            "https://www.gravatar.com/avatar/12356ae4540e9286f4984eb7beef801e?s=128&d=identicon&r=PG",
          display_name: "Jarrod Roberson",
          link: "https://stackoverflow.com/users/177800/jarrod-roberson"
        },
        is_answered: true,
        view_count: 1261,
        accepted_answer_id: 17466772,
        answer_count: 2,
        score: 2,
        last_activity_date: 1372954643,
        creation_date: 1372913987,
        question_id: 17462165,
        link:
          "https://stackoverflow.com/questions/17462165/how-to-insert-another-component-between-the-label-and-textfield-in-the-extjs-tex",
        title:
          "How to insert another component between the Label and TextField in the ExtJS TextField component?"
      },
      {
        tags: ["javascript", "extjs", "charts", "extjs4", "series"],
        owner: {
          reputation: 653,
          user_id: 1618292,
          user_type: "registered",
          accept_rate: 76,
          profile_image:
            "https://www.gravatar.com/avatar/6d16df89f336e982eb8272dec3a15956?s=128&d=identicon&r=PG",
          display_name: "alex9311",
          link: "https://stackoverflow.com/users/1618292/alex9311"
        },
        is_answered: true,
        view_count: 385,
        accepted_answer_id: 14742243,
        answer_count: 1,
        score: 2,
        last_activity_date: 1360201888,
        creation_date: 1359652213,
        question_id: 14631336,
        link:
          "https://stackoverflow.com/questions/14631336/extjs-scatter-plot-highlight-certain-points-according-to-flag-in-data",
        title:
          "ExtJS Scatter Plot, Highlight Certain Points According to Flag in Data"
      },
      {
        tags: ["date", "types", "extjs4", "field", "jsonstore"],
        owner: {
          reputation: 51,
          user_id: 1865797,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/b55f71484319ded8b017b9fb4b7407a9?s=128&d=identicon&r=PG",
          display_name: "jdl_sopra",
          link: "https://stackoverflow.com/users/1865797/jdl-sopra"
        },
        is_answered: false,
        view_count: 188,
        answer_count: 1,
        score: 2,
        last_activity_date: 1354527961,
        creation_date: 1354267475,
        question_id: 13642234,
        link:
          "https://stackoverflow.com/questions/13642234/how-can-i-access-a-date-typed-field-from-an-extjs-jsonstore",
        title: "How can I access a date typed field from an ExtJS JSonStore?"
      },
      {
        tags: ["php", "html", "ajax", "extjs", "extjs4"],
        owner: {
          reputation: 67,
          user_id: 1859940,
          user_type: "registered",
          accept_rate: 78,
          profile_image:
            "https://www.gravatar.com/avatar/218103b40bb5220b70eec0d8d53d3738?s=128&d=identicon&r=PG",
          display_name: "ravi9999",
          link: "https://stackoverflow.com/users/1859940/ravi9999"
        },
        is_answered: true,
        view_count: 1291,
        accepted_answer_id: 14520863,
        answer_count: 1,
        score: 2,
        last_activity_date: 1375781975,
        creation_date: 1358865627,
        last_edit_date: 1375781975,
        question_id: 14461096,
        link:
          "https://stackoverflow.com/questions/14461096/when-click-on-node-in-tree-panel-then-active-tab-reload-in-tabpanel-in-extjs-4",
        title:
          "when click on node in tree panel then active tab reload in tabpanel in extjs 4"
      },
      {
        tags: ["extjs"],
        owner: {
          reputation: 13,
          user_id: 1089989,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/7b29be2c39dafec979030fa022b90cc6?s=128&d=identicon&r=PG",
          display_name: "vineet",
          link: "https://stackoverflow.com/users/1089989/vineet"
        },
        is_answered: false,
        view_count: 633,
        answer_count: 0,
        score: 2,
        last_activity_date: 1397156926,
        creation_date: 1326206116,
        last_edit_date: 1397156926,
        question_id: 8804945,
        link:
          "https://stackoverflow.com/questions/8804945/checkboxselectionmodel-is-not-checked-when-it-frozen-locked-in-extjs-grid",
        title:
          "CheckBoxSelectionModel is not checked when it frozen (locked) in ExtJs grid"
      },
      {
        tags: ["sorting", "extjs", "gridpanel"],
        owner: {
          reputation: 484,
          user_id: 4635947,
          user_type: "registered",
          accept_rate: 71,
          profile_image: "https://i.stack.imgur.com/9vmTD.jpg?s=128&g=1",
          display_name: "Aditya Korti",
          link: "https://stackoverflow.com/users/4635947/aditya-korti"
        },
        is_answered: true,
        view_count: 664,
        accepted_answer_id: 34399324,
        answer_count: 1,
        score: 2,
        last_activity_date: 1450712392,
        creation_date: 1450694731,
        question_id: 34393842,
        link:
          "https://stackoverflow.com/questions/34393842/column-header-shows-arrow-icon-after-sortable-is-false-in-extjs-grid",
        title:
          "Column header shows arrow icon after sortable is false in ExtJs grid"
      },
      {
        tags: ["extjs"],
        owner: {
          reputation: 52,
          user_id: 1702486,
          user_type: "registered",
          accept_rate: 46,
          profile_image:
            "https://www.gravatar.com/avatar/6308a533ea3312ba8fc5ea4a28124a7d?s=128&d=identicon&r=PG",
          display_name: "user1702486",
          link: "https://stackoverflow.com/users/1702486/user1702486"
        },
        is_answered: true,
        view_count: 6969,
        answer_count: 3,
        score: 2,
        last_activity_date: 1409729109,
        creation_date: 1362581467,
        last_edit_date: 1362581554,
        question_id: 15250481,
        link:
          "https://stackoverflow.com/questions/15250481/how-to-auto-select-a-grid-record-in-extjs-by-using-id",
        title: "how to auto select a grid record in extjs by using id?"
      },
      {
        tags: ["extjs"],
        owner: {
          reputation: 469,
          user_id: 3043818,
          user_type: "registered",
          accept_rate: 15,
          profile_image: "https://i.stack.imgur.com/fe7Lb.jpg?s=128&g=1",
          display_name: "Greg Lafrance",
          link: "https://stackoverflow.com/users/3043818/greg-lafrance"
        },
        is_answered: true,
        view_count: 5508,
        accepted_answer_id: 20666967,
        answer_count: 1,
        score: 2,
        last_activity_date: 1387395704,
        creation_date: 1387379556,
        last_edit_date: 1387393916,
        question_id: 20661728,
        link:
          "https://stackoverflow.com/questions/20661728/in-extjs-4-2-2-why-does-loadrecord-load-data-but-form-does-not-reflect-new-d",
        title:
          "In ExtJS 4.2.2, why does loadRecord() load data, but form does not reflect new data?"
      },
      {
        tags: ["javascript", "extjs", "extjs4.1"],
        owner: {
          reputation: 195,
          user_id: 1242355,
          user_type: "registered",
          accept_rate: 89,
          profile_image:
            "https://www.gravatar.com/avatar/1cd82668c12c8d9108ecf6644bcea5ad?s=128&d=identicon&r=PG",
          display_name: "nilesh",
          link: "https://stackoverflow.com/users/1242355/nilesh"
        },
        is_answered: true,
        view_count: 3514,
        accepted_answer_id: 11548161,
        answer_count: 1,
        score: 2,
        last_activity_date: 1377088915,
        creation_date: 1342612800,
        last_edit_date: 1377088915,
        question_id: 11540855,
        link:
          "https://stackoverflow.com/questions/11540855/in-extjs-get-textfield-value-which-is-inside-the-custom-fieldcontainer",
        title:
          "In Extjs get textfield value which is inside the custom fieldcontainer"
      },
      {
        tags: ["javascript", "extjs", "extjs4", "extjs4.2"],
        owner: {
          reputation: 2331,
          user_id: 395890,
          user_type: "registered",
          accept_rate: 65,
          profile_image: "https://i.stack.imgur.com/JaApu.jpg?s=128&g=1",
          display_name: "AMember",
          link: "https://stackoverflow.com/users/395890/amember"
        },
        is_answered: false,
        view_count: 110,
        answer_count: 0,
        score: 2,
        last_activity_date: 1432564555,
        creation_date: 1432564555,
        question_id: 30440742,
        link:
          "https://stackoverflow.com/questions/30440742/extjs-rtl-the-column-headers-row-is-not-horizontally-synched-with-the-table",
        title:
          "ExtJS RTL: The Column headers row is not horizontally synched with the table"
      },
      {
        tags: ["javascript", "extjs", "javascript-framework", "summary"],
        owner: {
          reputation: 4136,
          user_id: 16039,
          user_type: "registered",
          accept_rate: 65,
          profile_image:
            "https://www.gravatar.com/avatar/e28e868b91f8975d71f4d40a680117fe?s=128&d=identicon&r=PG",
          display_name: "vaske",
          link: "https://stackoverflow.com/users/16039/vaske"
        },
        is_answered: false,
        view_count: 3615,
        answer_count: 0,
        score: 2,
        last_activity_date: 1442091790,
        creation_date: 1306328014,
        last_edit_date: 1442091790,
        question_id: 6124773,
        link:
          "https://stackoverflow.com/questions/6124773/extjs-summary-of-column-which-values-has-multiplication-of-previous-2-columns",
        title:
          "extjs summary of column which values has multiplication of previous 2 columns"
      },
      {
        tags: ["javascript", "extjs", "extjs3", "treepanel"],
        owner: {
          reputation: 110,
          user_id: 5559240,
          user_type: "registered",
          accept_rate: 0,
          profile_image: "https://i.stack.imgur.com/xSYgo.jpg?s=128&g=1",
          display_name: "PraveenKumar S",
          link: "https://stackoverflow.com/users/5559240/praveenkumar-s"
        },
        is_answered: true,
        view_count: 177,
        answer_count: 2,
        score: 2,
        last_activity_date: 1489064601,
        creation_date: 1485349823,
        last_edit_date: 1485353856,
        question_id: 41852492,
        link:
          "https://stackoverflow.com/questions/41852492/how-to-show-parent-and-its-child-when-filtering-extjs-treepanel-parentnode",
        title:
          "How to show parent and its child when filtering Extjs Treepanel parentNode"
      },
      {
        tags: ["extjs4", "extjs4.1"],
        owner: {
          reputation: 1016,
          user_id: 856753,
          user_type: "registered",
          accept_rate: 90,
          profile_image:
            "https://www.gravatar.com/avatar/57b2b7a464cf0b3f734d89262ce5f306?s=128&d=identicon&r=PG",
          display_name: "Micheal",
          link: "https://stackoverflow.com/users/856753/micheal"
        },
        is_answered: false,
        view_count: 1631,
        answer_count: 1,
        score: 2,
        last_activity_date: 1400811547,
        creation_date: 1354579949,
        question_id: 13694059,
        link:
          "https://stackoverflow.com/questions/13694059/extjs-4-theming-issues-in-ie9-gridbar-color-and-buttons-do-not-change",
        title:
          "extjs 4 theming issues in IE9, gridbar color and buttons do not change"
      },
      {
        tags: ["extjs", "extjs4"],
        owner: {
          reputation: 2938,
          user_id: 2667065,
          user_type: "registered",
          accept_rate: 76,
          profile_image: "https://i.stack.imgur.com/EkSAl.jpg?s=128&g=1",
          display_name: "Sergey Novikov",
          link: "https://stackoverflow.com/users/2667065/sergey-novikov"
        },
        is_answered: true,
        view_count: 1149,
        accepted_answer_id: 29783325,
        answer_count: 1,
        score: 2,
        last_activity_date: 1429651163,
        creation_date: 1429621600,
        last_edit_date: 1429630061,
        question_id: 29773103,
        link:
          "https://stackoverflow.com/questions/29773103/extjs-4-tree-store-load-remote-data-and-work-with-it-locally",
        title: "ExtJS 4 Tree Store Load remote data and work with it locally"
      },
      {
        tags: ["coldfusion", "extjs"],
        owner: {
          reputation: 3179,
          user_id: 120234,
          user_type: "registered",
          accept_rate: 73,
          profile_image:
            "https://www.gravatar.com/avatar/3b7c78b900daef389007ec8734b18c79?s=128&d=identicon&r=PG",
          display_name: "marc esher",
          link: "https://stackoverflow.com/users/120234/marc-esher"
        },
        is_answered: true,
        view_count: 967,
        accepted_answer_id: 1997287,
        answer_count: 1,
        score: 2,
        last_activity_date: 1262573631,
        creation_date: 1262479710,
        question_id: 1993515,
        link:
          "https://stackoverflow.com/questions/1993515/how-do-you-set-typeahead-true-on-a-coldfusion-9-extjs-grid-column",
        title:
          "How do you set typeAhead=true on a ColdFusion 9 EXTJS Grid column?"
      },
      {
        tags: ["forms", "google-chrome", "extjs6-modern"],
        owner: {
          reputation: 11,
          user_id: 6159530,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/GKpRq.png?s=128&g=1",
          display_name: "Harish",
          link: "https://stackoverflow.com/users/6159530/harish"
        },
        is_answered: true,
        view_count: 1142,
        answer_count: 1,
        score: 2,
        last_activity_date: 1491888461,
        creation_date: 1490360780,
        question_id: 43000292,
        link:
          "https://stackoverflow.com/questions/43000292/getting-form-submission-canceled-because-the-form-is-not-connected-error-in-ch",
        title:
          "Getting &quot;Form submission canceled because the form is not connected&quot; error in chrome with extjs 6"
      },
      {
        tags: ["javascript", "json", "extjs", "grid", "store"],
        owner: {
          reputation: 1820,
          user_id: 220255,
          user_type: "registered",
          accept_rate: 73,
          profile_image:
            "https://www.gravatar.com/avatar/f971b4f294f2a834a1cca619a4663376?s=128&d=identicon&r=PG",
          display_name: "abolotnov",
          link: "https://stackoverflow.com/users/220255/abolotnov"
        },
        is_answered: true,
        view_count: 8773,
        answer_count: 3,
        score: 2,
        last_activity_date: 1369422099,
        creation_date: 1305402229,
        last_edit_date: 1369422099,
        question_id: 6004386,
        link:
          "https://stackoverflow.com/questions/6004386/extjs-grid-filters-how-can-i-load-list-filter-options-from-external-json",
        title:
          "ExtJS grid filters: how can I load &#39;list&#39; filter options from external json?"
      },
      {
        tags: ["extjs4"],
        owner: {
          reputation: 543,
          user_id: 1981977,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/4DdGj.jpg?s=128&g=1",
          display_name: "Sasha Brocato",
          link: "https://stackoverflow.com/users/1981977/sasha-brocato"
        },
        is_answered: true,
        view_count: 4725,
        accepted_answer_id: 17187851,
        answer_count: 2,
        score: 2,
        last_activity_date: 1406303674,
        creation_date: 1371588069,
        question_id: 17178509,
        link:
          "https://stackoverflow.com/questions/17178509/what-is-the-difference-between-activate-and-show-events-on-ext-panel-panel-i",
        title:
          "What is the difference between &quot;activate&quot; and &quot;show&quot; events on Ext.panel.Panel in Extjs 4?"
      },
      {
        tags: ["javascript", "extjs", "extjs4", "jasmine"],
        owner: {
          reputation: 11,
          user_id: 5178410,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/5cd5255fdd03e1ca4591628de7bf3b5a?s=128&d=identicon&r=PG&f=1",
          display_name: "mlif2015",
          link: "https://stackoverflow.com/users/5178410/mlif2015"
        },
        is_answered: false,
        view_count: 520,
        answer_count: 0,
        score: 2,
        last_activity_date: 1438359179,
        creation_date: 1438359179,
        question_id: 31750664,
        link:
          "https://stackoverflow.com/questions/31750664/how-do-i-unit-test-a-custom-extjs-component-using-jasmine",
        title: "How do I unit test a custom ExtJS component using Jasmine"
      },
      {
        tags: ["javascript", "if-statement", "extjs", "bind", "viewmodel"],
        owner: {
          reputation: 325,
          user_id: 7163711,
          user_type: "registered",
          accept_rate: 100,
          profile_image:
            "https://lh4.googleusercontent.com/-Vln82v5x6-0/AAAAAAAAAAI/AAAAAAAAARQ/Ym39w2T_8Qs/photo.jpg?sz=128",
          display_name: "Nuri Engin",
          link: "https://stackoverflow.com/users/7163711/nuri-engin"
        },
        is_answered: true,
        view_count: 36,
        accepted_answer_id: 49446471,
        answer_count: 2,
        score: 2,
        last_activity_date: 1521798731,
        creation_date: 1521792309,
        question_id: 49444972,
        link:
          "https://stackoverflow.com/questions/49444972/extjs-is-possible-to-state-if-else-condition-for-bind-in-grid-panel",
        title:
          "ExtJS: Is possible to state if else condition for bind in grid panel?"
      },
      {
        tags: ["extjs4", "resteasy", "jboss6.x"],
        owner: {
          reputation: 138,
          user_id: 1449579,
          user_type: "registered",
          accept_rate: 50,
          profile_image:
            "https://www.gravatar.com/avatar/e9bbadd7552d164aaa9276fa5e3f080f?s=128&d=identicon&r=PG",
          display_name: "Harry",
          link: "https://stackoverflow.com/users/1449579/harry"
        },
        is_answered: false,
        view_count: 1323,
        answer_count: 1,
        score: 2,
        last_activity_date: 1347371816,
        creation_date: 1339447319,
        question_id: 10987237,
        link:
          "https://stackoverflow.com/questions/10987237/extjs-4-file-upload-with-resteasy-2-3-0-ga-invalid-json-response",
        title:
          "ExtJs 4 File upload with RESTEasy 2.3.0.GA , Invalid JSON response"
      },
      {
        tags: ["extjs", "popup", "lost-focus"],
        owner: {
          reputation: 35248,
          user_id: 263521,
          user_type: "registered",
          accept_rate: 88,
          profile_image:
            "https://www.gravatar.com/avatar/dbafc73d58041058f078ecf1de067f0b?s=128&d=identicon&r=PG",
          display_name: "Sephy",
          link: "https://stackoverflow.com/users/263521/sephy"
        },
        is_answered: true,
        view_count: 901,
        accepted_answer_id: 9067186,
        answer_count: 2,
        score: 2,
        last_activity_date: 1386114953,
        creation_date: 1326816311,
        last_edit_date: 1326876692,
        question_id: 8897816,
        link:
          "https://stackoverflow.com/questions/8897816/prevent-textbox-lost-of-focus-in-popup-when-onmouseover-is-triggered-on-another",
        title:
          "Prevent textbox lost of focus in popup when onmouseover is triggered on another div (extjs)"
      },
      {
        tags: ["json", "extjs"],
        owner: {
          reputation: 13,
          user_id: 1790163,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/a5478c707ac1500d7335985a2eeb65ab?s=128&d=identicon&r=PG",
          display_name: "user1790163",
          link: "https://stackoverflow.com/users/1790163/user1790163"
        },
        is_answered: true,
        view_count: 3036,
        accepted_answer_id: 13170085,
        answer_count: 1,
        score: 2,
        last_activity_date: 1351736735,
        creation_date: 1351735122,
        last_edit_date: 1351736735,
        question_id: 13169970,
        link:
          "https://stackoverflow.com/questions/13169970/extjs-4-panel-grid-using-jsonstore-is-not-loading-the-grid",
        title: "ExtJS 4 Panel Grid using JsonStore is not loading the grid"
      },
      {
        tags: ["extjs", "grid", "extjs4", "panel"],
        owner: {
          reputation: 11,
          user_id: 2010109,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/1e86f6521736319591a93bcb05dfadf9?s=128&d=identicon&r=PG",
          display_name: "user2010109",
          link: "https://stackoverflow.com/users/2010109/user2010109"
        },
        is_answered: false,
        view_count: 2231,
        answer_count: 1,
        score: 2,
        last_activity_date: 1414508878,
        creation_date: 1369655878,
        last_edit_date: 1370335436,
        question_id: 16772728,
        link:
          "https://stackoverflow.com/questions/16772728/extjs-pagingtoolbar-is-not-getting-dynamically-updated-when-the-filters-are-appl",
        title:
          "ExtJs pagingtoolbar is not getting dynamically updated when the filters are applied on the Panel"
      },
      {
        tags: ["extjs"],
        owner: {
          reputation: 195,
          user_id: 1201192,
          user_type: "registered",
          accept_rate: 64,
          profile_image:
            "https://www.gravatar.com/avatar/d34e2c8adf9b1273f600d26376006476?s=128&d=identicon&r=PG",
          display_name: "user27",
          link: "https://stackoverflow.com/users/1201192/user27"
        },
        is_answered: true,
        view_count: 3736,
        answer_count: 2,
        score: 2,
        last_activity_date: 1330671207,
        creation_date: 1330611915,
        question_id: 9517892,
        link:
          "https://stackoverflow.com/questions/9517892/how-to-keep-if-condition-to-check-the-browser-is-ie-in-extjs",
        title: "How to keep if condition to check the browser is IE in extjs?"
      }
    ]
  };

  // SearchService.search(searchText).then(response => {
  //   dispatch({
  //     type: types.SET_SEARCH_RESULT,
  //     result: response.data.items
  //   });
  // });
  // };
}

export function searchPopularQuestionByAuthor(authorId) {
  return (dispatch, getState) => {
    debugger;
    SearchService.getPopularQuestionByAuthor(authorId).then(response => {
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
        type: types.GET_POPULAR_QUESTION_BY_TAG,
        popularQuestion: response.data.items
      });
    });
  };
}
