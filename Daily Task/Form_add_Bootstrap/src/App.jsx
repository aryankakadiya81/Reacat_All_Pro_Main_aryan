// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './Components/nav'
import Registrer from './Components/Forms/Registration'
import Login from './Components/Forms/Login'
import Footer from './Components/footer'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='d-flex justify-content-evenly'>
        <Login></Login>
        <Registrer></Registrer>
      </div>
      <Footer></Footer>

    </div>

  )
}

export default App
