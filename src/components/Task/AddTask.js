import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const AddTask = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        

    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Task title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input the name of task!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Task description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please describe the task!',
          },
        ]}
      >
        <Input />
      </Form.Item>
     

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    )
}

export default AddTask
