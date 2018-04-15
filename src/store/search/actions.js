import * as types from "./actionTypes";
import SearchService from "../../services/search";
import * as searchSelectors from "./reducer";

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

export function selectAuthor(author) {
  return {
    type: types.SELECT_AUTHOR,
    currentAuthor: author
  };
}

export function selectTag(tag) {
  return {
    type: types.SELECT_TAG,
    currentTag: tag
  };
}

export function startSearch(meta) {
  //  let currentMeta = searchSelectors.getSearchText(getState());
  //   let newMeta = {
  //     page: meta.page + 1,
  //     limit: meta.limit + 50
  //   };

  return {
    type: types.SET_SEARCH_RESULT,
    result: [
      {
        tags: ["extjs", "extjs6", "extjs6-classic"],
        owner: {
          reputation: 806,
          user_id: 4468132,
          user_type: "registered",
          accept_rate: 61,
          profile_image: "https://i.stack.imgur.com/IHE5A.jpg?s=128&g=1",
          display_name: "Gardezi",
          link: "https://stackoverflow.com/users/4468132/gardezi"
        },
        is_answered: false,
        view_count: 53,
        answer_count: 0,
        score: 1,
        last_activity_date: 1484663853,
        creation_date: 1484663047,
        last_edit_date: 1484663853,
        question_id: 41699596,
        link:
          "https://stackoverflow.com/questions/41699596/get-checkbox-for-some-option-and-tree-panel-for-some-extjs",
        title: "Get checkbox for some option and Tree panel for some ExtJs"
      },
      {
        tags: ["extjs", "extjs4"],
        owner: {
          reputation: 523,
          user_id: 592539,
          user_type: "registered",
          accept_rate: 62,
          profile_image:
            "https://www.gravatar.com/avatar/4ff5085dedfe9ccb29c7eb54ca9b1955?s=128&d=identicon&r=PG",
          display_name: "Tom Hartwell",
          link: "https://stackoverflow.com/users/592539/tom-hartwell"
        },
        is_answered: true,
        view_count: 7944,
        accepted_answer_id: 7564566,
        answer_count: 2,
        score: 1,
        last_activity_date: 1349825547,
        creation_date: 1317076690,
        last_edit_date: 1317077356,
        question_id: 7562185,
        link:
          "https://stackoverflow.com/questions/7562185/extjs-4-refreshing-summary-feature-of-grid-panel-without-refreshing-entire-vie",
        title:
          "ExtJS 4 - Refreshing Summary Feature of Grid Panel Without Refreshing Entire View"
      },
      {
        tags: ["extjs", "extjs3"],
        owner: {
          reputation: 525,
          user_id: 2190724,
          user_type: "registered",
          accept_rate: 67,
          profile_image:
            "https://graph.facebook.com/100001056895547/picture?type=large",
          display_name: "Naresh",
          link: "https://stackoverflow.com/users/2190724/naresh"
        },
        is_answered: false,
        view_count: 657,
        answer_count: 1,
        score: 1,
        last_activity_date: 1392129713,
        creation_date: 1390396854,
        last_edit_date: 1390398299,
        question_id: 21284091,
        link:
          "https://stackoverflow.com/questions/21284091/how-to-mark-in-red-for-mandatory-field-in-extjs-3-4",
        title: "how to mark (*) in red for mandatory field in extjs 3.4"
      },
      {
        tags: ["javascript", "extjs", "gridpanel", "sencha-cmd"],
        owner: {
          reputation: 827,
          user_id: 2860391,
          user_type: "registered",
          accept_rate: 83,
          profile_image:
            "https://www.gravatar.com/avatar/012dccf5619014e779a73586edff782b?s=128&d=identicon&r=PG&f=1",
          display_name: "Abdul Rehman Yawar Khan",
          link:
            "https://stackoverflow.com/users/2860391/abdul-rehman-yawar-khan"
        },
        is_answered: true,
        view_count: 669,
        accepted_answer_id: 29129670,
        answer_count: 1,
        score: 1,
        last_activity_date: 1428569239,
        creation_date: 1426688047,
        last_edit_date: 1428569239,
        question_id: 29124407,
        link:
          "https://stackoverflow.com/questions/29124407/extjs-gridpanel-display-25-rows-max-due-to-localstorage-proxy-how-to-change-thi",
        title:
          "Extjs gridpanel display 25 rows max due to localstorage proxy. How to change this limit value?"
      },
      {
        tags: ["extjs3"],
        owner: {
          reputation: 17,
          user_id: 2281562,
          user_type: "registered",
          accept_rate: 75,
          profile_image:
            "https://www.gravatar.com/avatar/4a18e428301f0e98f0ad41d0984eefa5?s=128&d=identicon&r=PG",
          display_name: "Jacky Chiu",
          link: "https://stackoverflow.com/users/2281562/jacky-chiu"
        },
        is_answered: true,
        view_count: 523,
        accepted_answer_id: 18709702,
        answer_count: 1,
        score: 1,
        last_activity_date: 1378778914,
        creation_date: 1377159601,
        question_id: 18375099,
        link:
          "https://stackoverflow.com/questions/18375099/extjs-3-4-formpanel-cannot-be-rendered-to-div-in-chrome-and-ie",
        title:
          "ExtJS 3.4 - FormPanel cannot be rendered to &lt;DIV&gt; in Chrome and IE"
      },
      {
        tags: ["javascript", "extjs"],
        owner: {
          reputation: 299,
          user_id: 2440712,
          user_type: "registered",
          accept_rate: 57,
          profile_image:
            "https://www.gravatar.com/avatar/ab4ff24a9acfdbecf5575ea490de3a0f?s=128&d=identicon&r=PG",
          display_name: "user2440712",
          link: "https://stackoverflow.com/users/2440712/user2440712"
        },
        is_answered: true,
        view_count: 323,
        accepted_answer_id: 18897603,
        answer_count: 1,
        score: 1,
        last_activity_date: 1379601278,
        creation_date: 1379601095,
        question_id: 18897539,
        link:
          "https://stackoverflow.com/questions/18897539/extjs-3-4-combobox-how-to-preselect-a-record-when-the-combobox-is-first-loaded",
        title:
          "Extjs 3.4 ComboBox: how to preselect a record when the combobox is first loaded?"
      },
      {
        tags: ["sql-server", "wcf", "iis", "extjs", "ria"],
        owner: {
          reputation: 15462,
          user_id: 274519,
          user_type: "registered",
          accept_rate: 84,
          profile_image:
            "https://www.gravatar.com/avatar/2fe1b35ce20f254680aa35e58322164d?s=128&d=identicon&r=PG",
          display_name: "sha",
          link: "https://stackoverflow.com/users/274519/sha"
        },
        is_answered: true,
        view_count: 684,
        accepted_answer_id: 10340783,
        answer_count: 1,
        score: 1,
        last_activity_date: 1335471282,
        creation_date: 1335469737,
        question_id: 10340386,
        link:
          "https://stackoverflow.com/questions/10340386/easiest-best-back-end-layer-to-tie-ms-sql-database-and-extjs-front-end",
        title:
          "Easiest/best back end layer to tie MS SQL database and ExtJS front end"
      },
      {
        tags: ["xml", "json", "extjs", "asp.net-mvc-4"],
        owner: {
          reputation: 6,
          user_id: 1356592,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/184d1bb9dd1c7be8273e13e88f13fd2a?s=128&d=identicon&r=PG",
          display_name: "fatsheldon",
          link: "https://stackoverflow.com/users/1356592/fatsheldon"
        },
        is_answered: false,
        view_count: 2079,
        answer_count: 0,
        score: 1,
        last_activity_date: 1336317793,
        creation_date: 1335368208,
        question_id: 10318945,
        link:
          "https://stackoverflow.com/questions/10318945/asp-net-mvc4-web-api-via-extjs-4-sometimes-returns-xml-sometimes-json",
        title:
          "ASP.Net MVC4 Web API via ExtJs 4 - sometimes returns XML sometimes JSON"
      },
      {
        tags: ["extjs", "drag-and-drop", "treeview", "extjs4", "treepanel"],
        owner: {
          reputation: 176,
          user_id: 1475064,
          user_type: "registered",
          accept_rate: 71,
          profile_image:
            "https://www.gravatar.com/avatar/81e5c40096ac16484cf8e9bb32f25eae?s=128&d=identicon&r=PG",
          display_name: "Bbb",
          link: "https://stackoverflow.com/users/1475064/bbb"
        },
        is_answered: true,
        view_count: 1371,
        accepted_answer_id: 12042545,
        answer_count: 1,
        score: 1,
        last_activity_date: 1345485201,
        creation_date: 1345215032,
        last_edit_date: 1345315107,
        question_id: 12008067,
        link:
          "https://stackoverflow.com/questions/12008067/extjs-4-removing-node-from-treepanel-giving-error-in-custom-drag-and-drop",
        title:
          "extjs 4 removing node from treepanel giving error in custom drag and drop"
      },
      {
        tags: ["controller", "grid", "row", "extjs4.1"],
        owner: {
          reputation: 621,
          user_id: 818731,
          user_type: "registered",
          accept_rate: 69,
          profile_image:
            "https://www.gravatar.com/avatar/9b6fa71819ff0c1400b13396b5186fb0?s=128&d=identicon&r=PG",
          display_name: "Waseem",
          link: "https://stackoverflow.com/users/818731/waseem"
        },
        is_answered: false,
        view_count: 2190,
        answer_count: 1,
        score: 1,
        last_activity_date: 1348641571,
        creation_date: 1347204909,
        question_id: 12340421,
        link:
          "https://stackoverflow.com/questions/12340421/how-to-expand-row-in-a-grid-using-rowexpander-plugin-extjs-4-1-1",
        title:
          "How to expand row in a grid using rowexpander plugin Extjs 4.1.1"
      },
      {
        tags: ["extjs", "extjs4"],
        owner: {
          reputation: 10821,
          user_id: 62694,
          user_type: "registered",
          accept_rate: 89,
          profile_image:
            "https://www.gravatar.com/avatar/17a69236f78df31687ae0a34e33360c8?s=128&d=identicon&r=PG",
          display_name: "Clint Harris",
          link: "https://stackoverflow.com/users/62694/clint-harris"
        },
        is_answered: true,
        view_count: 1077,
        accepted_answer_id: 8579589,
        answer_count: 1,
        score: 1,
        last_activity_date: 1324402823,
        creation_date: 1324402319,
        question_id: 8579504,
        link:
          "https://stackoverflow.com/questions/8579504/extjs-4-how-to-associate-model-with-another-pre-existing-model-by-id",
        title:
          "ExtJS 4: How to associate model with another, pre-existing model by ID?"
      },
      {
        tags: ["extjs", "extjs4"],
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
        is_answered: false,
        view_count: 1809,
        answer_count: 2,
        score: 1,
        last_activity_date: 1386838662,
        creation_date: 1327085142,
        question_id: 8946328,
        link:
          "https://stackoverflow.com/questions/8946328/moving-items-up-and-down-in-a-gridview-in-extjs-4-0",
        title: "moving items up and down in a gridview in extjs 4.0"
      },
      {
        tags: ["extjs"],
        owner: {
          reputation: 353,
          user_id: 397135,
          user_type: "registered",
          accept_rate: 78,
          profile_image:
            "https://www.gravatar.com/avatar/00c3cc77c1f51fc9039a919a657bbf53?s=128&d=identicon&r=PG",
          display_name: "0dd_b1t",
          link: "https://stackoverflow.com/users/397135/0dd-b1t"
        },
        is_answered: true,
        view_count: 1283,
        accepted_answer_id: 4535522,
        answer_count: 1,
        score: 1,
        last_activity_date: 1293399467,
        creation_date: 1293397814,
        question_id: 4535433,
        link:
          "https://stackoverflow.com/questions/4535433/extjs-better-way-to-pass-parameter-to-grid-from-another-page",
        title: "ExtJS: better way to pass parameter to grid from another page"
      },
      {
        tags: ["javascript", "extjs"],
        owner: {
          reputation: 6711,
          user_id: 114446,
          user_type: "registered",
          accept_rate: 83,
          profile_image:
            "https://www.gravatar.com/avatar/00eee96c693685a4ab127922ca118523?s=128&d=identicon&r=PG",
          display_name: "Alex L",
          link: "https://stackoverflow.com/users/114446/alex-l"
        },
        is_answered: true,
        view_count: 2616,
        accepted_answer_id: 4070879,
        answer_count: 1,
        score: 1,
        last_activity_date: 1288628807,
        creation_date: 1255142936,
        question_id: 1546892,
        link:
          "https://stackoverflow.com/questions/1546892/extjs-how-to-fill-combo-box-with-tree-nodes-immediate-children",
        title:
          "extjs: How to fill combo box with tree node&#39;s immediate children?"
      },
      {
        tags: ["java", "javascript", "ajax", "spring", "extjs"],
        owner: {
          reputation: 4071,
          user_id: 2072693,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/oDXDQ.jpg?s=128&g=1",
          display_name: "kevhender",
          link: "https://stackoverflow.com/users/2072693/kevhender"
        },
        is_answered: false,
        view_count: 885,
        answer_count: 0,
        score: 1,
        last_activity_date: 1396364289,
        creation_date: 1396364289,
        question_id: 22789604,
        link:
          "https://stackoverflow.com/questions/22789604/using-a-map-as-the-requestbody-for-a-spring-ajax-request-using-extjs",
        title:
          "Using a Map as the RequestBody for a Spring AJAX request (using ExtJS)"
      },
      {
        tags: ["extjs", "custom-events"],
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
        view_count: 1801,
        answer_count: 3,
        score: 1,
        last_activity_date: 1421702622,
        creation_date: 1389719831,
        last_edit_date: 1389741944,
        question_id: 21119731,
        link:
          "https://stackoverflow.com/questions/21119731/in-extjs-4-why-is-my-firing-of-custom-event-om-image-el-not-working",
        title:
          "In Extjs 4, why is my firing of custom event om image el not working?"
      },
      {
        tags: ["extjs", "file-upload", "extjs5"],
        owner: {
          reputation: 94,
          user_id: 861071,
          user_type: "registered",
          accept_rate: 38,
          profile_image:
            "https://www.gravatar.com/avatar/a0dfc8d544d1bf6c0aa046f2605bf605?s=128&d=identicon&r=PG",
          display_name: "optimusPrime",
          link: "https://stackoverflow.com/users/861071/optimusprime"
        },
        is_answered: false,
        view_count: 533,
        answer_count: 0,
        score: 1,
        last_activity_date: 1425285532,
        creation_date: 1425285532,
        question_id: 28805534,
        link:
          "https://stackoverflow.com/questions/28805534/how-to-form-upload-a-file-which-is-downloaded-using-extjs-rest-ajax-call",
        title:
          "How to form upload a file which is downloaded using Extjs rest (AJAX ) call"
      },
      {
        tags: ["javascript", "html", "firefox", "google-chrome", "extjs"],
        owner: {
          reputation: 66,
          user_id: 1579474,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/3309bb5470d0aa1aa21c3edd9652bc2c?s=128&d=identicon&r=PG",
          display_name: "Codeboy.ru",
          link: "https://stackoverflow.com/users/1579474/codeboy-ru"
        },
        is_answered: false,
        view_count: 3565,
        answer_count: 1,
        score: 1,
        last_activity_date: 1344354048,
        creation_date: 1344263442,
        last_edit_date: 1344263749,
        question_id: 11830331,
        link:
          "https://stackoverflow.com/questions/11830331/extjs-work-properly-in-chrome-but-doest-display-anything-in-firefox-or-ie",
        title:
          "extjs work properly in chrome but does&#39;t display anything in firefox or ie"
      },
      {
        tags: ["extjs", "extjs4", "extjs4.1", "extjs4.2"],
        owner: {
          reputation: 587,
          user_id: 1170238,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/4f1b0151591e2f8bade15f05e54c841f?s=128&d=identicon&r=PG",
          display_name: "remo",
          link: "https://stackoverflow.com/users/1170238/remo"
        },
        is_answered: true,
        view_count: 630,
        accepted_answer_id: 18337021,
        answer_count: 1,
        score: 1,
        last_activity_date: 1377085995,
        creation_date: 1376990332,
        last_edit_date: 1377007318,
        question_id: 18331358,
        link:
          "https://stackoverflow.com/questions/18331358/extjs-chart-how-to-get-boundary-dates-from-selection-mask-on-time-type-axis",
        title:
          "ExtJs Chart, How to get boundary dates from selection mask on &#39;Time&#39; type axis"
      },
      {
        tags: ["grid", "store", "extjs4.1"],
        owner: {
          reputation: 146,
          user_id: 2614620,
          user_type: "registered",
          accept_rate: 100,
          profile_image:
            "https://www.gravatar.com/avatar/467abbdf599b8a78a1bbf14996e124ae?s=128&d=identicon&r=PG",
          display_name: "LookAtMeNow",
          link: "https://stackoverflow.com/users/2614620/lookatmenow"
        },
        is_answered: true,
        view_count: 627,
        accepted_answer_id: 17856701,
        answer_count: 1,
        score: 1,
        last_activity_date: 1374751696,
        creation_date: 1374719737,
        question_id: 17848066,
        link:
          "https://stackoverflow.com/questions/17848066/read-each-record-whenever-store-is-loading-again-in-extjs-4-1",
        title: "Read each record whenever Store is loading again in Extjs 4.1"
      },
      {
        tags: ["extjs", "extjs4", "extjs-grid"],
        owner: {
          reputation: 805,
          user_id: 1586706,
          user_type: "registered",
          accept_rate: 56,
          profile_image:
            "https://www.gravatar.com/avatar/b354bb952b6a63379d6d8636d73801e4?s=128&d=identicon&r=PG",
          display_name: "DarkKnightFan",
          link: "https://stackoverflow.com/users/1586706/darkknightfan"
        },
        is_answered: false,
        view_count: 2066,
        answer_count: 2,
        score: 1,
        last_activity_date: 1393827076,
        creation_date: 1382081258,
        question_id: 19443963,
        link:
          "https://stackoverflow.com/questions/19443963/extjs-grid-cell-editing-blank-cell-if-value-entered-is-sample",
        title:
          "ExtJS Grid: Cell Editing: Blank cell if value entered is &lt;SAMPLE&gt;"
      },
      {
        tags: ["javascript", "jsp", "extjs"],
        owner: {
          reputation: 149,
          user_id: 2214857,
          user_type: "registered",
          accept_rate: 70,
          profile_image:
            "https://www.gravatar.com/avatar/271892e93ea62a07410bf5781065d746?s=128&d=identicon&r=PG",
          display_name: "Amby",
          link: "https://stackoverflow.com/users/2214857/amby"
        },
        is_answered: true,
        view_count: 513,
        accepted_answer_id: 20546107,
        answer_count: 1,
        score: 1,
        last_activity_date: 1386858305,
        creation_date: 1385966468,
        question_id: 20322286,
        link:
          "https://stackoverflow.com/questions/20322286/uncaught-type-error-uncaught-reference-error-while-calling-extjs-method-from-j",
        title:
          "Uncaught type error &amp; Uncaught reference error while calling EXTJS method from JSP"
      },
      {
        tags: ["extjs", "extjs4"],
        owner: {
          reputation: 346,
          user_id: 831454,
          user_type: "registered",
          accept_rate: 60,
          profile_image:
            "https://www.gravatar.com/avatar/32bfd2a7501be5c04d3161d56d4e4cdd?s=128&d=identicon&r=PG",
          display_name: "rajugaadu",
          link: "https://stackoverflow.com/users/831454/rajugaadu"
        },
        is_answered: true,
        view_count: 1476,
        accepted_answer_id: 17625279,
        answer_count: 1,
        score: 1,
        last_activity_date: 1373670279,
        creation_date: 1373669876,
        question_id: 17625228,
        link:
          "https://stackoverflow.com/questions/17625228/extjs-datefield-showing-up-as-blank-on-selection-of-a-grid-row",
        title:
          "ExtJS : datefield showing up as blank on selection of a grid row"
      },
      {
        tags: ["javascript", "extjs", "extjs4", "extjs4.1"],
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
        view_count: 1866,
        accepted_answer_id: 11935994,
        answer_count: 2,
        score: 1,
        last_activity_date: 1344867744,
        creation_date: 1344859032,
        question_id: 11933854,
        link:
          "https://stackoverflow.com/questions/11933854/extjs-keymap-doesnt-act-on-defaulteventaction-but-performs-the-default-browser",
        title:
          "Extjs KeyMap doesn&#39;t act on defaultEventAction but performs the default browser action"
      },
      {
        tags: ["extjs", "load", "limit", "store", "param"],
        owner: {
          reputation: 1540,
          user_id: 322251,
          user_type: "registered",
          accept_rate: 84,
          profile_image:
            "https://www.gravatar.com/avatar/90611479ceffc2da2d62d5f6134a5565?s=128&d=identicon&r=PG",
          display_name: "shane87",
          link: "https://stackoverflow.com/users/322251/shane87"
        },
        is_answered: true,
        view_count: 3644,
        accepted_answer_id: 4947461,
        answer_count: 3,
        score: 1,
        last_activity_date: 1314711123,
        creation_date: 1297267572,
        last_edit_date: 1314711123,
        question_id: 4947376,
        link:
          "https://stackoverflow.com/questions/4947376/why-isnt-my-extjs-gridpanel-paying-attention-to-the-limit-parameter",
        title:
          "Why isn&#39;t my ExtJS GridPanel paying attention to the limit parameter?"
      },
      {
        tags: ["date", "extjs", "internet-explorer-8", "utc"],
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
        view_count: 10999,
        accepted_answer_id: 14640759,
        answer_count: 2,
        score: 1,
        last_activity_date: 1398165521,
        creation_date: 1359693417,
        last_edit_date: 1359711716,
        question_id: 14639817,
        link:
          "https://stackoverflow.com/questions/14639817/converting-a-utc-format-date-string-to-date-object-in-extjs",
        title: "converting a utc format date string to date object in Extjs"
      },
      {
        tags: ["javascript", "css", "extjs"],
        owner: {
          reputation: 20,
          user_id: 2216893,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/d4ef3e4ad33edcfadba7cbf33c40992f?s=128&d=identicon&r=PG",
          display_name: "vasavi",
          link: "https://stackoverflow.com/users/2216893/vasavi"
        },
        is_answered: true,
        view_count: 2464,
        accepted_answer_id: 19268021,
        answer_count: 1,
        score: 1,
        last_activity_date: 1510648400,
        creation_date: 1381309964,
        last_edit_date: 1381310344,
        question_id: 19267658,
        link:
          "https://stackoverflow.com/questions/19267658/how-to-display-html-tags-as-plain-text-in-extjs-displayfield",
        title: "How to display HTML tags as plain text in extjs displayfield"
      },
      {
        tags: ["javascript", "extjs", "mvvm", "extjs5"],
        owner: {
          reputation: 1477,
          user_id: 1253609,
          user_type: "registered",
          accept_rate: 86,
          profile_image:
            "https://www.gravatar.com/avatar/2b4d12192192700b048e20c679da3b2e?s=128&d=identicon&r=PG",
          display_name: "incutonez",
          link: "https://stackoverflow.com/users/1253609/incutonez"
        },
        is_answered: false,
        view_count: 764,
        answer_count: 1,
        score: 1,
        last_activity_date: 1462343899,
        creation_date: 1438192058,
        last_edit_date: 1495541263,
        question_id: 31707607,
        link:
          "https://stackoverflow.com/questions/31707607/extjs-5-confusion-with-persisting-changes-to-view-model-form-record",
        title:
          "ExtJS 5: confusion with persisting changes to view model/form record"
      },
      {
        tags: ["css", "fontfamily", "extjs6-classic"],
        owner: {
          reputation: 15,
          user_id: 7772416,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/d3c5eaab7d331669ef8d81195c23c574?s=128&d=identicon&r=PG&f=1",
          display_name: "Hafiz Bilal Ahmad",
          link: "https://stackoverflow.com/users/7772416/hafiz-bilal-ahmad"
        },
        is_answered: true,
        view_count: 103,
        accepted_answer_id: 45834101,
        answer_count: 1,
        score: 1,
        last_activity_date: 1503484305,
        creation_date: 1503475465,
        last_edit_date: 1503484305,
        question_id: 45834027,
        link:
          "https://stackoverflow.com/questions/45834027/how-do-i-change-font-family-for-my-whole-extjs-web-app",
        title: "How do I change font-family for my whole Extjs web app?"
      },
      {
        tags: ["javascript", "extjs", "extjs4", "extjs6", "extjs6-classic"],
        owner: {
          reputation: 82,
          user_id: 921286,
          user_type: "registered",
          accept_rate: 100,
          profile_image:
            "https://www.gravatar.com/avatar/b1c602eb19d5a92106bc7e8184ec7ec8?s=128&d=identicon&r=PG",
          display_name: "Rishabh Shah",
          link: "https://stackoverflow.com/users/921286/rishabh-shah"
        },
        is_answered: true,
        view_count: 304,
        accepted_answer_id: 41282874,
        answer_count: 1,
        score: 1,
        last_activity_date: 1482408475,
        creation_date: 1482407749,
        question_id: 41282644,
        link:
          "https://stackoverflow.com/questions/41282644/extjs-6-on-scrolling-horizontal-quickly-column-header-and-data-are-not-aligne",
        title:
          "ExtJS 6 - on scrolling horizontal quickly, column header and data are not aligned properly"
      },
      {
        tags: ["java", "extjs4.2"],
        owner: {
          reputation: 16,
          user_id: 1465361,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/e8ea03f11af50192434a6fd5b4d6d0f8?s=128&d=identicon&r=PG",
          display_name: "Sam",
          link: "https://stackoverflow.com/users/1465361/sam"
        },
        is_answered: true,
        view_count: 2470,
        answer_count: 2,
        score: 1,
        last_activity_date: 1491871738,
        creation_date: 1376056410,
        question_id: 18148316,
        link:
          "https://stackoverflow.com/questions/18148316/how-to-close-extjs-form-panel-when-clicked-in-rest-of-the-browser-area",
        title:
          "How to close EXTJS form panel when clicked in rest of the browser area."
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
        is_answered: false,
        view_count: 211,
        answer_count: 0,
        score: 1,
        last_activity_date: 1435229120,
        creation_date: 1435228465,
        last_edit_date: 1435229120,
        question_id: 31047894,
        link:
          "https://stackoverflow.com/questions/31047894/extjs-paging-toolbar-with-an-ability-to-select-items-count-per-page",
        title:
          "ExtJS Paging toolbar with an ability to select items count per page"
      },
      {
        tags: ["javascript", "extjs"],
        owner: {
          reputation: 74596,
          user_id: 4639,
          user_type: "registered",
          accept_rate: 77,
          profile_image:
            "https://www.gravatar.com/avatar/a9eaafb332f36840447f60dd85b94d19?s=128&d=identicon&r=PG",
          display_name: "Edward Tanguay",
          link: "https://stackoverflow.com/users/4639/edward-tanguay"
        },
        is_answered: true,
        view_count: 8582,
        accepted_answer_id: 4945881,
        answer_count: 1,
        score: 1,
        last_activity_date: 1297260656,
        creation_date: 1297259821,
        last_edit_date: 1297260656,
        question_id: 4945811,
        link:
          "https://stackoverflow.com/questions/4945811/why-does-this-extjs-code-get-the-error-this-el-is-null",
        title:
          "Why does this ExtJS code get the error &quot;this.el is null&quot;?"
      },
      {
        tags: [".net", "extjs", "proxy", "save", "asmx"],
        owner: {
          reputation: 10101,
          user_id: 640205,
          user_type: "registered",
          accept_rate: 94,
          profile_image: "https://i.stack.imgur.com/UUIk1.jpg?s=128&g=1",
          display_name: "MacGyver",
          link: "https://stackoverflow.com/users/640205/macgyver"
        },
        is_answered: true,
        view_count: 10250,
        accepted_answer_id: 11574572,
        answer_count: 1,
        score: 3,
        last_activity_date: 1342832884,
        creation_date: 1342760052,
        last_edit_date: 1342763084,
        question_id: 11573098,
        link:
          "https://stackoverflow.com/questions/11573098/extjs-4-saving-record-in-record-edit-form-to-server-and-update-grid-store",
        title:
          "ExtJS 4: Saving record in record edit form to server and update grid store"
      },
      {
        tags: ["extjs4.2"],
        owner: {
          reputation: 198,
          user_id: 1475068,
          user_type: "registered",
          accept_rate: 63,
          profile_image:
            "https://www.gravatar.com/avatar/6d6b88f97d807b9877e6792d6fbb0e57?s=128&d=identicon&r=PG",
          display_name: "CARTIC",
          link: "https://stackoverflow.com/users/1475068/cartic"
        },
        is_answered: true,
        view_count: 7734,
        accepted_answer_id: 16855995,
        answer_count: 1,
        score: 3,
        last_activity_date: 1452783578,
        creation_date: 1369989188,
        last_edit_date: 1452783578,
        question_id: 16853097,
        link:
          "https://stackoverflow.com/questions/16853097/align-window-to-center-of-the-page-after-changing-width-and-height-in-extjs-4",
        title:
          "Align window to center of the page after changing width and height in ExtJs 4"
      },
      {
        tags: ["extjs", "controller", "contextmenu"],
        owner: {
          reputation: 382,
          user_id: 1316702,
          user_type: "registered",
          accept_rate: 83,
          profile_image:
            "https://www.gravatar.com/avatar/4c568797b43d551c24fdfd3a2a2a5783?s=128&d=identicon&r=PG",
          display_name: "solarissf",
          link: "https://stackoverflow.com/users/1316702/solarissf"
        },
        is_answered: true,
        view_count: 94,
        accepted_answer_id: 42401339,
        answer_count: 1,
        score: 3,
        last_activity_date: 1487804761,
        creation_date: 1487791022,
        question_id: 42400366,
        link:
          "https://stackoverflow.com/questions/42400366/extjs-contextmenu-click-error-method-not-found-but-looking-in-wrong-control",
        title:
          "extjs contextmenu click error - method not found... but looking in wrong controller"
      },
      {
        tags: ["jquery", "web-applications", "extjs", "dojo"],
        owner: {
          reputation: 1383,
          user_id: 290150,
          user_type: "registered",
          accept_rate: 82,
          profile_image: "https://i.stack.imgur.com/py9zT.png?s=128&g=1",
          display_name: "b_dev",
          link: "https://stackoverflow.com/users/290150/b-dev"
        },
        is_answered: true,
        view_count: 1624,
        accepted_answer_id: 4754750,
        answer_count: 2,
        score: 2,
        last_activity_date: 1295575557,
        creation_date: 1295565325,
        question_id: 4753766,
        link:
          "https://stackoverflow.com/questions/4753766/what-disadvatages-are-there-to-using-dojo-extjs-and-jquery-at-same-time-while",
        title:
          "What disadvatages are there to using Dojo, extJS, and Jquery at same time while developing?"
      },
      {
        tags: ["extjs"],
        owner: {
          reputation: 10821,
          user_id: 62694,
          user_type: "registered",
          accept_rate: 89,
          profile_image:
            "https://www.gravatar.com/avatar/17a69236f78df31687ae0a34e33360c8?s=128&d=identicon&r=PG",
          display_name: "Clint Harris",
          link: "https://stackoverflow.com/users/62694/clint-harris"
        },
        is_answered: true,
        view_count: 4207,
        accepted_answer_id: 5916193,
        answer_count: 1,
        score: 2,
        last_activity_date: 1304710474,
        creation_date: 1304694710,
        question_id: 5913375,
        link:
          "https://stackoverflow.com/questions/5913375/extjs-best-way-to-destroy-card-when-hidden-instantiate-when-shown",
        title:
          "ExtJS: Best way to destroy card when hidden, instantiate when shown?"
      },
      {
        tags: ["extjs", "toolbar", "extjs4", "textinput", "focusmanager"],
        owner: {
          reputation: 112,
          user_id: 157547,
          user_type: "registered",
          accept_rate: 80,
          profile_image:
            "https://www.gravatar.com/avatar/d63371433fdea348ca5796b75165e7ad?s=128&d=identicon&r=PG",
          display_name: "figus",
          link: "https://stackoverflow.com/users/157547/figus"
        },
        is_answered: true,
        view_count: 2290,
        answer_count: 1,
        score: 2,
        last_activity_date: 1309035640,
        creation_date: 1309002599,
        question_id: 6477538,
        link:
          "https://stackoverflow.com/questions/6477538/extjs-4-problem-using-text-input-in-a-toolbar-focusmanager-i-think",
        title:
          "ExtJS 4: Problem using text input in a Toolbar (focusmanager i think)"
      },
      {
        tags: ["extjs4"],
        owner: {
          reputation: 65,
          user_id: 1399166,
          user_type: "registered",
          accept_rate: 75,
          profile_image:
            "https://www.gravatar.com/avatar/88f1d2e30094174fb7e688d1a24dfa04?s=128&d=identicon&r=PG",
          display_name: "sharathchandra.ck",
          link: "https://stackoverflow.com/users/1399166/sharathchandra-ck"
        },
        is_answered: true,
        view_count: 3950,
        accepted_answer_id: 10854962,
        answer_count: 1,
        score: 2,
        last_activity_date: 1338572572,
        creation_date: 1338298439,
        question_id: 10800239,
        link:
          "https://stackoverflow.com/questions/10800239/extjs-toggle-button-in-the-panel-disappears-after-collapsing-cannot-expand-it-b",
        title:
          "ExtJS Toggle button in the panel disappears after collapsing, Cannot expand it back"
      },
      {
        tags: [
          "javascript",
          "model-view-controller",
          "web-applications",
          "extjs4",
          "sencha-touch-2"
        ],
        owner: {
          reputation: 9124,
          user_id: 83897,
          user_type: "registered",
          accept_rate: 56,
          profile_image:
            "https://www.gravatar.com/avatar/4cd7dd6827a5a8b531cc6242a103f0a1?s=128&d=identicon&r=PG",
          display_name: "Chad Johnson",
          link: "https://stackoverflow.com/users/83897/chad-johnson"
        },
        is_answered: true,
        view_count: 824,
        answer_count: 2,
        score: 2,
        last_activity_date: 1359084741,
        creation_date: 1357937927,
        question_id: 14286522,
        link:
          "https://stackoverflow.com/questions/14286522/sencha-touch-extjs-profiles-for-desktop-and-mobile-in-one-web-project-vhost",
        title:
          "Sencha Touch &amp; ExtJS profiles for desktop and mobile in one web project/vhost?"
      },
      {
        tags: ["javascript", "extjs"],
        owner: {
          reputation: 4925,
          user_id: 212159,
          user_type: "registered",
          accept_rate: 87,
          profile_image:
            "https://www.gravatar.com/avatar/f5295bb1f09b65597d960ced3b4da670?s=128&d=identicon&r=PG",
          display_name: "Flukey",
          link: "https://stackoverflow.com/users/212159/flukey"
        },
        is_answered: true,
        view_count: 1342,
        accepted_answer_id: 2929985,
        answer_count: 4,
        community_owned_date: 1275057600,
        score: 2,
        last_activity_date: 1275060128,
        creation_date: 1275057600,
        question_id: 2929945,
        link:
          "https://stackoverflow.com/questions/2929945/extjs-do-you-find-it-easier-to-work-with-json-or-xml-responses",
        title:
          "ExtJS - Do you find it easier to work with JSON or XML responses?"
      },
      {
        tags: ["extjs", "upgrade", "compatibility", "mode"],
        owner: {
          reputation: 134,
          user_id: 1269702,
          user_type: "registered",
          accept_rate: 64,
          profile_image:
            "https://www.gravatar.com/avatar/a36a034a44a0f0d3fcbf58947555369d?s=128&d=identicon&r=PG",
          display_name: "Jagpreet Singh",
          link: "https://stackoverflow.com/users/1269702/jagpreet-singh"
        },
        is_answered: false,
        view_count: 104,
        answer_count: 0,
        score: 2,
        last_activity_date: 1461679277,
        creation_date: 1460655852,
        last_edit_date: 1461679277,
        question_id: 36630331,
        link:
          "https://stackoverflow.com/questions/36630331/extjs-upgrade-nightmare-4-2-2-to-5-1-treepanel-breaks-in-compatibility-mode",
        title:
          "ExtJS upgrade Nightmare 4.2.2 to 5.1 TreePanel breaks (in compatibility mode)"
      },
      {
        tags: ["grid", "scrollbar", "extjs5", "gridpanel"],
        owner: {
          reputation: 120,
          user_id: 4033204,
          user_type: "registered",
          accept_rate: 50,
          profile_image:
            "https://www.gravatar.com/avatar/b44306e7147c7ee002ff2c1aa7c0d91b?s=128&d=identicon&r=PG&f=1",
          display_name: "happyyangyuan",
          link: "https://stackoverflow.com/users/4033204/happyyangyuan"
        },
        is_answered: true,
        view_count: 5406,
        accepted_answer_id: 27620176,
        answer_count: 1,
        score: 2,
        last_activity_date: 1419336903,
        creation_date: 1419321244,
        question_id: 27616210,
        link:
          "https://stackoverflow.com/questions/27616210/extjs-5-grids-scrollbar-does-not-work-in-border-layout-panel",
        title:
          "extjs 5 grid&#39;s scrollbar does not work in border layout panel"
      },
      {
        tags: ["javascript", "extjs", "datagridview", "grid"],
        owner: {
          reputation: 15,
          user_id: 5289159,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/mS04p.jpg?s=128&g=1",
          display_name: "Rodrigo R. Mietlicki",
          link: "https://stackoverflow.com/users/5289159/rodrigo-r-mietlicki"
        },
        is_answered: true,
        view_count: 120,
        accepted_answer_id: 32339290,
        answer_count: 2,
        score: 2,
        last_activity_date: 1441135047,
        creation_date: 1441122093,
        question_id: 32335760,
        link:
          "https://stackoverflow.com/questions/32335760/how-to-add-a-extjs-button-in-a-column-in-the-grid-to-show-another-window",
        title:
          "How to add a extjs button in a column in the grid to show another window?"
      },
      {
        tags: ["internet-explorer", "user-interface", "extjs", "scrollbar"],
        owner: {
          reputation: 390,
          user_id: 143164,
          user_type: "registered",
          accept_rate: 60,
          profile_image:
            "https://www.gravatar.com/avatar/09e95249de56dc05016cf07b38b2ab29?s=128&d=identicon&r=PG",
          display_name: "Snowright",
          link: "https://stackoverflow.com/users/143164/snowright"
        },
        is_answered: true,
        view_count: 13695,
        accepted_answer_id: 2158308,
        answer_count: 3,
        score: 2,
        last_activity_date: 1332614532,
        creation_date: 1264650637,
        question_id: 2152179,
        link:
          "https://stackoverflow.com/questions/2152179/extjs-gridpanel-scrollbar-does-not-appear-in-ie7-but-it-does-in-firefox-etc",
        title:
          "ExtJS GridPanel Scrollbar does not appear in IE7 but it does in Firefox, etc"
      },
      {
        tags: ["javascript", "extjs", "extjs4", "extjs4.2"],
        owner: {
          reputation: 2607,
          user_id: 1578653,
          user_type: "registered",
          accept_rate: 78,
          profile_image:
            "https://www.gravatar.com/avatar/f69cff1975171a592b952dc0d998efb0?s=128&d=identicon&r=PG&f=1",
          display_name: "user1578653",
          link: "https://stackoverflow.com/users/1578653/user1578653"
        },
        is_answered: true,
        view_count: 1870,
        accepted_answer_id: 17548152,
        answer_count: 2,
        score: 2,
        last_activity_date: 1373372854,
        creation_date: 1373359289,
        question_id: 17543696,
        link:
          "https://stackoverflow.com/questions/17543696/extjs-4-2-have-a-remote-loading-store-that-appends-records-rather-than-replace",
        title:
          "ExtJS 4.2 - have a remote-loading store that appends records rather than replaces them?"
      },
      {
        tags: ["javascript", "forms", "button", "extjs", "textfield"],
        owner: {
          reputation: 25,
          user_id: 1682935,
          user_type: "registered",
          accept_rate: 60,
          profile_image:
            "https://www.gravatar.com/avatar/fbe1ea2de83a05797e8ef07f41ff3ae3?s=128&d=identicon&r=PG",
          display_name: "Kalyh",
          link: "https://stackoverflow.com/users/1682935/kalyh"
        },
        is_answered: false,
        view_count: 530,
        answer_count: 1,
        score: 2,
        last_activity_date: 1415895380,
        creation_date: 1415894345,
        question_id: 26913046,
        link:
          "https://stackoverflow.com/questions/26913046/extjs-4-1-how-can-i-put-a-button-next-a-fieldlabel-of-an-textfield",
        title:
          "EXTJS 4.1 How can I put a button next a fieldlabel of an textfield?"
      },
      {
        tags: ["extjs4"],
        owner: {
          reputation: 513,
          user_id: 652963,
          user_type: "registered",
          accept_rate: 83,
          profile_image: "https://i.stack.imgur.com/9yzQa.jpg?s=128&g=1",
          display_name: "Gourav",
          link: "https://stackoverflow.com/users/652963/gourav"
        },
        is_answered: false,
        view_count: 1104,
        answer_count: 0,
        score: 2,
        last_activity_date: 1394461250,
        creation_date: 1394461250,
        question_id: 22302743,
        link:
          "https://stackoverflow.com/questions/22302743/extjs-button-in-panel-titlebar-should-look-same-like-the-button-in-toolbar",
        title:
          "Extjs button in panel titlebar should look same like the button in toolbar"
      },
      {
        tags: ["extjs", "extjs4", "extjs4.2"],
        owner: {
          reputation: 72,
          user_id: 3842536,
          user_type: "registered",
          accept_rate: 58,
          profile_image:
            "https://www.gravatar.com/avatar/efa22b671fd265eb0e9fcd37f3c4e4e6?s=128&d=identicon&r=PG&f=1",
          display_name: "user3842536",
          link: "https://stackoverflow.com/users/3842536/user3842536"
        },
        is_answered: false,
        view_count: 620,
        answer_count: 2,
        score: 2,
        last_activity_date: 1487972858,
        creation_date: 1425576256,
        last_edit_date: 1425594073,
        question_id: 28883928,
        link:
          "https://stackoverflow.com/questions/28883928/how-to-keep-top-border-after-hiding-toolbar-in-extjs-htmleditor",
        title: "How to keep top border after hiding toolbar in ExtJS htmleditor"
      },
      {
        tags: ["extjs", "internet-explorer-8"],
        owner: {
          reputation: 11,
          user_id: 2983838,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/a54a8085b1d8686b8fcaa11341451fae?s=128&d=identicon&r=PG&f=1",
          display_name: "user2983838",
          link: "https://stackoverflow.com/users/2983838/user2983838"
        },
        is_answered: false,
        view_count: 783,
        answer_count: 1,
        score: 2,
        last_activity_date: 1437384291,
        creation_date: 1384369333,
        last_edit_date: 1437384291,
        question_id: 19962195,
        link:
          "https://stackoverflow.com/questions/19962195/extjs-grid-from-scrolling-when-clicking-on-a-cell-moving-to-top",
        title: "extjs grid from scrolling when clicking on a cell moving to top"
      },
      {
        tags: ["extjs", "extjs4", "jsonp", "yql"],
        owner: {
          reputation: 3701,
          user_id: 1975259,
          user_type: "registered",
          accept_rate: 62,
          profile_image:
            "https://www.gravatar.com/avatar/ecb247f257e94b3fd9d1d56d2b9feae2?s=128&d=identicon&r=PG",
          display_name: "weeksdev",
          link: "https://stackoverflow.com/users/1975259/weeksdev"
        },
        is_answered: false,
        view_count: 110,
        answer_count: 0,
        score: 2,
        last_activity_date: 1388615822,
        creation_date: 1388615822,
        question_id: 20874023,
        link:
          "https://stackoverflow.com/questions/20874023/extjs-load-data-from-yql-error-parsing-when-results-is-null",
        title: "ExtJs Load Data From YQL: Error Parsing When results is null"
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
  return {
    type: types.GET_POPULAR_QUESTION_BY_AUTHOR,
    popularQuestion: [
      {
        tags: ["xml", "escaping", "character"],
        owner: {
          reputation: 12361,
          user_id: 13370,
          user_type: "registered",
          accept_rate: 76,
          profile_image: "https://i.stack.imgur.com/zdSpR.jpg?s=128&g=1",
          display_name: "Julius A",
          link: "https://stackoverflow.com/users/13370/julius-a"
        },
        is_answered: true,
        view_count: 752566,
        protected_date: 1521562586,
        accepted_answer_id: 1091953,
        answer_count: 10,
        score: 757,
        last_activity_date: 1507514488,
        creation_date: 1246968462,
        last_edit_date: 1409841866,
        question_id: 1091945,
        link:
          "https://stackoverflow.com/questions/1091945/what-characters-do-i-need-to-escape-in-xml-documents",
        title: "What characters do I need to escape in XML documents?"
      },
      {
        tags: ["android", "xml", "image", "layout"],
        owner: {
          reputation: 1659,
          user_id: 1764852,
          user_type: "registered",
          accept_rate: 43,
          profile_image: "https://i.stack.imgur.com/YFd3A.jpg?s=128&g=1",
          display_name: "Addy",
          link: "https://stackoverflow.com/users/1764852/addy"
        },
        is_answered: true,
        view_count: 286986,
        accepted_answer_id: 16161493,
        answer_count: 16,
        score: 333,
        last_activity_date: 1515750509,
        creation_date: 1366693975,
        last_edit_date: 1477274081,
        question_id: 16161448,
        link:
          "https://stackoverflow.com/questions/16161448/how-to-make-layout-with-rounded-corners",
        title: "How to make layout with rounded corners..?"
      },
      {
        tags: ["android", "fonts", "styles"],
        owner: {
          reputation: 18497,
          user_id: 413414,
          user_type: "registered",
          accept_rate: 72,
          profile_image: "https://i.stack.imgur.com/g59ew.jpg?s=128&g=1",
          display_name: "Christopher Perry",
          link: "https://stackoverflow.com/users/413414/christopher-perry"
        },
        is_answered: true,
        view_count: 163486,
        accepted_answer_id: 19692168,
        answer_count: 3,
        score: 212,
        last_activity_date: 1513889736,
        creation_date: 1383159471,
        last_edit_date: 1495542887,
        question_id: 19691530,
        link:
          "https://stackoverflow.com/questions/19691530/valid-values-for-androidfontfamily-and-what-they-map-to",
        title: "Valid values for android:fontFamily and what they map to?"
      },
      {
        tags: ["android", "android-intent"],
        owner: {
          reputation: 21511,
          user_id: 22303,
          user_type: "registered",
          accept_rate: 86,
          profile_image:
            "https://www.gravatar.com/avatar/e391eba5bc6f2c833fda426b8e8e37a5?s=128&d=identicon&r=PG",
          display_name: "Kon",
          link: "https://stackoverflow.com/users/22303/kon"
        },
        is_answered: true,
        view_count: 42794,
        accepted_answer_id: 5735419,
        answer_count: 6,
        score: 51,
        last_activity_date: 1507633457,
        creation_date: 1303322799,
        last_edit_date: 1303323427,
        question_id: 5734678,
        link:
          "https://stackoverflow.com/questions/5734678/custom-filtering-of-intent-chooser-based-on-installed-android-package-name",
        title:
          "Custom filtering of intent chooser based on installed Android package name"
      },
      {
        tags: ["android", "android-layout", "android-tools-namespace"],
        owner: {
          reputation: 5303,
          user_id: 628447,
          user_type: "registered",
          accept_rate: 92,
          profile_image:
            "https://www.gravatar.com/avatar/b1e3e0cfe207c32be204d7258580fe6d?s=128&d=identicon&r=PG",
          display_name: "Aracem",
          link: "https://stackoverflow.com/users/628447/aracem"
        },
        is_answered: true,
        view_count: 1754,
        accepted_answer_id: 41030872,
        answer_count: 1,
        score: 49,
        last_activity_date: 1481716090,
        creation_date: 1479130619,
        last_edit_date: 1481716090,
        question_id: 40590046,
        link:
          "https://stackoverflow.com/questions/40590046/what-is-toolsmockup-toolsmockup-crop-and-toolsmockup-opacity",
        title:
          "What is tools:mockup, tools:mockup_crop and tools:mockup_opacity"
      },
      {
        tags: ["android", "bitmap", "android-ndk", "jni", "image-rotation"],
        owner: {
          reputation: 58530,
          user_id: 878126,
          user_type: "registered",
          accept_rate: 51,
          profile_image: "https://i.stack.imgur.com/D5dZW.jpg?s=128&g=1",
          display_name: "android developer",
          link: "https://stackoverflow.com/users/878126/android-developer"
        },
        is_answered: true,
        view_count: 14740,
        accepted_answer_id: 14399349,
        answer_count: 1,
        score: 9,
        last_activity_date: 1378907961,
        creation_date: 1358511013,
        last_edit_date: 1495541861,
        question_id: 14398670,
        link:
          "https://stackoverflow.com/questions/14398670/rotating-a-bitmap-using-jni-ndk",
        title: "Rotating a bitmap using JNI &amp; NDK"
      },
      {
        tags: ["android"],
        owner: {
          reputation: 858,
          user_id: 836308,
          user_type: "registered",
          accept_rate: 37,
          profile_image:
            "https://www.gravatar.com/avatar/6505374bfb2022d46c914357cc0db8b3?s=128&d=identicon&r=PG&f=1",
          display_name: "xmen",
          link: "https://stackoverflow.com/users/836308/xmen"
        },
        is_answered: true,
        view_count: 3015,
        answer_count: 1,
        score: 8,
        last_activity_date: 1391614272,
        creation_date: 1391613928,
        question_id: 21581297,
        link:
          "https://stackoverflow.com/questions/21581297/difference-between-isexternalstorageremovable-and-isexternalstorageemulated",
        title:
          "Difference between isExternalStorageRemovable and isExternalStorageEmulated"
      },
      {
        tags: ["android", "android-5.0-lollipop"],
        owner: {
          reputation: 41,
          user_id: 3871904,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/Gwm4F.jpg?s=128&g=1",
          display_name: "Dlleixap",
          link: "https://stackoverflow.com/users/3871904/dlleixap"
        },
        is_answered: false,
        view_count: 1450,
        answer_count: 0,
        score: 8,
        last_activity_date: 1406563946,
        creation_date: 1406557013,
        last_edit_date: 1406563946,
        question_id: 24997273,
        link:
          "https://stackoverflow.com/questions/24997273/make-the-navigation-bar-stay-on-top-of-any-activity-animation",
        title: "Make the navigation bar stay on top of any activity animation"
      },
      {
        tags: ["android", "actionbarsherlock", "appcompat"],
        owner: {
          reputation: 82,
          user_id: 2886349,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/cW0IM.jpg?s=128&g=1",
          display_name: "GReaper",
          link: "https://stackoverflow.com/users/2886349/greaper"
        },
        is_answered: true,
        view_count: 1031,
        accepted_answer_id: 22780310,
        answer_count: 1,
        score: 7,
        last_activity_date: 1396340289,
        creation_date: 1385543858,
        question_id: 20238216,
        link:
          "https://stackoverflow.com/questions/20238216/smoother-transition-from-fullscreen-activity-using-actionbarsherlock",
        title:
          "Smoother transition from fullscreen activity using ActionBarSherlock"
      },
      {
        tags: ["android", "connection", "usb", "internet-connection"],
        owner: {
          reputation: 14735,
          user_id: 779408,
          user_type: "registered",
          accept_rate: 70,
          profile_image:
            "https://www.gravatar.com/avatar/fe085778f17b774dbd1574b9260bb8ae?s=128&d=identicon&r=PG",
          display_name: "breceivemail",
          link: "https://stackoverflow.com/users/779408/breceivemail"
        },
        is_answered: true,
        view_count: 20409,
        closed_date: 1368620579,
        accepted_answer_id: 9442042,
        answer_count: 1,
        score: 5,
        last_activity_date: 1363333220,
        creation_date: 1330151478,
        last_edit_date: 1346662338,
        question_id: 9441879,
        link:
          "https://stackoverflow.com/questions/9441879/is-it-possible-to-share-my-internet-connection-from-pc-to-android-via-usb",
        closed_reason: "off topic",
        title:
          "Is it possible to share my internet connection from pc to android via usb?"
      },
      {
        tags: ["android", "android-studio"],
        owner: {
          reputation: 58530,
          user_id: 878126,
          user_type: "registered",
          accept_rate: 51,
          profile_image: "https://i.stack.imgur.com/D5dZW.jpg?s=128&g=1",
          display_name: "android developer",
          link: "https://stackoverflow.com/users/878126/android-developer"
        },
        is_answered: true,
        view_count: 712,
        accepted_answer_id: 46193419,
        answer_count: 1,
        score: 5,
        last_activity_date: 1513074517,
        creation_date: 1505291184,
        last_edit_date: 1513074517,
        question_id: 46192545,
        link:
          "https://stackoverflow.com/questions/46192545/how-to-put-new-placeholder-resources-into-android-studio-project-toolssample",
        title:
          "How to put new placeholder resources into Android Studio project (&quot;tools:sample&quot; resources)?"
      },
      {
        tags: ["adb", "battery", "dumpsys"],
        owner: {
          reputation: 16,
          user_id: 3782023,
          user_type: "registered",
          profile_image: "https://i.stack.imgur.com/fC9Ln.jpg?s=128&g=1",
          display_name: "asting",
          link: "https://stackoverflow.com/users/3782023/asting"
        },
        is_answered: false,
        view_count: 753,
        answer_count: 0,
        score: 3,
        last_activity_date: 1404209634,
        creation_date: 1404209634,
        question_id: 24507714,
        link:
          "https://stackoverflow.com/questions/24507714/how-to-ues-dumpsys-batterystats-to-get-a-apps-power-consumption-s-percentage",
        title:
          "How to ues &quot;dumpsys batterystats&quot; to get a app&#39;s Power Consumption‘s Percentage"
      },
      {
        tags: ["android", "c++", "eclipse", "android-ndk", "jni"],
        owner: {
          reputation: 464,
          user_id: 1280679,
          user_type: "registered",
          accept_rate: 87,
          profile_image:
            "https://www.gravatar.com/avatar/5fa1ed9847948347e2e316893fa6f811?s=128&d=identicon&r=PG",
          display_name: "ZiviMagic",
          link: "https://stackoverflow.com/users/1280679/zivimagic"
        },
        is_answered: false,
        view_count: 1512,
        answer_count: 2,
        score: 3,
        last_activity_date: 1422011932,
        creation_date: 1418498889,
        last_edit_date: 1495542295,
        question_id: 27462754,
        link:
          "https://stackoverflow.com/questions/27462754/compiling-hello-jni-failure-in-eclipse-only-when-opening-the-hello-jni-c-file-in",
        title:
          "Compiling Hello-Jni failure in eclipse only when opening the hello-jni.c file in eclipse"
      },
      {
        tags: ["android", "android-intent", "android-contacts"],
        owner: {
          reputation: 58530,
          user_id: 878126,
          user_type: "registered",
          accept_rate: 51,
          profile_image: "https://i.stack.imgur.com/D5dZW.jpg?s=128&g=1",
          display_name: "android developer",
          link: "https://stackoverflow.com/users/878126/android-developer"
        },
        is_answered: false,
        view_count: 648,
        answer_count: 1,
        score: 3,
        last_activity_date: 1486047221,
        creation_date: 1457970586,
        last_edit_date: 1458130368,
        question_id: 35992096,
        link:
          "https://stackoverflow.com/questions/35992096/how-to-showhandle-contact-details-intents-of-apps",
        title: "How to show&amp;handle contact details intents of apps?"
      },
      {
        tags: ["android", "renderscript"],
        owner: {
          reputation: 26728,
          user_id: 907695,
          user_type: "registered",
          accept_rate: 71,
          profile_image:
            "https://www.gravatar.com/avatar/daac9f1ef1a91604000a38376cace034?s=128&d=identicon&r=PG",
          display_name: "Pointer Null",
          link: "https://stackoverflow.com/users/907695/pointer-null"
        },
        is_answered: true,
        view_count: 1412,
        answer_count: 1,
        score: 1,
        last_activity_date: 1372715723,
        creation_date: 1372663279,
        question_id: 17399255,
        link:
          "https://stackoverflow.com/questions/17399255/renderscript-getting-neighbor-pixel",
        title: "Renderscript - getting neighbor pixel"
      },
      {
        tags: ["android"],
        owner: {
          reputation: 6,
          user_id: 7673882,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/a1554788d4a9de1cc5ad1e03e4bc5e36?s=128&d=identicon&r=PG",
          display_name: "Santiago Cirillo",
          link: "https://stackoverflow.com/users/7673882/santiago-cirillo"
        },
        is_answered: false,
        view_count: 222,
        answer_count: 0,
        score: 1,
        last_activity_date: 1488908947,
        creation_date: 1488908947,
        question_id: 42654921,
        link:
          "https://stackoverflow.com/questions/42654921/how-to-install-android-apk-using-packageinstaller-and-deviceowner",
        title:
          "How to install android apk using PackageInstaller and DeviceOwner"
      }
    ]
  };
  // return (dispatch, getState) => {

  //   SearchService.getPopularQuestionByAuthor(authorId).then(response => {
  //     dispatch({
  //       type: types.GET_POPULAR_QUESTION_BY_AUTHOR,
  //       popularQuestion: response.data.items
  //     });
  //   });
  // };
}

export function searchPopularQuestionByTag(popularQuestions) {
  return {
    type: types.GET_POPULAR_QUESTION_BY_TAG,
    popularQuestion: [
      {
        tags: ["extjs", "mvvm", "data-binding", "grid", "viewmodel"],
        owner: {
          reputation: 126,
          user_id: 1407379,
          user_type: "registered",
          accept_rate: 27,
          profile_image: "https://i.stack.imgur.com/F4m3K.png?s=128&g=1",
          display_name: "Nish",
          link: "https://stackoverflow.com/users/1407379/nish"
        },
        is_answered: true,
        view_count: 10203,
        answer_count: 2,
        score: 4,
        last_activity_date: 1523792460,
        creation_date: 1440685199,
        last_edit_date: 1523792284,
        question_id: 32251926,
        link:
          "https://stackoverflow.com/questions/32251926/extjs-how-to-bind-grid-record-in-viewmodel-fields",
        title: "ExtJs How to bind grid record in ViewModel fields?"
      },
      {
        tags: ["javascript", "extjs", "extjs4", "sencha-touch", "extjs4.2"],
        owner: {
          reputation: 38,
          user_id: 4972133,
          user_type: "registered",
          accept_rate: 100,
          profile_image:
            "https://www.gravatar.com/avatar/6db332ec6ab981fa4a6bad974d9874ef?s=128&d=identicon&r=PG&f=1",
          display_name: "Sharvil",
          link: "https://stackoverflow.com/users/4972133/sharvil"
        },
        is_answered: false,
        view_count: 5,
        answer_count: 0,
        score: 0,
        last_activity_date: 1523791153,
        creation_date: 1523791153,
        question_id: 49841323,
        link:
          "https://stackoverflow.com/questions/49841323/how-to-put-data-from-json-to-extjs-grid-view-in-ext-window",
        title: "How to put data from json to extjs grid view in ext window"
      },
      {
        tags: ["extjs", "sencha-touch-2"],
        owner: {
          reputation: 7496,
          user_id: 220579,
          user_type: "registered",
          accept_rate: 72,
          profile_image:
            "https://www.gravatar.com/avatar/cc7313d657a33369d9b96e954f73e132?s=128&d=identicon&r=PG",
          display_name: "Kumar Bibek",
          link: "https://stackoverflow.com/users/220579/kumar-bibek"
        },
        is_answered: true,
        view_count: 6660,
        accepted_answer_id: 16772812,
        answer_count: 2,
        score: 7,
        last_activity_date: 1523790351,
        creation_date: 1369652770,
        last_edit_date: 1523790351,
        question_id: 16771804,
        link:
          "https://stackoverflow.com/questions/16771804/passing-data-to-another-view-from-controller-and-set-a-labels-value-in-sencha-t",
        title:
          "Passing data to another view from controller and set a label&#39;s value in sencha touch"
      },
      {
        tags: ["extjs", "extjs4"],
        owner: {
          reputation: 8,
          user_id: 1700319,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/002d1bd3a2720f66f1e99121e777d452?s=128&d=identicon&r=PG",
          display_name: "Patrick Kerschbaum",
          link: "https://stackoverflow.com/users/1700319/patrick-kerschbaum"
        },
        is_answered: true,
        view_count: 893,
        accepted_answer_id: 14829448,
        answer_count: 1,
        score: 1,
        last_activity_date: 1523784288,
        creation_date: 1348665948,
        last_edit_date: 1523784249,
        question_id: 12602814,
        link:
          "https://stackoverflow.com/questions/12602814/extjs-4-grid-columns-error",
        title: "ExtJS 4 grid columns error"
      },
      {
        tags: ["extjs", "grid"],
        owner: {
          reputation: 2540,
          user_id: 128586,
          user_type: "registered",
          accept_rate: 58,
          profile_image:
            "https://www.gravatar.com/avatar/8f2033750c1a409b142ae0f3025c3857?s=128&d=identicon&r=PG",
          display_name: "ken",
          link: "https://stackoverflow.com/users/128586/ken"
        },
        is_answered: true,
        view_count: 13444,
        accepted_answer_id: 2431369,
        answer_count: 2,
        score: 4,
        last_activity_date: 1523783922,
        creation_date: 1268374975,
        last_edit_date: 1523678737,
        question_id: 2430899,
        link: "https://stackoverflow.com/questions/2430899/extjs-dynamic-grid",
        title: "Extjs Dynamic Grid"
      },
      {
        tags: ["date", "datetime", "extjs", "extjs4.2"],
        owner: {
          reputation: 827,
          user_id: 2860391,
          user_type: "registered",
          accept_rate: 83,
          profile_image:
            "https://www.gravatar.com/avatar/012dccf5619014e779a73586edff782b?s=128&d=identicon&r=PG&f=1",
          display_name: "Abdul Rehman Yawar Khan",
          link:
            "https://stackoverflow.com/users/2860391/abdul-rehman-yawar-khan"
        },
        is_answered: true,
        view_count: 89,
        accepted_answer_id: 35322652,
        answer_count: 2,
        score: 1,
        last_activity_date: 1523781342,
        creation_date: 1455113181,
        last_edit_date: 1523781342,
        question_id: 35317367,
        link:
          "https://stackoverflow.com/questions/35317367/extjs4-2-persist-time-while-displaying-date-time-in-datecolumn",
        title:
          "ExtJs(4.2): Persist Time While Displaying Date time in DateColumn"
      },
      {
        tags: ["javascript", "extjs"],
        owner: {
          reputation: 6,
          user_id: 2851589,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/a13f190d5480d177866982cdae38e1ae?s=128&d=identicon&r=PG&f=1",
          display_name: "Amit Nekar",
          link: "https://stackoverflow.com/users/2851589/amit-nekar"
        },
        is_answered: false,
        view_count: 68,
        answer_count: 1,
        score: 0,
        last_activity_date: 1523781095,
        creation_date: 1511791893,
        last_edit_date: 1523781095,
        question_id: 47512955,
        link:
          "https://stackoverflow.com/questions/47512955/how-to-add-a-button-in-grid-row-in-extjs",
        title: "How to add a button in grid row in Extjs?"
      },
      {
        tags: ["css", "class", "extjs", "styles"],
        owner: {
          reputation: 21,
          user_id: 4317395,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/503427e68438b218362858b49b4bf8e9?s=128&d=identicon&r=PG&f=1",
          display_name: "Excessstone",
          link: "https://stackoverflow.com/users/4317395/excessstone"
        },
        is_answered: true,
        view_count: 6848,
        answer_count: 2,
        score: -1,
        last_activity_date: 1523779528,
        creation_date: 1417552541,
        last_edit_date: 1523779528,
        question_id: 27258463,
        link:
          "https://stackoverflow.com/questions/27258463/extjs-5-how-to-make-two-panel-with-different-style",
        title: "Extjs 5: how to make two panel with different style"
      },
      {
        tags: ["extjs", "extjs4", "extjs-mvc", "extjs4.1"],
        owner: {
          reputation: 3006,
          user_id: 1377826,
          user_type: "registered",
          accept_rate: 64,
          profile_image:
            "https://www.gravatar.com/avatar/f0b6e6e3ea80d80ea4f6c4955c10031c?s=128&d=identicon&r=PG",
          display_name: "sharon Hwk",
          link: "https://stackoverflow.com/users/1377826/sharon-hwk"
        },
        is_answered: true,
        view_count: 2926,
        accepted_answer_id: 11298382,
        answer_count: 1,
        score: 3,
        last_activity_date: 1523778141,
        creation_date: 1341245594,
        last_edit_date: 1523778141,
        question_id: 11297378,
        link:
          "https://stackoverflow.com/questions/11297378/grid-button-click-handler",
        title: "Grid - button click handler"
      },
      {
        tags: ["extjs", "extjs4"],
        owner: {
          reputation: 18,
          user_id: 572935,
          user_type: "registered",
          profile_image:
            "https://www.gravatar.com/avatar/c020a719f97cfb2cf9653fd1628889e7?s=128&d=identicon&r=PG",
          display_name: "chufall",
          link: "https://stackoverflow.com/users/572935/chufall"
        },
        is_answered: true,
        view_count: 1748,
        accepted_answer_id: 7064078,
        answer_count: 1,
        score: 0,
        last_activity_date: 1523776955,
        creation_date: 1313385871,
        last_edit_date: 1523776955,
        question_id: 7061931,
        link:
          "https://stackoverflow.com/questions/7061931/prevent-extjs4s-treegrid-load-data-at-the-initialization",
        title: "Prevent extjs4&#39;s treegrid load data at the initialization"
      }
    ]
  };
  // return (dispatch, getState) => {
  //   const searchText = searchSelectors.getSearchText(getState());
  //   const fetchPromises = SearchService.getTestData(searchText).then(
  //     response => {
  //       dispatch({
  //         type: types.GET_POPULAR_QUESTION_BY_TAG,
  //         result: response.data.items
  //       });
  //     }
  //   );
  // };
}
