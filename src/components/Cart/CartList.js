import React from "react";
import { connect } from "react-redux";
import {
 increase,
  decrease,
  remove,
  toggleAmount,
 clearCart
} from "../../redux/actions/cartAction";

const CartList = ({
  cart,
  remove,
  increase,
  decrease,
  toggle
}) => {
  return (
    <div className="cart-item">
      <img src={cart.img} alt={cart.title} />
      <div>
        <h4>{cart.title}</h4>
        <h4 className="item-price">${cart.price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove()}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => toggle("inc")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{cart.amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (cart.amount === 1) {
              return remove();
            } else {
              return toggle("dec");
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};


const mapStateToprops = (state) => {
  return {
   
    cart: state.cart,/*grabbing the state of the product on the product reducer in the root reducer*/
   
    };
 
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;

  return {
      remove: () => dispatch(remove(id)),

    increase: () => dispatch(increase({ id }) ),
    decrease: () => dispatch(decrease({ id, amount } )),
    toggle: (toggle) => dispatch(toggleAmount({ id, toggle }))
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(CartList);