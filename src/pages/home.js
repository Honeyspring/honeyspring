import React,{useEffect} from 'react'
import {Row } from  'antd';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import ProductList from '../components/Product/productList';
import { displayProducts } from "../redux/actions/displayProductAction";

const Home =({products,fetchProduct})=> {
  console.log(products)
   useEffect(() => {
    fetchProduct();
  }, [fetchProduct]); 
    return (
    
       products.loading ?(<p>..loading</p>):(
          <Row gutter={[16, 24]} align='center'>
  <ProductList products={products}/>
       </Row>   
         )

    
    )
}
/* Home.propTypes = {

   products: PropTypes.shape({
  id: PropTypes.string,
    price: PropTypes.number,
   title: PropTypes.string,
    quantity: PropTypes.number,
    description: PropTypes.string,
        image: PropTypes.string
  }).isRequired 
} */
const mapStateToprops = (state) => {
  return {
   
    products: state.displayProducts/*grabbing the state of the product on the product reducer in the root reducer*/
  };
};
const mapDispatchToprops = (dispatch) => {

  return {
    fetchProduct: () =>  dispatch(displayProducts())
  ,
  };
};
export default connect(mapStateToprops, mapDispatchToprops )(Home)
