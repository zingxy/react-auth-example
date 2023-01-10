import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorTextHeading: '',
          borderRadius: 10,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
