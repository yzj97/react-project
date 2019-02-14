import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/base.css';
import './assets/css/style.css';
import './assets/css/loaders.min.css'
import App from "./components/App";
import {BrowserRouter,Route} from 'react-router-dom';

// import './api/global';

import store from './store';
import {Provider} from 'react-redux'



ReactDOM.render(
 <Provider store={store}> 
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
