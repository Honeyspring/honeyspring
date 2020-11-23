import React from 'react';
import HeaderLayout from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import FooterLayout from '../components/Footer/Footer';
import { Layout, Breadcrumb  } from 'antd';
const { Content } = Layout;
const LayoutWrap = (routerProps) => {
    console.log(routerProps)
    return (
       
           <Layout style={{ minHeight: '100vh' }}>
    
   
    <HeaderLayout  />
  
  <Layout className="site-layout" style={{ margin: '24px 16px 0' }}>
 
 <Sidebar/>
 <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ minHeight: 360 }}>
          {routerProps.children}
          </div>
          </Content>
{/* <Component/> */}
     </Layout>
    
  <FooterLayout/>



</Layout>


       
    )
}

export default LayoutWrap
