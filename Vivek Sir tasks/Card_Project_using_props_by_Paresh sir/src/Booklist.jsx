import React from 'react';
import Book from './Book';

let Data = [
  {
    img: "https://news.cornell.edu/sites/default/files/styles/breakout/public/2021-02/0224_gandhi.jpg?itok=48L4rkb5",
    Name: "Pappu(Rahul gandhi)",
    Email: "pappu@gmail.com",
    Qualification: "LLB",
    Contect: "9987227644",
    Address: "Now at Jail"
  },
  {
    img: "https://i.pinimg.com/originals/ed/18/91/ed189191dc22169f0e6786a85f068616.jpg",
    Name: "Chaman lal",
    Email: "chaman@gmail.com",
    Qualification: "10th Pass",
    Contect: "9876543201",
    Address: "Bihar"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2035/4717/files/Recommended_Photos_Samples_2-1.jpg?14274959452374845669",
    Name: "Laura French",
    Email: "laura@gmail.com",
    Qualification: "10th fail",
    Contect: "9988223344",
    Address: "Mumbai"
  },
  {
    img: "https://images.wisegeek.com/passport-photo.jpg",
    Name: "Wang zuleb",
    Email: "wangzu@gmail.com",
    Qualification: "BA",
    Contect: "9988227644",
    Address: "Mumbai"
  },
  {
    img: "https://phowdimages.azureedge.net/cloud/pics/8137/p/c7bfc992b6614bf9a36057506e1bfc4c/1.jpg?preset=details",
    Name: "Devendra Mishra",
    Email: "mishra@gmail.com",
    Qualification: "No",
    Contect: "9900227644",
    Address: "Haryana"
  }
]

const Booklist = () => {

  return (
    <>
      {Data.map((el) => {

        return (
            <Book Img={el.img} Name={el.Name} Email={el.Email} Qualification={el.Qualification} Contect={el.Contect} Address={el.Address}/>
        )
      })}
    </>
  )
}

export default Booklist;
