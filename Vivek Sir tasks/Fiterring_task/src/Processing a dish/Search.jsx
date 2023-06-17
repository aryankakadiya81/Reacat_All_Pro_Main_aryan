import React from 'react'
import Aryan from './Aryan'
import { useState } from 'react'


const Search = () => {

    let [form,setform] = useState("");

    function f1(){
        setform("pizza")
    }
    function f2(){
        setform("burger")
    }
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={f1}>Pizza</button>
            <button type="button" className="btn btn-primary" onClick={f2}>Burger</button>
            <Aryan form1={form}></Aryan>
        </>
    )
}

export default Search
