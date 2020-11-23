import React from 'react'
import {Row  } from  'antd';
import ProjectSummary from './ProjectSummary';

const projectList =({projects})=> {
    return (
        
          
         
          <Row gutter={[16, 24]} align='center'>
    {projects && projects.map((project)=>(
 <ProjectSummary project={project} key={project.id}/>
    ))} 
    
       </Row>   
     

    
    )
}

export default projectList
