import React from "react";
import Task3 from "./Task3";
import tasks from "./Tasks.json";

const Tasklist3 = () => {
  var form = ["drama", "action"];

  return (
    <>
      <div className="lg:flex">
        {form.map((el) => {
          return (
            <div>
              <h1 className="ml-10">{el}</h1>
              <table className="w-11/12 table-fixed border mx-auto mt-5">
                <thead>
                  <tr className="text-2xl font-bold">
                    <td>Image</td>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Price</td>
                  </tr>
                </thead>

                <tbody>
                  {tasks.filter((elem) => {return (el === elem.type); }).map((elem) => {
                    return (


                      <Task3 img={elem.img} name={elem.name} type={elem.type} price={elem.price} />


                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tasklist3;
