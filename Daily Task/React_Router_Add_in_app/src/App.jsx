// import './App.css'

import React from 'react';
import Navbar from './Components/nav'
import Texts from './Components/text'
import Footer from './Components/footer'
import Alart from './Components/alart';
import About from './Components/About';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";//react router import

function App() {


  const [alart, setAlart] = useState("");


  function showAlart(massage, type) {

    setAlart({
      msg: massage,
      type: type
    })

    setTimeout(() => {
      setAlart(null)
    }, 1000);
  }

  let [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlart("Dark Mode", "success");
      document.title = "Aryan's Textutils - Light"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlart("Light Mode", "success");
      document.title = "Aryan's Textutils - Dark"


    }
  }





  return (
    <>
      <BrowserRouter>
        <Navbar Mode={mode} ToggleMode={toggleMode}></Navbar>
        <Alart Alart={alart}></Alart>
        <Routes>
          <Route path='/' element={<Texts></Texts>}></Route>
          <Route path='/About' element={<About></About>}></Route>
        </Routes>
        <Footer Mode={mode}></Footer>
      </BrowserRouter>
    </>

  )
}

export default App
  // <Texts></Texts>
