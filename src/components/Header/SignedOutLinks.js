import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {  Menu,Badge } from 'antd';
import { FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";

const key = 'fjy78999999'
  
const SignedOutLinks = () => {
  const { count, setCount } = useState(JSON.parse(localStorage.getItem(key))|| 0);
   
    return (
      <>
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
             <Menu.Item className="text-left logo" >HoneySpring</Menu.Item>
            <Menu.Item key="1" className='text-right'>
                 
                <Link to='/cart'>cart
                      <Badge count ={count}>
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

export default SignedOutLinks
