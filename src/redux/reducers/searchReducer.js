import {
    FETCH_USER_INPUT,
    SEARCH_RESULT_SUCCESS,
    SEARCH_RESULT_FAIL,
  } from "../constants/constants";
  import { initialState } from "../store/state";
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_INPUT:
        return {
          ...state,
          loading: true,
        };
      case SEARCH_RESULT_SUCCESS:
        return {
          ...state,
          loading: false,
          searchResult: action.payload,
          error: [],
        };
      case SEARCH_RESULT_FAIL:
        return {
          ...state,
          loading: false,
          searchResult:[],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default searchReducer;
  