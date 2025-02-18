import React, { memo, useMemo, useState } from "react";
const ExpensivCalculation = () => {
  const expesivSum = () => {
    let sum = 0;

    for (let i = 0; i < 1000000000; i++) {
      sum++;
    }
    return sum;
  };
  //   const total = expesivSum();
  const total = useMemo(() => {
    return expesivSum();
  }, []);
  return <p>expensive sum value : {total}</p>;
};
const UseMemoHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>UseMemoHooks</p>
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

export default UseMemoHooks;
