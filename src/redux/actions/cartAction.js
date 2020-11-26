
import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
    TOGGLE_AMOUNT,
  ADD_TO_CART
} from "../constants/constants";

export const addToCart= (product) => {
  return {
    type:   ADD_TO_CART,
      payload: {
         product,
          quantity:1
      }
  };
};
export const decrease = ({ id, amount }) => {
  return {
    type: DECREASE,
    payload: { id, amount }
  };
};
export const increase = (id) => {
  return {
    type: INCREASE,
    payload: id,
  };
};
export const clearCart = (id) => {
  return {
    type:  CLEAR_CART,
    payload:id,
  };
};
export const remove= (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
export const getTotals= (id) => {
  return {
    type:  GET_TOTALS,
    payload: id,
  };
};
export const toggleAmount = (id) => {
  return {
    type:   TOGGLE_AMOUNT,
    payload: id,
  };
};

