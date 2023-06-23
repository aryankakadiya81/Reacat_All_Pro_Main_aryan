import React from 'react'


const PrintFilterData = (Props) => {

    let { id, img, title, type, describe, author, userid } = Props;

    return (
        <>
            <>

                    <tr className="fw-bold">
                        <td>{id}</td>
                        <td><img src={img} height={"150px"} width={"100px"}/></td>
                        <td>{title}</td>
                        <td>{type}</td>
                        <td>{author}</td>
                        <td>{userid}</td>
                        <td>{describe}</td>
                    </tr>


            </>


        </>
    )
}

export default PrintFilterData





