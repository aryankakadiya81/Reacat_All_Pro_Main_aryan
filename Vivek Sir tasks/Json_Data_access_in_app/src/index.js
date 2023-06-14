import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Book from './Book';
// import Booklist from './Booklist';
// import FakeCreate from './Fake/FakeCreate';
import FakeCreateProduct from './Product/FakeCreateProduct';




import "jquery"
import "@popperjs/core/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FakeCreateProduct></FakeCreateProduct>
  </React.StrictMode>

  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  
  // <Booklist/>
  // <FakeCreate></FakeCreate>