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


const cartReducer = (state = initialState, action) => {
    let cart = state.cart;
  switch (action.type) {
 

      case ADD_TO_CART:
        const cart = [...state.cart,action.payload];
          return {
              ...state,
              cart
          };
      case INCREASE:

          let tempCart = state.cart.map(cartItem => {
              if (cartItem.id === action.payload.id) {
                  cartItem = { ...cart, amount: cartItem.amount + 1 };
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
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
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
          let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0
      }
    );
    total = parseFloat(total.toFixed(2));
  
      return {
        ...state,
          total,
          amount,
      }; 
      
      case TOGGLE_AMOUNT:
          return {
        ...state,
              cart: state.cart.map(cartItem => {
                  if (cartItem.id === action.payload.id) {
                      if (action.payload.toggle === "inc") {
                          return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
                      }
                      if (action.payload.toggle === "dec") {
                          return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
                      }
                  }
                   return cartItem;
              })
          };
      case CLEAR_CART:
  return { ...state, cart: [] }
    default:
      return state;
  }
};
export default cartReducer;

