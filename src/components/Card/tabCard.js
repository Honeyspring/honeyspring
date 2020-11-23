import React, { Component } from 'react'
import { connect } from 'react-redux'
 import { Card } from 'antd';
import Project from '../Project/addProject';
import AddTask from '../Task/AddTask';
import AddDream from '../Dreams/AddDream';
import FormLayout from '../Form/Form';


const tabListNoTitle = [
  {
    key: 'tasks',
    tab: 'tasks',
  },
  {
    key: 'projects',
    tab: 'projects',
  },
  {
    key: 'dreams',
    tab: 'dreams/goals',
  },
];

const contentListNoTitle = {
 
  tasks: <AddTask/>,
  projects: <Project/>,
  dreams: <AddDream/>,
};

class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'dreams/goals',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <>
       
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
    
     
        </>
    );
}
}
/* const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsCard) */
export default TabsCard