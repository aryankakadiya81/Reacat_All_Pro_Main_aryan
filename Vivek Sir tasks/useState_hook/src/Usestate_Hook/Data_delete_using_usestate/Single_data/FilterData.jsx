import React from 'react'
import { useState } from 'react'
import Fakejson from './FilterFakejson.json';


const FilterFakejson = () => {
    let [count, setCount] = useState(Fakejson)
    function f2(id) {
        setCount(count.filter((ele) => { return (ele.id !== id) }));
        // alert("Delete 1 product") ;

    }
    function f1() 
    { 
        setCount([]); 
        alert("Now, Your All Data is Cleared") 
    }

    let [form, setform] = useState("");

    function Logical() {
        setform("Logical")
    }
    function Love() {
        setform("Love")
    }
    function Drama() {
        setform("Drama")
    }
    function Fraud() {
        setform("Fraud")
    }



    return (
        <>
            <button type="button" className="btn btn-primary" onClick={Logical}>Logical</button>
            <button type="button" className="btn btn-primary" onClick={Love}>Love</button>
            <button type="button" className="btn btn-primary" onClick={Drama}>Drama</button>
            <button type="button" className="btn btn-primary" onClick={Fraud}>Fraud</button>
            <button type="button" className="btn btn-danger" onClick={f1}>Clear all</button>
            <br />

            {count[0] && <div className='fs-1 fw-bold text-center'>{form}</div>}


            {
                count.filter((el) => { return (form == el.type) }).map((el) => {
                    return (
                        <div className='d-inline-block'>
                            <div className="card m-2" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={el.img} height={"350px"} width={"300px"}></img>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item fw-bold">Id: {el.id}</li>
                                    <li className="list-group-item fw-bold">Title: {el.title}</li>
                                    <li className="list-group-item fw-bold">Type: {el.type}</li>
                                    <li className="list-group-item fw-bold">Author: {el.author}</li>

                                    <li className="list-group-item fw-bold">Description: {el.describe}</li>

                                    <li className="list-group-item fw-bold">Users: {el.users}</li>

                                    <button onClick={() => { return (f2(el.id)) }} type="button" className="btn btn-danger w-25">Delete</button>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FilterFakejson
