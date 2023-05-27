import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    // <div className="App">
      
    //   <div className="card" style={{display:'flex'}}>
        


    //     <button onClick={() => setCount((count) => count - 1)}>
    //       -
    //     </button>

    //     <div>{count}</div>

    //     <button onClick={() => setCount((count) => count + 1)}>
    //       +
    //     </button>




        
    //   </div>
    // </div>

    <form action="">
      <label htmlFor="gender">Gender:</label>
      <label htmlFor="">M</label>
      <input type="radio" name='gender'/><br />
      <label htmlFor="">F</label>
      <input type="radio" name='gender'/>
    </form>
  )
}

export default App
