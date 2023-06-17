import React from 'react';
import Book from './Book';
import books from './books.json'

const Booklist = () => {

  return (
    <>
      {books.map((el) => {

        return (
            <Book Img={el.img} Name={el.Name} Email={el.Email} Qualification={el.Qualification} Contect={el.Contect} Address={el.Address} />
        )
      })}
    </>
  )
}

export default Booklist;
