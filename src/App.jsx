import React from "react";
import UseRefHook from "./components/hooks/UseRefHook";
import UseContextHook from "./components/hooks/UseContextHook";
import UseReducerHook from "./components/hooks/UseReducerHook";
import UseCallbackHook from "./components/hooks/UseCallbackHook";
import UseMemoHooks from "./components/hooks/UseMemoHooks";
import ReduxParentComponent from "./components/RTK/components/ReduxParentComponent";

const App = () => {
  return (
    <>
      {/* <UseRefHook />
      <UseContextHook/> */}
      {/* <UseReducerHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseMemoHooks /> */}
      <ReduxParentComponent />
    </>
  );
};

export default App;
