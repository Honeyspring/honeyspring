import React, { useEffect } from 'react';
import {Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Col ,Card, Row} from  'antd';
import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import {displayProductById } from "../../redux/actions/displayProductAction";


const ProductDetails = ({match,fetchProduct,product})=> {
  const  productID=match.params.id; 
   useEffect(() => {
    fetchProduct(productID);
  }, [fetchProduct,productID]); 
 // product,match, */
  const  item  = product.product
    return (
      <Row gutter={[16, 24]}>
       <Col className="gutter-row" sm={32} lg xl md={8} >
             <div className="site-card-border-less-wrapper">
       <Card title={item.title} bordered={false} 
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
        <Col className="gutter-row" sm={32}lg xl md={16} >
          <p>{item.title}</p>
            <p>{item.category}</p>
          <p>{item.description}</p>
       </Col>
  
      </Row>
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
    fetchProduct: (productID) =>  dispatch(displayProductById(productID))
  ,
  };
};
export default connect(mapStateToprops, mapDispatchToprops)(ProductDetails)   
