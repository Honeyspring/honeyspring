import React from 'react'
import {Col  } from  'antd';
import Card from '../Card/Card'

const ProjectDetails=(props)=> {
    console.log(props);
    const id = props.match.params.id
    return (
        <Col className="gutter-row" >
       <div className="site-card-border-less-wrapper">
            <h6>Project Title _ {id}</h6>
          <p>Card content</p>
          <p>Card content</p>
          <p className='dateCreated'> Posted by Oyin</p> 
         <p className='dateCreated'> Created Sat 10th 2020</p> 
          <p>edit</p>
          <p>delete</p>
      </div>
      </Col>
    )
}

export default ProjectDetails
