import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/counterSlice";

const CounterComponent = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(increment())}>Incremet</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(14))}>
        Add Custom Value (14)
      </button>
    </div>
  );
};

export default CounterComponent;
