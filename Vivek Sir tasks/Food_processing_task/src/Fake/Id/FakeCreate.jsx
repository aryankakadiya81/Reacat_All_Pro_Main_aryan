import React from 'react';
import Fake from './Fake';
import Fakejson from './Fakejson.json'

const FakeCreate = () => {
  return (
    <>
      {Fakejson.map((el) => {

        return (
            <Fake userId={el.userId} id={el.id} title={el.title} completed={el.completed}/>
        )
      })}
    </>
  )
}

export default FakeCreate
