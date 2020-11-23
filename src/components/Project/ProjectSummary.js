import React from 'react'
import {Col  } from  'antd';
import Card from '../Card/Card'

const ProjectSummary=({project})=> {
    return (
        <Col className="gutter-row" >
        <Card project={project}/>
      </Col>
    )
}

export default ProjectSummary
