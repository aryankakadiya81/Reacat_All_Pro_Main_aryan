// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from './Components/nav'
import Cards from './Components/card'
import Footer from './Components/footer'
import { useState } from 'react'

function App() {

  let [mode, setMode] = useState("light");
  function toggleMode()
  {
    if(mode == 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';

    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

    }
  }
  

  return (
    <>
      <Navbar Mode={mode} ToggleMode={toggleMode}></Navbar>
      <Cards Mode={mode}></Cards>
      <Footer Mode={mode}></Footer>

    </>

  )
}

export default App
