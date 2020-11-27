import React,{useState} from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {  Menu,Badge } from 'antd';
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";


const key = 'fjy78999999'
  
const SignedOutLinks = ({carts}) => {
  //const { count, setCount } = useState(JSON.parse(localStorage.getItem(key))|| 0);
  let count = JSON.parse(localStorage.getItem(key)) 
    let counter = count.length
    return (
      <>
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
             <Menu.Item className="text-left logo" > <Link to='/'>HoneySpring  </Link></Menu.Item>
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
        </>
    )
}
const mapStateToprops = (state) => {
  return {
   
    carts: state.cart/*grabbing the state of the product on the product reducer in the root reducer*/
  };
};

export default connect(mapStateToprops,null )( SignedOutLinks)
