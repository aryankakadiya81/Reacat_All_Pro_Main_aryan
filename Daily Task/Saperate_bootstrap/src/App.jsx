// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './Components/nav'
import Card from './Components/card'
import Table from './Components/table'
import Model from './Components/model'
import Alert from './Components/alert'

function App() {

  return (
    <div>
        <Navbar></Navbar>
        <Card></Card>
        <Table></Table>
        <Model></Model>
        <Alert></Alert>
    </div>
      
  )
}

export default App
