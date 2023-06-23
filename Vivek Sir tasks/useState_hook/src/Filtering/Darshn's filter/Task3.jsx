import React from 'react'

const Task3 = (props) => {
  let {img, name, type, price} = props;
  return (

        <tr className='border-2'>
          <td><img src={img} height={"150px"} width={"100px"}/></td>
          <td ><h5>{name}</h5></td>
          <td><h5>{type}</h5></td>
          <td><h5>{price}</h5></td>
        </tr>
  )
}

export default Task3;