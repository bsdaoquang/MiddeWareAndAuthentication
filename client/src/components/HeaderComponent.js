import React from 'react';
import { Avatar, Badge, Button, Dropdown, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, authSelector } from '../redux/reducers/authReducer';
import { cartSelector } from '../redux/reducers/cartReducer';

function HeaderComponent()
{

  const dispatch = useDispatch();

  const user = useSelector(authSelector);

  const handleLogout = () =>
  {
    // remove auth stare from store
    // update auth state to empty
    dispatch(addAuth({}));
  };

  // cart products
  const products = useSelector(cartSelector);

  return <div className='container bg-muted' style={{ textAlign: 'right', padding: 12 }}>
    {
      user.email ? <Space>
        <Badge count={products.length} size='small'>
          <i className="fas fa-shopping-cart text-muted" style={{ padding: 4 }}></i>
        </Badge>
        <div style={{ width: 12 }} />
        <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />

        <Button type='link' onClick={handleLogout}>Đăng xuất</Button>
      </Space> : <></>
    }
  </div>;
}

export default HeaderComponent;
