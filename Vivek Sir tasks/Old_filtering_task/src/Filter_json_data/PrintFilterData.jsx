import React from 'react'


const PrintFilterData = (Props) => {

    let { id, title, type, userid } = Props;

    return (
        <>
            <div className='d-inline-block'>
                <div className="card m-2" style={{width: "18rem"}}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fw-bold">Id: {id}</li>
                        <li className="list-group-item fw-bold">Title: {title}</li>
                        <li className="list-group-item fw-bold">type: {type}</li>
                        <li className="list-group-item fw-bold">Users: {userid}</li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default PrintFilterData
