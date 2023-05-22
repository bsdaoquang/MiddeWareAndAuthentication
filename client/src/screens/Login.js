import React, { useState } from 'react';
import { Button, Card, Form, Input, Space, message } from 'antd';
import { useDispatch } from 'react-redux';
import { addAuth } from '../redux/reducers/authReducer';
import axios from 'axios'
import { auth } from '../firebase/firebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GithubAuthProvider } from 'firebase/auth'

function Login()
{

  const provider = new GithubAuthProvider();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  // login with api server
  // const onLogin = async (values) =>
  // {
  //  const data = values

  //  const apiLogin = `http://localhost:4000/user/login`

  //  let config = {
  //   method: 'post',

  //   url: apiLogin,
  //   headers: { 
  //     'Content-Type': 'application/json'
  //   },
  //   data : JSON.stringify(values)
  // };

  //  try {
  //   const res = await axios.request(config)

  //   if(res.data.data.token){
  //     dispatch(addAuth({
  //       email: values.username,
  //       fcmtoken: res.data.data.token
  //     }))
  //   }
  //  } catch (error) {
  //   console.log(error)
  //  }

  // };

  // Login with email and pass by firebase
  const loginWithEmailAndPass = (values) =>
  {
    signInWithPopup(auth, provider)
      .then((result) =>
      {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

      }).catch((error) =>
      {
        console.log(error)
      });
  }

  const registerWithEmailAndPass = (values) =>
  {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) =>
      {
        // Signed in 
        const user = userCredential.user;

        console.log(user)
        // ...
      })
      .catch((error) =>
      {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const user = auth.currentUser

  console.log(user)

  return <div className='container mt-4 mb-4 bg-white'>
    <div className='col-6 offset-3'>
      <Card>
        <h2 className=''>Đăng nhập</h2>
        <p className='text-muted'>Chào mừng bạn đến với khóa học Redux-toolkit</p>

        <div className='mt-3'>
          <Form form={form} layout='vertical' onFinish={loginWithEmailAndPass}>
            <Form.Item name={'email'} label='Tài khoản'>
              <Input size='large' type='email' placeholder='email' />
            </Form.Item>
            <Form.Item name={'password'} label='Mật khẩu'>
              <Input.Password size='large' placeholder='Mật khẩu' />
            </Form.Item>
            <Button type='primary' htmlType='submit'>Login</Button>
          </Form>

        </div>
      </Card>
    </div>
  </div>;
}

export default Login;
