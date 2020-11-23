import {
    SUBMIT_USER_DATA,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from "../constants/constants";
  import axios from "axios";
import {LoginService} from '../services/authServices';
import {key,sessionItem} from '../config.js'
  
  /*action creator which returns action*/
  
  export const submitUserData = () => {
    return {
      type: SUBMIT_USER_DATA,
    };
  };
  export const loginSuccess = (users_credential) => {
    return {
      type:  LOGIN_SUCCESS,
      payload:users_credential,
    };
  };
  export const loginError = (error) => {
    return {
      type: LOGIN_FAIL,
      payload: error,
    };
  };
  /*action creator  that returns a function through thunk which allows side effects like async api calls
  the app dispatch the user request to submit data which sets loading to true
  on getting response from api it dispacth success thereby submitting data
  if it doesnt get data it dispatch error  g,
                  }*/
  export const login = (users_credential) => {
    
    return (dispatch) => {
   
        if(users_credential !=='' ){
            dispatch(submitUserData());
            delete users_credential.error;
        }
    
 LoginService(users_credential)
        .then((response) => {
          const token= response.data.token;
          if (response.status && token ){
        
            localStorage.setItem(key,JSON.stringify(token));
            sessionStorage.setItem(sessionItem,JSON.stringify(response.data.user))
            dispatch(loginSuccess(response.data));
         
          }else{
            dispatch(loginError(response.data));  
     
          }
         
          
        })
        /* .catch((error) => {
          const errorMsg= error.data
          dispatch(loginError(errorMsg));  
     
       
          }); */
    };
  };
  