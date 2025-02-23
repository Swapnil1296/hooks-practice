import React, { useEffect } from "react";
import UseRefHook from "./components/hooks/UseRefHook";
import UseContextHook from "./components/hooks/UseContextHook";
import UseReducerHook from "./components/hooks/UseReducerHook";
import UseCallbackHook from "./components/hooks/UseCallbackHook";
import UseMemoHooks from "./components/hooks/UseMemoHooks";
import ReduxParentComponent from "./components/RTK/components/ReduxParentComponent";
import DebounceExample from "./components/Debouncing/Debouncing";

const App = () => {
  return (
    <>
      {/* <UseRefHook />
      <UseContextHook/> */}
      {/* <UseReducerHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseMemoHooks /> */}
      {/* <ReduxParentComponent /> */}
      <DebounceExample />
    </>
  );
};

export default App;
