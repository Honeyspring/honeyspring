import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Form,
  Input,
  Button,
   
  DatePicker,
  Select

} from 'antd';
import { createProject } from "../../redux/actions/projectAction";
import FileUpload from './FileUpload';

const { RangePicker } = DatePicker;
const rangeConfig = {
        rules: [
          {
            type: 'array',
            required: true,
            message: 'Please select time!',
          },
        ],
      };
class AddProject extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       name:'',
       description:'',
       quantity:'',
       image:'',
       category:'',
       price:''
     }
  }

  handleChange = (event) => {

    this.setState(
      {
        [event.target.name]: event.target.value,
     
      },
      () => console.log(this.state)
    );

  }

    
  onFinish = (fieldsValue) => {
    // console.log(values);
    const { createProjects } = this.props
    createProjects(fieldsValue, console.log(this.state))
     const rangeValue = fieldsValue['range-picker'];
       
        const values = {
          ...fieldsValue,
         
          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
          
        };
        console.log('Received values of form: ', values);
      };
    
  
  render() {
    return (
     
 
  <Form name="add-products"   onFinish={this.onFinish} labelCol={{
      span: 4,
    }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal">
      <Form.Item
        name= 'name'
        label="product Name"
        rules={[
          {
            required: true,
          },
          ]}
              
      >
        <Input name='name'onChange={this.handleChange}/>
      </Form.Item>
     
    
      <Form.Item label="Category"
        name='category'
       
        rules={[
          {
           
            required: true,
          },
          ]}
              onChange={this.handleChange}
        >
        <Select  name='category'>
          <Select.Option  value="Clothings">Clothings</Select.Option>
          <Select.Option  value="Women">Women</Select.Option>
          <Select.Option  value="Children">Children</Select.Option>
          <Select.Option  value="Men">Men</Select.Option>
          <Select.Option  value="Teenagers">Teenagers</Select.Option>
                   
        </Select>
      </Form.Item>
      <Form.Item
     name= 'description'
        label="project Description"
        rules={[
          {
            required: true,
          },
          ]}
        onChange={this.handleChange}>
        <Input   name= 'description'/>
      </Form.Item>
       
          <Form.Item name="range-picker" label="Project Range" {...rangeConfig} onChange={this.handleChange} name='range'>
        <RangePicker />
      </Form.Item>
       
        <Form.Item label="Organization/Client" onChange={this.handleChange} name="client">
          <Input name="client"/>
        </Form.Item>
         <Form.Item
    
        >
        <FileUpload name= 'image'
          label="image"
              onChange={this.handleChange}/>
      </Form.Item >
         <Button type="primary" htmlType="submit">
            Submit
          </Button>
    </Form>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    
    project:state.createProject
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  
    createProjects: (project) => dispatch( createProject(project)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject)
