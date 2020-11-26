import React  from 'react';
 import { connect } from "react-redux";
 import PropTypes from 'prop-types';
import {Row  } from  'antd';
 import ProductSummary from './ProductSummary';



const ProductList =({products})=> {
 
  return (
    
      
     
      <Row gutter={[16, 24]} align='center'>
       
        
     
     {products && products.products &&  products.products.map((product) => (
         
       
      <ProductSummary product={product} key={product.id} />
   
    ))}   
   
       </Row>   
       )
  
     
 
}

ProductList.propTypes = {
  products: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    description: PropTypes.string,
        image: PropTypes.string
  }).isRequired

   
} 
 
export default ProductList
/* const mapStateToprops = (state) => {
  return {
   
    products: state.displayProducts grabbing the state of the product on the product reducer in the root reducer
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    fetchProduct: () => dispatch(displayProducts()),
  };
};
export default connect(mapStateToprops, mapDispatchToprops)(ProductList)
 */