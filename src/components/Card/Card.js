import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
const CardLayout = ({project}) => {
  
    return (
        <div className="site-card-border-less-wrapper">
        <Card title={project.title} bordered={false} style={{ width: 300 }}>
        
          <p className=''> Posted by Oyin</p> 
          <p className='dateCreated'> Created Sat 10th 2020,2pm</p> 
          <p><Link to={`/projects/:${project.id}`}>detail</Link></p>
        </Card>
      </div>
    )
}

export default CardLayout;


