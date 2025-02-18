import React, { memo, useState } from "react";
const ExpensivCalculation = memo(() => {
  // why it works even if no props are being passed : = React.memo internally compares the previous and current props. In your case, since no props are provided, it sees that the "props" are the same (effectively an empty object).
  const expesivSum = () => {
    let sum = 0;

    for (let i = 0; i < 10000000; i++) {
      sum++;
    }
    return sum;
  };

  const total = expesivSum();
  return <p>expensive sum value : {total}</p>;
});
const ReactMemoHook = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>ReactMemoHook</p>
      <div>
        <ExpensivCalculation />
      </div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment Count
        </button>
        <h1>coutner value is : {count}</h1>
      </div>
    </>
  );
};

export default ReactMemoHook;
