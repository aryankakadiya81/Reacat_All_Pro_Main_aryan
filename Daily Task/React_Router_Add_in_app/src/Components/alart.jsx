import React, { useState } from 'react'

function Alart(Props) {
    return (
        <>
            {
                Props.Alart &&
                <div className='d-flex justify-content-end mx-5 my-3'>
                    <div className={`alert alert-${Props.Alart.type} alert-dismissible fade show w-25`} role="alert">
                        <div className=''>{Props.Alart.msg}</div>
                    </div>
                </div>
            }

        </>
    )
}

export default Alart