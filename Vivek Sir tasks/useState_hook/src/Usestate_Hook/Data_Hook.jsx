import React from 'react'
import { useState } from 'react'
import Data from './Data.json'

const Data_Hook = () => {
     let [count, setCount] = useState(Data);

    function f1() {
        setCount([])
    }
    function f2(id) {
        setCount(count.filter((ele) => {return (ele.id !== id)}))
    }
    return (
        <div className='fs-4 m-5'>
           <ul>
           {
            count.map(ele => {
                return(
                    <li key={ele.id}>
                    {ele.name}
                    <button onClick={()=> {f2(ele.id)}}>Delete</button>
                    </li>
                )
            })
           }
           </ul>
           <button onClick={f1}> clear</button>
        </div>
    )
}

export default Data_Hook
