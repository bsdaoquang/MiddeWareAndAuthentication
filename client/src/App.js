import 'antd/dist/reset.css';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './redux/store';

function App()
{
  return <Provider store={store}>
    <HomeScreen />
  </Provider>;
}

export default App;
