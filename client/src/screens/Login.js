import React, { useState } from 'react';
import { Button, Card, Form, Input, Space, message } from 'antd';
import { useDispatch } from 'react-redux';
import { addAuth } from '../redux/reducers/authReducer';

function Login()
{

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onLogin = (values) =>
  {
    const { email, password } = values;

    if (email === 'vidu123@gmail.com' && password === '123456') {

      dispatch(addAuth({
        email, fcm: ''
      }));

    } else {

      message.error('Login false');
      form.resetFields();

    }
  };

  return <div className='container mt-4 mb-4 bg-white'>
    <div className='col-6 offset-3'>
      <Card>
        <h2 className=''>Đăng nhập</h2>
        <p className='text-muted'>Chào mừng bạn đến với khóa học Redux-toolkit</p>

        <div className='mt-3'>
          <Form form={form} layout='vertical' onFinish={onLogin}>
            <Form.Item name={'email'} label='Email'>
              <Input type='email' placeholder='Email' />
            </Form.Item>
            <Form.Item name={'password'} label='Mật khẩu'>
              <Input.Password placeholder='Mật khẩu' />
            </Form.Item>
            <Button type='primary' htmlType='submit'>Login</Button>
          </Form>

        </div>
      </Card>
    </div>
  </div>;
}

export default Login;
