import React from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu} from 'antd';

const SignedOutLinks=()=> {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to ='/signUp'>SignUp</Link></Menu.Item>
            <Menu.Item key="2"><Link to ='/signIn'>SignIn</Link></Menu.Item>
           
          </Menu>
    )
}

export default SignedOutLinks
