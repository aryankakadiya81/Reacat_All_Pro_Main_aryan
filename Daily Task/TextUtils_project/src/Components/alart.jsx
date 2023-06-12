import React, { useState } from 'react'

function Alart(Props) {
    return (
        <>
            <div style={{height:"50px"}} className='container'>
                {
                    Props.Alart &&
                    <div className='d-flex justify-content-end'>
                        <div className={`alert alert-${Props.Alart.type} alert-dismissible fade show w-25`} role="alert">
                            <div className=''>{Props.Alart.msg}</div>
                        </div>
                    </div>
                }
            </div>

        </>
    )
}

export default Alart