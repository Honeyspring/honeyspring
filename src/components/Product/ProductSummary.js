import React from 'react';
import PropTypes from 'prop-types';
import {Col  } from  'antd';
import ProductCard from './ProductCard';


const ProductSummary=({product})=> {
    return (
        <Col className="gutter-row" >
        <ProductCard product={product} key={product.id}/>
      </Col>
    )
}
ProductSummary.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.string,
     price:PropTypes.number,
    name: PropTypes.string,
      quantity:PropTypes.number,
    description: PropTypes.string,
     image: PropTypes.string
  }).isRequired

}
export default ProductSummary
