import React from 'react';
import FakePrduct from './FakeProduct';
import ProductFake from './ProductFake.json';

const FakeCreateProduct = () => {
  return (
    <>
      {ProductFake.map((el) => {

        return (
            <FakePrduct Id={el.id} Title={el.title} Description={el.description} Price={el.price} DiscountPercentage={el.discountPercentage} Img1={el.images[0]} Img2={el.images[1]} Img3={el.images[2]} Img4={el.images[3]} Img5={el.images[4]}/>
        )
      })}
    </>
  )
}

export default FakeCreateProduct;
