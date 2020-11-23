import React from 'react'
import { Layout, Menu} from 'antd';

const SignedInLinks=()=> {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          
            <Menu.Item key="2">Log Out</Menu.Item>
            <Menu.Item key="3">Avatar</Menu.Item>
          </Menu>
    )
}

export default SignedInLinks