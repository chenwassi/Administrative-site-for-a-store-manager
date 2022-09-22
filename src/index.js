import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './Reducer'
import {BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
const appStore = createStore(Reducer)
root.render(
  <BrowserRouter>
  <Provider store={appStore}>
    <App />
  </Provider>
  </BrowserRouter>
);


