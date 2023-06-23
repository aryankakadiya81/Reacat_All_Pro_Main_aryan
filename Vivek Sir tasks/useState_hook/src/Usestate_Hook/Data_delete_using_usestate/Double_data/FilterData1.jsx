import React from 'react'
import Aryan from './PrintFilterData'
import { useState } from 'react'
import Fakejson from './FilterFakejson.json';


const FilterData1 = () => {

    let [count, setCount] = useState(Fakejson);
    function Delete(id1) {

        setCount(count.filter((ele) => { return (ele.id !== id1) }));
        // alert("Delete 1 product") ;

    }
    function Create() {
        setCount(Fakejson)
        alert("All data recovered") ;
    }
    function f1() {
        setCount([]);
        alert("Now, Your All Data is Cleared")
    }


    let [form, setform] = useState("");
    let [form1, setform1] = useState("");


    function Logical_Love() {
        setform("Logical")
        setform1("Love")
    }
    function Logical_Drama() {
        setform1("Logical")
        setform("Drama")
    }
    function Logical_Fraud() {
        setform("Logical")
        setform1("Fraud")
    }
    function Love_Drama() {
        setform("Love")
        setform1("Drama")
    }
    function Love_Fraud() {
        setform1("Love")
        setform("Fraud")
    }
    function None() {
        setform("")
        setform1("")
    }



    return (
        <>
            <div>
                <div className='d-flex ' style={{ height: "100%" }}>
                    <div className='w-25 bg-black'>
                        <div className='d-flex justify-center'>
                            <nav style={{ paddingTop: "70px", paddingBottom: "200px" }}>
                                <button type="button" className="btn btn-info mt-5 fw-bold" onClick={Logical_Love}>Logical & Love</button><br />
                                <button type="button" className="btn btn-info mt-5 fw-bold" onClick={Logical_Drama}>Drama & Logical</button><br />
                                <button type="button" className="btn btn-info mt-5 fw-bold" onClick={Logical_Fraud}>Logical & Fraud</button><br />
                                <button type="button" className="btn btn-info mt-5 fw-bold" onClick={Love_Drama}>Love & Drama</button><br />
                                <button type="button" className="btn btn-info mt-5 fw-bold" onClick={Love_Fraud}>Fraud & Love</button><br />

                                <button type="button" className="btn btn-info mt-5 fw-bold" onClick={None}>Clear Filter</button><br />
                                <button type="button" className="btn btn-danger mt-5 fw-bold" onClick={f1}>Delete All</button><br />
                                <button type="button" className="btn btn-info mt-5 fw-bold" onClick={Create}>Create Data</button><br />

                                <br />
                            </nav>
                        </div>
                    </div>





                    {count[0] && <div className='w-75 ms-3'>
                        <div className=''>
                            <div className='fs-1 fw-bold text-center'>{form}</div>
                            {form && <table className="table mt-2">
                                <thead className="thead-dark fs-4">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Users</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        count.filter((el) => { return (form === el.type) }).map((el) => {
                                            return (
                                                <Aryan key={el.title} id={el.id} form={form} img={el.img} title={el.title} type={el.type} userid={el.users} describe={el.describe} author={el.author} Delete={() => Delete(el.id)} />
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
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Users</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        count.filter((el) => { return (form1 === el.type) }).map((el) => {
                                            return (
                                                <Aryan form={form1} id={el.id} img={el.img} title={el.title} type={el.type} userid={el.users} describe={el.describe} author={el.author} Delete={() => Delete(el.id)} />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>}
                        </div>
                    </div>}



                     
                </div>
            </div>
        </>
    )
}

export default FilterData1
