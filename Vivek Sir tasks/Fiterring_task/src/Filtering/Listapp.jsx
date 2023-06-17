import React from 'react';

let itemList = ["car","bus","truck","train"];
let Find = itemList.includes("car");


function List({ Item, Status, isStock }) {
  if (isStock) {
    return (
      <li>{Item}</li>
    )
  }
    return (<li>{Status}</li>)

}


const Listapp = () => {
  return (
    <>
      <div>
        <ul>
          <List Item="Item in stock" Status="out of stock" isStock={Find}></List>
          <List Item="Item in stock" Status="out of stock" isStock={Find}></List>
          <List Item="Item in stock" Status="out of stock" isStock={Find}></List>
          <List Item="Item in stock" Status="out of stock" isStock={Find}></List>


        </ul>

      </div>
    </>
  )
}

export default Listapp
