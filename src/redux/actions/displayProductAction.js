import axios from "axios";
import {
  FETCH_ALL_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  // FETCH_CART_SUCCESS,
 FETCH_PRODUCTBYID_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../constants/constants";

import { API_CODE_ERROR } from "../constants/APIconfig";

export const getProducts = () => {
  return {
    type: FETCH_ALL_PRODUCTS,
    
  };
};
/* export const getCart = (cart) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload: cart,
  };
} */
export const getProductsSucess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};
export const getProductByIDSucess = (product) => {
  return {
    type: FETCH_PRODUCTBYID_SUCCESS,
    payload: product,
  };
};
export const getProductsFailed = (error) => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: error,
  };
};

/* action creator  that returns a function through thunk which allows side effects like async api calls
  the app dispatch the user request to submit data which sets loading to true
  on getting response from api it dispacth success thereby getting data
  if it doesnt get data it dispatch error  .slice(0,5)  ,
                  } */

export const displayProducts = () => {
  
  return (dispatch) => {
   
    dispatch(getProducts());
    axios({
      method: "get",

      url: `https://fakestoreapi.com/products`,
    })
      .then((response) => {
        const products = response.data;
    
        dispatch(getProductsSucess(products));

     
      })
      .catch((error) => {
        switch (error.status) {
          case 500:
            dispatch(
              getProductsFailed("We Encountered An Internal Error, Try Again...")
            );
          
            break;
          case 404:
            dispatch(getProductsFailed("No Domestic worker Has Been Registered"));
          
            break;
          case 403:
            dispatch(
              getProductsFailed(
                "You're Not Authorized To View This Profile, As You're Not Logged In With Correct Token..."
              )
             
            );
          
            break;
          default:
            dispatch(
              getProductsFailed(
                error.message ? error.message : API_CODE_ERROR[error.status]
              )
            );
            break;
        }
      });
  };
};

export const displayProductById = ( productID ) => {
  
  return (dispatch) => {
   
    dispatch(getProducts());
    axios({
      method: "get",
      headers: { 'Content-Type': 'application/json'},
      url: `https://fakestoreapi.com/products/${productID}`,
      data: {
        ...productID
      }
     
    })
      .then((response) => {
        const product = response.data;
    
        dispatch(getProductByIDSucess(product));

     
      })
      .catch((error) => {
        switch (error.status) {
          case 500:
            dispatch(
              getProductsFailed("We Encountered An Internal Error, Try Again...")
            );
          
            break;
          case 404:
            dispatch(getProductsFailed("No Domestic worker Has Been Registered"));
          
            break;
          case 403:
            dispatch(
              getProductsFailed(
                "You're Not Authorized To View This Profile, As You're Not Logged In With Correct Token..."
              )
             
            );
          
            break;
          default:
            dispatch(
              getProductsFailed(
                error.message ? error.message : API_CODE_ERROR[error.status]
              )
            );
            break;
        }
      });
  };
};