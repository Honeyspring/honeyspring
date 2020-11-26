/* eslint-disable no-param-reassign, no-underscore-dangle */
import React, { useState } from 'react'
import {Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Card,Badge} from 'antd';
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { addToCart } from '../../redux/actions/cartAction';

const { Meta } = Card;
const key = 'fjy78999999'

const ProductCard = ({ product,add }) => {
  const [cart,setCart]=useState([])
    const addToCart = () => {
      add(product)
      setCart([
        ...cart,
        product
      ])
      console.log(product)
  } 
  
  


    localStorage.setItem(key,JSON.stringify(product));
    return (
      <div className="site-card-border-less-wrapper">
    
        <Card className='product-card' title={product.title} bordered={false} 
       
          >
            <>
             <Link to={`/products/${product.id}`}> 
               <img
        alt="example"
         src={product.image}
      
              />
              </Link>
          <b className='left'>  {product.price} </b>
       
         
          <button onClick={addToCart} className='right'>
             {/*   <Badge count={num}> */}
                  <IconContext.Provider value={{ className: "icons" }}>
                  <FaShoppingCart  />
                </IconContext.Provider>
               {/*  </Badge> */}
                           </button> 
                           </>
      
            
   {/*   <Meta
     
      description=  {product.category} 
    /> */}
        </Card>
        
      </div>
    )
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.string, 
    price: PropTypes.number,
    title: PropTypes.string,
    quantity: PropTypes.number,
    description: PropTypes.string,
        image: PropTypes.string
  }).isRequired
}
const mapDispatchToprops = (dispatch) => {

  return {
    add :(product) =>  dispatch(addToCart(product))
  
  };
};
export default connect(null, mapDispatchToprops )(ProductCard)
