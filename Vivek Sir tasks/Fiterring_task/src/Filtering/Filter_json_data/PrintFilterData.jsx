import React from 'react'


const PrintFilterData = (Props) => {

    let { id, img , title , type , describe , author , userid } = Props;

    return (
        <>
            <div className='d-inline-block'>
                <div className="card m-2" style={{width: "18rem"}}>
                <img className="card-img-top" src={img} height={"350px"} width={"300px"}></img>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fw-bold">Id: {id}</li>
                        <li className="list-group-item fw-bold">Title: {title}</li>
                        <li className="list-group-item fw-bold">Type: {type}</li>
                        <li className="list-group-item fw-bold">Author: {author}</li>

                        <li className="list-group-item fw-bold">Description: {describe}</li>

                        <li className="list-group-item fw-bold">Users: {userid}</li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default PrintFilterData
