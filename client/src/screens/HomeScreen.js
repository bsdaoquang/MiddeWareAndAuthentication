import React, { useEffect } from 'react';
import Login from '../screens/Login';
import Products from '../screens/Products';
import { addAuth, authSelector } from '../redux/reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';

function HomeScreen()
{

  const dispatch = useDispatch();

  useEffect(() =>
  {
    // Lấy ra từ trong local storage
    // Hoặc lưu fcm token -> đăng nhập lại để check permission -> dispatch
    const userData = {
      // email: '',
      email: 'vidu123@gmail.com',
      fcmToken: ''
    };

    dispatch(addAuth(userData));

    // then, remove user data from localStorage

  }, []);

  const user = useSelector(authSelector);
  return user.email ? <Products /> : <Login />;
}

export default HomeScreen;