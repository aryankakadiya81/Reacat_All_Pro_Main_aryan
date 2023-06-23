import React from 'react'


const PrintFilterData = (Props) => {
    let {Delete,id, img, title, type, describe, author, userid } = Props;
   


    return (
        <>
            <>

                    <tr className="fw-bold">
                        <td>{id}</td>
                        <td><img src={img} height={"150px"} width={"100px"} alt='No'/></td>
                        <td>{title}</td>
                        <td>{type}</td>
                        <td>{author}</td>
                        <td>{userid}</td>
                        <td>{describe}</td>
                        <td className='btn btn-danger' type="button" onClick={Delete}>Delete</td>
                    </tr>


            </>


        </>
    )
}

export default PrintFilterData





