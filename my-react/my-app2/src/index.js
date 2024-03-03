import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import reducer from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
// document.getElementById() : root라는 id를 찾는것.
// document.querySelector()와 비슷하나, 이건 css 선택자를 찾음.
root.render(
  <React.StrictMode>
    <Provider store={store()}>
      <Router>
          <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
