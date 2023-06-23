import React from 'react'
import Aryan from './PrintFilterData'
import { useState } from 'react'
import Fakejson from './FilterFakejson.json';


const FilterData3 = () => {

    let [form, setform] = useState("");
    let [form1, setform1] = useState("");
    let [form2, setform2] = useState("");
    let [form3, setform3] = useState("");


    function Logical() {
        setform("Logical")
        setform1("")
        setform2("")
        setform3("")
    }
    function Love() {
        setform("Love")
        setform1("")
        setform2("")
        setform3("")
    }
    function Drama() {
        setform("Drama")
        setform1("")
        setform2("")
        setform3("")
    }
    function Fraud() {
        setform("Fraud")
        setform1("")
        setform2("")
        setform3("")
    }


    function Logical_Love() {
        setform("Logical")
        setform1("Love")
        setform2("")
        setform3("")
    }
    function Logical_Drama() {
        setform1("Logical")
        setform("Drama")
        setform2("")
        setform3("")
    }
    function Logical_Fraud() {
        setform("Logical")
        setform1("Fraud")
        setform2("")
        setform3("")
    }
    function Love_Drama() {
        setform("Love")
        setform1("Drama")
        setform2("")
        setform3("")
    }
    function Love_Fraud() {
        setform1("Love")
        setform("Fraud")
        setform2("")
        setform3("")
    }
    function None() {
        setform("")
        setform1("")
        setform2("")
        setform3("")
    }


    function Logical_Love_Drama() {
        setform("Logical")
        setform1("Love")
        setform2("Drama")
        setform3("")
    }
    function Logical_Love_Fraud() {
        setform("Love")
        setform1("Logical")
        setform2("Fraud")
        setform3("")
    }
    function Love_Drama_Fraud() {
        setform("Drama")
        setform2("Fraud")
        setform1("Love")
        setform3("")
    }


    function Love_Drama_Fraud_Logical() {
        setform("Logical")
        setform1("Love")
        setform2("Drama")
        setform3("Fraud")
    }



    return (
        <>
            <div>
                <div className='d-flex ' style={{ height: "100%" }}>
                    <div className='w-25 bg-black'>
                        <div className='d-flex justify-center'>
                            <nav className='my-5 mx-5'>
                                <div>
                                    <div className='fs-2 text-white fw-bold'>Single Filter</div>

                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Logical}>Logical</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Love}>Love</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Drama}>Drama</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Fraud}>Fraud</button><br />
                                </div>

                                <div className='mt-5'>
                                    <div className='fs-2 text-white fw-bold'>Double Filter</div>
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Logical_Love}>Logical & Love</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Logical_Drama}>Drama & Logical</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Logical_Fraud}>Logical & Fraud</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Love_Drama}>Love & Drama</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Love_Fraud}>Fraud & Love</button><br />
                                </div>

                                <div className='mt-5'>
                                    <div className='fs-2 text-white fw-bold'>Triple Filter</div>
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Logical_Love_Drama}>Logical & Love & Drama</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Logical_Love_Fraud}> Love & Logical & Fraud</button><br />
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Love_Drama_Fraud}>Drama & Love & Fraud</button><br />
                                </div>


                                <div className='mt-5'>

                                    <div className='fs-2 text-white fw-bold'>All Filter</div>
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={Love_Drama_Fraud_Logical}>All Data</button><br />
                                </div>

                                <div className='mt-5'>
                                    <div className='fs-2 text-white fw-bold'>Remove Filter</div>
                                    <button type="button" className="btn btn-info mt-2 fw-bold" onClick={None}>None</button><br />
                                </div>
                                <br />
                            </nav>
                        </div>
                    </div>
                    <div className='w-75 ms-3'>
                        <div className=''>
                            <div className='fs-1 fw-bold text-center'>{form}</div>
                            {form && <table className="table mt-2">
                                <thead className="thead-dark fs-4">
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Author</th>
                                        <th>Users</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Fakejson.filter((el) => { return (form == el.type) }).map((el) => {
                                            return (
                                                <Aryan form={form} id={el.id} img={el.img} title={el.title} type={el.type} userid={el.users} describe={el.describe} author={el.author} />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>}
                        </div>

                        <div className='mt-5'>
                            <div className='fs-1 fw-bold text-center'>{form1}</div>

                            {form1 && <table className="table mt-2">
                                <thead className="thead-dark fs-4">
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Author</th>
                                        <th>Users</th>
                                        <th>Description</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Fakejson.filter((el) => { return (form1 == el.type) }).map((el) => {
                                            return (
                                                <Aryan form={form1} id={el.id} img={el.img} title={el.title} type={el.type} userid={el.users} describe={el.describe} author={el.author} />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>}
                        </div>



                        <div className='mt-5'>
                            <div className='fs-1 fw-bold text-center'>{form2}</div>

                            {form2 && <table className="table mt-2">
                                <thead className="thead-dark fs-4">
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Author</th>
                                        <th>Users</th>
                                        <th>Description</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Fakejson.filter((el) => { return (form2 == el.type) }).map((el) => {
                                            return (
                                                <Aryan form={form2} id={el.id} img={el.img} title={el.title} type={el.type} userid={el.users} describe={el.describe} author={el.author} />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>}
                        </div>





                        <div className='mt-5'>
                            <div className='fs-1 fw-bold text-center'>{form3}</div>

                            {form3 && <table className="table mt-2">
                                <thead className="thead-dark fs-4">
                                    <tr>
                                        <th>Id</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Author</th>
                                        <th>Users</th>
                                        <th>Description</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        Fakejson.filter((el) => { return (form3 == el.type) }).map((el) => {
                                            return (
                                                <Aryan form={form3} id={el.id} img={el.img} title={el.title} type={el.type} userid={el.users} describe={el.describe} author={el.author} />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterData3
