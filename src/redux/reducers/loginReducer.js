import {
    SUBMIT_USER_DATA,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from "../constants/constants";
  import { initialState } from "../store/state";
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case  SUBMIT_USER_DATA:
        return {
          ...state,
          loading: true,
        };
      case  LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload,
          isAuthorized:true,
          error: [],
        };
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          isAuthorized:false,
          token:[],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default loginReducer;
  