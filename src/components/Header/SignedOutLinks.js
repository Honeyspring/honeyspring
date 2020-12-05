import React,{useState} from 'react'
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom'
import {  Menu,Badge } from 'antd';
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";


const key = 'fjy78999999'
 
const SignedOutLinks = ({counts}) => {
   
  //JSON.parse(localStorage.getItem(key)) 
   let counter;
  if (counts.cart && counts.cart.length) {
    counter = counts.cart.length
  } else {
     counter =0
  } 
  console.log(counter)
    return (
      <>
      <NavLink to='/' className=" logo">HoneySpring</NavLink>
        
        <NavLink to='/cart' style={{float:'right'}}>
          <Badge count={counter}>
                  <IconContext.Provider value={{ className: "icons" }}>
                  <FaShoppingCart  />
                    </IconContext.Provider>
          </Badge>
          </NavLink>
         
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
             <Menu.Item className="text-left " > <Link to='/' className=" logo" >HoneySpring  </Link></Menu.Item>
            <Menu.Item key="1" className='text-right'>
                 
                <Link to='/cart'>
                      <Badge count ={counter}>
                  <IconContext.Provider value={{ className: "icons" }}>
                  <FaShoppingCart  />
                    </IconContext.Provider>
              </Badge>
              
            </Link>
            </Menu.Item>
           
        </Menu> 
        */}
        </>
    )
}
const mapStateToprops = (state) => {
  console.log(state.cart.quantity)
  return {
   counts:state.cart
  /* counts: state.cart.quantitygrabbing the state of the cart on the cart reducer in the root reducer*/
  };
};

export default connect(mapStateToprops,null )( SignedOutLinks)
