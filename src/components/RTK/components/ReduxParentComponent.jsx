import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import CounterComponent from "./CounterComponent";

const ReduxParentComponent = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit Example</h1>
      </div>
      <div>
        <CounterComponent />
      </div>
    </Provider>
  );
};

export default ReduxParentComponent;
