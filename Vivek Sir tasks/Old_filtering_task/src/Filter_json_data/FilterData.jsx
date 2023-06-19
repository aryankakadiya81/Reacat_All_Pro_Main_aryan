import React from 'react'
import Aryan from './PrintFilterData'
import { useState } from 'react'
import Fakejson from './FilterFakejson.json';


const FilterData = () => {

    let [form,setform] = useState("");

    function Logical(){
        setform("Logical")
    }
    function Love(){
        setform("Love")
    }
    function Drama(){
        setform("Drama")
    }
    function Fraud(){
        setform("Fraud")
    }


    
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={Logical}>Logical</button>
            <button type="button" className="btn btn-primary" onClick={Love}>Love</button>
            <button type="button" className="btn btn-primary" onClick={Drama}>Drama</button>
            <button type="button" className="btn btn-primary" onClick={Fraud}>Fraud</button><br/>


            {
                Fakejson.filter((el)=>{return form == el.type}).map((el) => {
                    return (
                        <Aryan  id={el.id} title={el.title} type={el.type} userid={el.userId}/>
                    )
                })
            }
            </>
            )
        }
        
export default FilterData
        