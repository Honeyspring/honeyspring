import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
    TOGGLE_AMOUNT,
   ADD_TO_CART
} from "../constants/constants";
import { initialState } from "../store/state";

const key = 'fjy78999999';

const cartReducer = (state = initialState, action) => {
    let cart = state.cart;
  switch (action.type) {
 

      case ADD_TO_CART:
          const cartList = [...cart, action.payload];
          localStorage.setItem(key, JSON.stringify(cartList))
          const cartMemo = JSON.parse(localStorage.getItem(key));
          return {
              ...state,
              cart:cartMemo
          };
      case INCREASE:

          let tempCart = state.cart.map(cartItem => {
              if (cartItem.id === action.payload) {
                  cartItem = { ...cart, quantity: cartItem.quantity+ 1 };
              }
              return cartItem;
          });
   
          return {
              ...state,
              cart: tempCart
          };
      case DECREASE:
           let decCart = state.cart.map(cartItem => {
      if (cartItem.id === action.payload) {
        cartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
               }
                return cartItem;
           });
      return {
        ...state,
     cart: decCart
      };
       case REMOVE:
      return {
        ...state,
       cart: state.cart.filter(cartItem => cartItem.id !== action.payload)
      };
      
      case GET_TOTALS:
          let { total, quantity} = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity} = cartItem;
        const itemTotal = price * quantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity+= quantity;

        return cartTotal;
      },
      {
        total: 0,
        quantity: 0
      }
    );
    total = parseFloat(total.toFixed(2));
  
      return {
        ...state,
          total,
          quantity,
      }; 
      
      case TOGGLE_AMOUNT:
          return {
        ...state,
              cart: state.cart.map(cartItem => {
                  if (cartItem.id === action.payload.id) {
                      if (action.payload.toggle === "inc") {
                          return (cartItem = { ...cartItem, quantity: cartItem.quantity+ 1 });
                      }
                      if (action.payload.toggle === "dec") {
                          return (cartItem = { ...cartItem, quantity: cartItem.quantity- 1 });
                      }
                  }
                   return cartItem;
              })
          };
      case CLEAR_CART:
        localStorage.removeItem(key)
  return { ...state, cart: [] }
    default:
      return state;
  }
};
export default cartReducer;

