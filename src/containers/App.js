import React from 'react';
import { Provider } from "react-redux";
import store from "../redux/store/store";
import {BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';

import Guest from '../routes/UnprotectedRoute';

import Cart from '../components/Cart/Cart';
import CartList from '../components/Cart/CartList';
import ProductDetails from '../components/Product/ProductDetails';

import Home from '../pages/home';
import Four04 from '../pages/404';


const App=()=> {
  return (
  <Provider store={store}> 
   
    <Router >
   
       <Switch>
      
          <Guest  exact path="/" component={Home } />
      
   
      
          <Guest  path="/products/:id" component={ProductDetails} />
          <Guest path="/cart" component={Cart} />
              <Guest  path="/cartList" component={CartList} />
          <Route   component={Four04}/>
         
          </Switch>
             
    </Router>

</Provider>   
    
     
  );
}

export default App;
