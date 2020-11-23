import {
    CLEAR_USER_DATA,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
  } from "../constants/constants";
  import { initialState } from "../store/state";
  
  const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case  CLEAR_USER_DATA:
        return {
          ...state,
          loading: true,
        };
      case  LOGOUT_SUCCESS:
        return {
          ...state,
          loading: false,
          token:[],
          isAuthorized:false,
          error: [],
        };
      case LOGOUT_FAIL:
        return {
          ...state,
          loading: false,
          isAuthorized:true,
          token:action.payload,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default logoutReducer;
  