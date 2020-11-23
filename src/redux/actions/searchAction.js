import {
    FETCH_USER_INPUT,
    SEARCH_RESULT_SUCCESS,
    SEARCH_RESULT_FAIL,
  } from "../constants/constants";
  //import axios from "axios";


  
  export const getUserData = (query) => {
    return {
      type:  FETCH_USER_INPUT,
      payload:query
      
    };
  };
  export const SearchSucess = (search_result) => {
    return {
      type: SEARCH_RESULT_SUCCESS,
      payload: search_result,
    };
  };
  export const SearchFailed = (error) => {
    return {
      type: SEARCH_RESULT_FAIL,
      payload: error,
    };
  };
  