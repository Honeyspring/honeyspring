import {
  FETCH_ALL_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
 //FETCH_CART_SUCCESS,
  FETCH_PRODUCTBYID_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from "../constants/constants";
import { initialState } from "../store/state";

const displayProductReducer = (state = initialState, action) => {
  switch (action.type) {
 


    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        loading: !state.loading
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
      loading:false,
        products: action.payload,
          product:{},
        error: [],
      };
    /* case FETCH_CART_SUCCESS:
      const key = 'fjy78999999';
          const cartMemo = JSON.parse(localStorage.getItem(key))
      return {
        ...state,
      loading:false,
      cart: cartMemo,
      }; */
       case FETCH_PRODUCTBYID_SUCCESS:
      return {
        ...state,
      loading:false,
        product: action.payload,
        error: [],
          products:[]
      };
      
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        product:{},
       products:[],
        error: action.payload,
      }; 
      
    
    default:
      return state;
  }
};
export default displayProductReducer;
