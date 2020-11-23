import React from 'react'
import { List, Avatar, Button, Skeleton } from 'antd';
import { Checkbox } from 'antd';

const TaskList = () => {
    const list = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];
      const onChange =(checkedValues)=> {
        console.log('checked = ', checkedValues);
      }
      
      const plainOptions = ['Apple', 'Pear', 'Orange'];
      const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ]
    return (
        <List
        className="demo-loadmore-list"
        // loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
    
         dataSource={list}
        renderItem={item => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
               <Checkbox onChange={onChange}></Checkbox>
                }
                title={<a href="https://ant.design">{/* {item.name.last} */}category</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>Time</div>
            </Skeleton>
          </List.Item>
    
         
        )}
      />
    )
}

export default TaskList
