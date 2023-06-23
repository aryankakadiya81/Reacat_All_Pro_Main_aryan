import React from 'react'
import Aryan from './Aryan'
import { useState } from 'react'


const Search = () => {

    let [form, setform] = useState("pizza");
    let [btn, setBtn] = useState("Burger");

    function f1() {
        if (form == "pizza") {
            setform("burger")
            setBtn("Pizza")
        }
        else {
            setform("pizza")
            setBtn("Burger")
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary" onClick={f1}>{btn}</button>

            <Aryan form1={form}></Aryan>
        </>
    )
}

export default Search
