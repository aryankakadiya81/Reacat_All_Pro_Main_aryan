import React, { useState } from 'react';

const Hooks = () => {
     let [count, setCount] = useState(0);

    function f1() {
        setCount(count + 1)
    }
    function f2() {
        setCount(count - 1)
    }
    return (
        <div className='fs-1 m-5 d-flex'>
            <button className='btn btn-danger fs-5' onClick={f2}>-</button>
            <div className='mx-5'>
                {count}
            </div>
            <button className='btn btn-primary fs-5' onClick={f1}>+</button>
            <div></div>
        </div>
    )
}

export default Hooks
