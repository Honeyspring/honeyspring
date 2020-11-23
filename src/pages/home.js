import React from 'react'
import {Row, Col  } from  'antd';
import { connect } from "react-redux";
import Card from '../components/Card/Card'
import ProjectList from '../components/Project/projectList';


const home =(props)=> {
  console.log(props)
  const projects=props.projects
    return (
    
         
          <Row gutter={[16, 24]} align='center'>
  <ProjectList projects={projects}/>
       </Row>   
     

    
    )
}
const mapStateToprops = (state) => {
  return {
    
    projects:state.project.projects /*grabbing the state of the project on te project reducer in te root reducer*/
  };
};
/* const mapDispatchToprops = (dispatch) => {
  return {
    submitProject: (projects) => dispatch(submitprojects(projects))
   
  };
}; */
export default connect(mapStateToprops,null/*  mapDispatchToprops */)( home)
