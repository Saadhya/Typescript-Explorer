// by default this will be server page ,
// and to make it client side use below code
"use client";

import { Suspense, useState } from "react";

export default function Home() {
  function ListItems({
    ints,
    addValue,
  }: {
    ints: number[];
    addValue: (increment: number) => void;
  }) {
    const increment = 3;
    return (
      <>
        <button className="btn-primary shadow-2xs p-2 bg-green-400" onClick={() => addValue(increment)}>
          Add Value
        </button>
        {ints.map((int) => (
          <li key={int}>{int}</li>
        ))}
        {/* {ints.forEach(element => {
          <li key={element}>{element}</li>
        })} */}
      </>
    );
  }
  const [ints, setInts] = useState([1, 2, 3]);
  function addValue(incrementval: number) {
    let newvalu = Math.max(...ints) + incrementval;
    // ints[ints.length-1]+1;
    setInts([...ints, newvalu]);
  }
  return (
    <div className="container">
      <h1 className="text-3xl font-bold ">Hello world from pluralsight!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          <ListItems ints={ints} addValue={addValue} />
        </ul>
      </Suspense>
     
    </div>
  );
}
