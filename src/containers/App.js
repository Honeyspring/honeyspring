import React from 'react';
import { Provider } from "react-redux";
import store from "../redux/store/store";
import {BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import User from '../routes/ProtectedRoute';
import Guest from '../routes/UnprotectedRoute';
import TabsCard from '../components/Card/tabCard';
import ProjectList from '../components/Project/projectList';
import ProjectDetails from '../components/Project/ProjectDetails';
import TaskList from '../components/Task/TaskList';
import Home from '../pages/home';
import Four04 from '../pages/404';
import SignIn from '../components/Auth/SignIn'
import SignUp from '../components/Auth/SignUp'

const App=()=> {
  return (
  <Provider store={store}> 
   
    <Router >
   
       <Switch>
      
          <User  exact path="/" component={Home } />
          <User  path="/create" component={TabsCard } />
          <User  path="/tasks" component={TaskList} />
          <User exact path="/projects" component={ProjectList} />
          <User  path="/projects/:id" component={ProjectDetails} />
          <Guest path="/signIn" component={SignIn} />
          <Guest path="/signUp" component={SignUp} />
          <Route   component={Four04}/>
         
          </Switch>
             
    </Router>

</Provider>   
    
     
  );
}

export default App;
