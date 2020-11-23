import {
    SUBMIT_USER_DATA,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from "../constants/constants";
  import axios from "axios";

  
  /*action creator which returns action*/
  
  export const clearUserData  = () => {
    return {
      type: CLEAR_USER_DATA,
    };
  };
  export const logoutSuccess = (users_credential) => {
    return {
      type:  LOGOUT_SUCCESS,
      payload:users_credential,
    };
  };
  export const logoutError = (error) => {
    return {
      type: LOGOUT_FAIL,
      payload: error,
    };
  };
  /*action creator  that returns a function through thunk which allows side effects like async api calls
  the app dispatch the user request to submit data which sets loading to true
  on getting response from api it dispacth success thereby submitting data
  if it doesnt get data it dispatch error  g,
                  }*/
  export const logout = (users_credential) => {
    return (dispatch) => {
       
            dispatch(clearUserData());
           
    
  //const token =localStorage.setItem(key,token)
      axios({
        method: "post",
        headers: { 'Content-Type': 'application/json',
                    ////'Authorization':`Basic ${token}`
                    },
       
       url:`https://api.domesticworkers.com.ng/api/login `,
       data:{
        ...users_credential
       } 
      
      })
        .then((response) => {
          const token= response.data.token;
          if (response.status){
        
            localStorage.removeItem('key');
            sessionStorage.removeItem("sessionItem")
            dispatch(logoutgSuccess(response.data));
            //redirect.push('/dashboard');
          }
         
          
        })
        .catch((error) => {
          const errorMsg= error.data.message
        
       dispatch(logoutError(errorMsg));  
          });
    };
  };
  