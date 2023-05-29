// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './Components/nav'
import Texts from './Components/hook(usestate)'
import Footer from './Components/footer'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Texts place="Enter text"></Texts>
      <Footer></Footer>

    </div>

  )
}

export default App
