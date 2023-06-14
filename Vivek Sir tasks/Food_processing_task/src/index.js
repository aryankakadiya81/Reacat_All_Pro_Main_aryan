import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Book from './Book/Book';
// import Booklist from './Book/Booklist';
// import FakeCreate from './Fake/Id/FakeCreate';
// import FakeCreateProduct from './Fake/Id/FakeCreateProduct';
// import Listapp from './Listapp';
import Search from './Processing a dish/Search';




import "jquery"
import "@popperjs/core/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Search></Search>
  </React.StrictMode>
  
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  
  // <Booklist/>
  // <FakeCreateProduct></FakeCreateProduct>
  // <FakeCreate></FakeCreate>
  // <Listapp></Listapp>