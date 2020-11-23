import React ,{Component} from 'react';

import { Layout, Menu} from 'antd';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


const { Header } = Layout;

class HeaderLayout extends Component {
   
render(){
   return(
     
        <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
         <SignedOutLinks/>
   {/*       <SignedOutLinks/> */}
        </Header>
       
       
   
    );
}
}
export default HeaderLayout;