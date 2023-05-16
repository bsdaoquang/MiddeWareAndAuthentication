import { Button, Card, Layout, List, Popover, Tooltip } from 'antd';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { phones } from '../datas/phones';
import { useDispatch, useSelector } from 'react-redux';
import { addcart, cartSelector } from '../redux/reducers/cartReducer';
const { Header, Content } = Layout;

const { Meta } = Card;

function Products()
{

  const dispatch = useDispatch();
  const products = useSelector(cartSelector);

  const addProductToCart = (item) =>
  {

    const items = [...products];

    items.push(item);

    dispatch(addcart(items));
  };


  const renderPhoneItem = (item) =>
    <Tooltip title={(item.features.toString()).substring(0, 150)}>
      <Card type='inner' cover={<img src={item.imageUrl} width={150} height={260} />} style={{ margin: 8 }} hoverable actions={<Button>Mua ngay</Button>}>
        <Meta title={item.name} description={<>
          <p>{item.price}</p>
          <div className='text-center'>
            <Button type='primary' onClick={() => addProductToCart(item)}>Mua ngay</Button>
          </div>
        </>} />
      </Card>
    </Tooltip>;

  return <Layout>
    <HeaderComponent />
    <Content className='bg-white h-100'>
      <div className='container mt-4'>
        <Card title='Sản phẩm mới'>
          <List grid={{ gutter: 16, column: 5 }} dataSource={phones} renderItem={(item) => renderPhoneItem(item)} />
        </Card>
      </div>
    </Content>
  </Layout>;
}

export default Products;
