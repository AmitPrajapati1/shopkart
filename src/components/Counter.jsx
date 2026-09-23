import React, { use, useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log("useEffect Hook");
  }, [count]);

  useEffect(() => {
    console.log("useEffect Hook");
  }, [count1]);

  const increment = () => {
    setCount(count + 1);
  };

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
      <hr />
      <h1>{count1}</h1>
      <button onClick={increment1}>Click</button>
    </div>
  );
}
