import React, { useEffect } from 'react';
import {Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Col ,Card, Row} from  'antd';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import {displayProductById } from "../../redux/actions/displayProductAction";
import { addToCart } from '../../redux/actions/cartAction';

const ProductDetails = ({match,fetchProduct,product,add})=> {
  const  productID=match.params.id; 
   useEffect(() => {
    fetchProduct(productID);
  }, [fetchProduct,productID]); 
 // product,match, */

    const addToCart = () => {
      add(product)
     /*  setCart([
        ...cart,
        product
      ]) */
      console.log(product)
      //setDisabled(true)
  }
  const  item  = product.product
    return (
       <Card  bordered={false} >
      <Row gutter={[16, 24]}>
       <Col className="gutter-row" sm={32} lg xl md={10} >
             <div className="site-card-border-less-wrapper">
       <Card  bordered={false} 
        cover={
      <img
        alt="example"
         src={item.image}
       /*  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" */
      />
    }>
         
          <b className='left'>  {item.price}  </b>
        
          <p><Link to={`/products/${product.id}`}> Add To cart
               <IconContext.Provider value={{ className: "icons" }}>
                  <FaShoppingCart  />
                </IconContext.Provider>
         </Link></p>
        </Card>
           </div>
      </Col>
        <Col className="gutter-row" sm={32}lg xl md={14} style={{position:'relative'}} >
          <b style={{fontSize:'18px;'}}>{item.title}</b>
            <p className='category grey-text'>{item.category}</p>
            <p>{item.description}</p>
             <button onClick={addToCart} className='desc-btn' > ADD TO CART
             
                           </button> 
       </Col>
  
      </Row>
      </Card>
    )
}
ProductDetails.propTypes = {
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
    fetchProduct: (productID) =>  dispatch(displayProductById(productID)),
     add :(product) =>  dispatch(addToCart(product)),
  };
};
export default connect(mapStateToprops, mapDispatchToprops)(ProductDetails)   
