import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import "jquery"
import "@popperjs/core/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
// import FilterData2 from './Data_delete_using_usestate/Big_data/FilterData2';
// import Data_Hook from './Usestate_Hook/Data_Hook';
import FilterData1 from './Usestate_Hook/Data_delete_using_usestate/Double_data/FilterData1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <FilterData1></FilterData1>
  </React.StrictMode>
  
  );
  
  
  reportWebVitals();
  