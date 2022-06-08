import React, { memo } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// 自定义工具
import store from '@/store';

// 自定义组件
import AppHeader from 'c/app-header';
import AppFooter from 'c/app-footer';
import RoutesMap from './routes';

const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader />
        <RoutesMap />
        <AppFooter />
      </BrowserRouter>
    </Provider>

  )
})

export default App;
