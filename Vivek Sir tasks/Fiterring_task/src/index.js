import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Book from './Book/Book';
// import Booklist from './Book/Booklist';
// import FakeCreate from './Fake/Id/FakeCreate';
// import FakeCreateProduct from './Fake/Id/FakeCreateProduct';
// import Listapp from './Listapp';
// import Search from './Processing a dish/Search';

// import FilterData from './Filter_json_data/FilterData';
// import FilterData from './Filter_multiple_json_data/FilterData';
// import FilterData from './Filter_multiple_json_data3/FilterData';

import FilterData3 from './Filtering/Filter_all_data/FilterData3';




import "jquery"
import "@popperjs/core/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FilterData3></FilterData3>
  </React.StrictMode>
  
  );
  
  
  reportWebVitals();
  
  // <Booklist/>
  // <FakeCreateProduct></FakeCreateProduct>
  // <FakeCreate></FakeCreate>
  // <Listapp></Listapp>
  // <Search></Search>
  // <FilterData></FilterData>