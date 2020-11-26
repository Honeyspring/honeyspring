import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;
const FooterLayout = () => {
    const today = new Date().getFullYear();
    return (
      
            <Footer style={{ textAlign: 'center' }}>HoneySpring  &copy; {today}</Footer> 
       
    )
}

export default FooterLayout
