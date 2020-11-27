/* eslint-disable import/prefer-default-export */
/**
 * @constant initialState
 * @description initial state of App
*/
const key = 'fjy78999999';
    const cartMemo = JSON.parse(localStorage.getItem(key));
export const initialState = {
  products: [
    
  ],
 product:{},
  cart: cartMemo ,
  total: 0,
  quantity: 0,
  isAuthorized:false,
  token:'',
  success:"",
   error: [],
  loading: false,
};
