import {
  SUBMIT_PROJECT_DATA,
  SUBMIT_PROJECT_SUCCESS,
  SUBMIT_PROJECT_FAIL,
} from "../constants/constants";
import { initialState } from "../store/state";

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PROJECT_DATA:
      return {
        ...state,
        loading: true,
      };
    case SUBMIT_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project:action.payload,
     
        error: [],
      };
    case SUBMIT_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        project:[],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default projectReducer;
