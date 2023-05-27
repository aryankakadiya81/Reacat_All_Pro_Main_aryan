// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './Components/nav'
import Card from './Components/card'
import Footer from './Components/footer'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      {/* Email,contect,address is props */}
      <Card Email="aliabhatt@gmail.com" Contect={9988223344} Address="Mumbai"></Card>

      <Footer></Footer>

    </div>

  )
}

export default App
