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
  total,
  clear,
  remove,
  increase,
  decrease,
  toggle
}) => {
 
  const [count, setCount] = useState(0);
  //const [carts, setCart] = useState(JSON.parse(localStorage.getItem(key)) || []);
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
    /* dconsole.log(cart)
   
    }
    const cartList = carts;
    const num = count;
  
    console.log(cartList, num);
     */
  }
  console.log(cart)
  return  (
     cart && cart.length ? (
    <>
     
         
        {cart.map((cartItem,id) => (
     
          <Card bordered={false} style={{ marginBottom: '12px' }} key={id}>
            { console.log(cartItem.product)}
            <Row gutter={[16, 24]}>
              <Col className="gutter-row" sm lg xl md={8} >
                <div className="site-card-border-less-wrapper">
                  <Card bordered={false} >
                    <Link to={`/products/${cartItem.product.id}`}>
                      <img
                        alt="example"
                        src={cartItem.product.image}
                        className='cart-img'
      
                      />
                    </Link>
        
        
        
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" sm lg xl md={16} >
                <b>
                  {cartItem.product.title}
                </b>
                <p><b style={{paddingRight:'15px'}}>Price:</b>₦{cartItem.product.price}</p>
                <p><b style={{paddingRight:'15px'}}> Category:</b>{cartItem.product.category}</p>
                 <p><b style={{paddingRight:'15px'}}>Quantity:</b>{cartItem.quantity }</p>
                <p style={{ display:'flex' }}>
                  <button onClick={DecreaseCount} className='left-btn'>-</button>
                  <b style={{padding:'0 15px'}}> {cartItem.quantity + 1}</b>
                  <button onClick={IncreaseCount} className='right-btn'>+</button>
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
       <h5 className='grey-text'>Total Cost:</h5>
         </div>
      </Col>
            <Col className="gutter-row" sm lg xl md={16} >
          
              
          <p>{cart.length + count}</p>
         <b>₦{total}</b> 
          
            <Col sm lg xl md={16} style={{marginTop:'22px'}}>
       <button onClick={Clear}  className='desc-btn'>Empty Cart</button>
        </Col>
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
   total:state.cart.total
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
