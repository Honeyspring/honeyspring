import React, { useEffect ,useState} from 'react';
import {Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Col ,Card, Row} from  'antd';
/* import PropTypes from 'prop-types'; */
import {
 increase,
  decrease,
  remove,
  toggleAmount,
 clearCart
} from "../../redux/actions/cartAction";

  const key='fjy78999999'
const Cart = ({ match,
  cart,
  clear,
  remove,
  increase,
  decrease,
  toggle
}) => {
 
  const [count, setCount] = useState(0);
  const [carts, setCart] = useState(JSON.parse(localStorage.getItem(key)) || []);
  cart =JSON.parse(localStorage.getItem(key)) 

  const IncreaseCount = () => {
   setCount(count + 1);
     //increase(productID )
    
  }
  const DecreaseCount = () => {
    setCount(count - 1);
  
  
  }
  const Clear = () => {
    clear();
  console.log(cart)
 
  }
  const cartList = carts;
  const num = count;

  console.log(cartList, num);
  
  return (
     carts && carts.length ? (
    <>
     
         
        {carts.map((cart,id) => (
     
          <Card bordered={false} style={{ marginBottom: '12px' }} key={id}>
            { console.log(cart.product)}
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" sm lg xl md={8} >
                <div className="site-card-border-less-wrapper">
                  <Card bordered={false} >
                    <Link to={`/products/${cart.product.id}`}>
                      <img
                        alt="example"
                        src={cart.product.image}
                        className='cart-img'
      
                      />
                    </Link>
        
        
        
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" sm lg xl md={16} >
                <b>
                  {cart.product.title}
                </b>
                <p>Price:₦{cart.product.price}</p>
                <p>Cateory:{cart.product.category}</p>
                 <p>quantity:{cart.quantity + count}</p>
                <p style={{ width: '12px' }}>
                  <button onClick={DecreaseCount} className='btn left'>-</button>
                  {cart.quantity + 1}
                  <button onClick={IncreaseCount} className='right btn'>+</button>
                </p>
              </Col>
  
            </Row>
          </Card>
        ))}
      <Card style={{marginTop:'12px',  backgroundColor:' #2b959c !important'}}bordered={false} >
        <Row gutter={[16, 24]}>
       <Col className="gutter-row" sm lg xl md={8} >
         
             <div className="site-card-border-less-wrapper">
       <h5>Total Quantity</h5>
      <h6>Total Cost:</h6>
         </div>
      </Col>
        <Col className="gutter-row" sm lg xl md={16} >
          <p>{carts.length + count}</p>
         {/* <b>{carts.price  * count}</b> */}
          
       <button onClick={Clear}>clearCart</button>
       </Col>
  
      </Row>
        </Card>
      </>
   ): (<p > No Item In Cart</p >)


 
    )
}


const mapStateToprops = (state) => {
  return {
   
    cart: state.cart,/*grabbing the state of the cart on the cart reducer in the root reducer*/
   
    };
 
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;

  return {
      remove: () => dispatch(remove(id)),
 clear: () => dispatch(clearCart({ id,amount }) ),
    increase: () => dispatch(increase({ id }) ),
    decrease: () => dispatch(decrease({ id, amount } )),
    toggle: (toggle) => dispatch(toggleAmount({ id, toggle }))
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Cart)   
