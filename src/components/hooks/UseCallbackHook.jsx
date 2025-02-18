import React, { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(` Child componet render due to :  ${children}`);

  return <button onClick={onClick}>{children}</button>;
});

const UseCallbackHook = () => {
  const [counter, setCoutner] = useState(0);

  // Without useCallback, this function would be recreated on every render.
  const Increment = useCallback(() => {
    console.log("inside increment callback");
    setCoutner((prev) => prev + 1);
  }, []);

  // this decrement will re-render the child component
  //   const Decrement = () => {
  //     console.log("inside decrement");
  //     setCoutner((prev) => (prev > 0 ? prev - 1 : prev));
  //   };

  const Decrement = useCallback(() => {
    console.log("inside decrement callback");
    setCoutner((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  return (
    <>
      <div>UseCallbackHook</div>
      <h1>{counter}</h1>
      <Button onClick={Increment}>Increment</Button>
      <Button onClick={Decrement}>Decrement</Button>
    </>
  );
};

export default UseCallbackHook;
