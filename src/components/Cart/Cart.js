import React, { useEffect ,useState} from 'react';
import {Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Col ,Card, Row} from  'antd';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import {displayProductById } from "../../redux/actions/displayProductAction";

  const key='fjy78999999'
const Cart = ({ match, fetchProduct, product }) => {
  const productID = match.params.id;
  useEffect(() => {
    fetchProduct(productID);
  }, [fetchProduct, productID]);
  const [count, setCount] = useState(0);
  const [carts, setCart] = useState(JSON.parse(localStorage.getItem(key)) || []);
  const item = product.product;
  const itemId = product.id
  const IncreaseCount = () => {
    setCount(count + 1);
     
      
  }
  const DecreaseCount = (item) => {
    setCount(count - 1);
  
  
  }
  const cartList = carts;
  const num = count;

  console.log(cartList, num);
  
  return (
     carts && carts.length ? (
    <>
     
         
        {carts.map((cart) => (
     
          <Card bordered={false} style={{ marginBottom: '12px' }} key={cart.id}>
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
                <p style={{ width: '12px' }}>
                  <button onClick={DecreaseCount} className='btn left'>-</button>
                  {cart.quantity}
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
          <p>{count}</p>
         {/* <b>{carts.price  * count}</b> */}
          
       
       </Col>
  
      </Row>
        </Card>
      </>
   ): (<p > No Item In Cart</p >)


 
    )
}
Cart.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
     id:PropTypes.string
      
     }).isRequired
   }).isRequired,
   fetchProduct:PropTypes.func.isRequired ,
   product: PropTypes.shape({
  
    price: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    description: PropTypes.string,
        image: PropTypes.string
  }).isRequired 
}

 const mapStateToprops = (state )=> {
 
  return {
    productID: state.displayProductById,
      product: state.displayProducts,
  };
};
const mapDispatchToprops = (dispatch) => {

  return {
    fetchProduct: (productID) =>  dispatch(displayProductById(productID))
  ,
  };
};
export default connect(mapStateToprops, mapDispatchToprops)(Cart)   
