import React from 'react';
import HookCounter from "./hooks/HookCounter";
import ClassCounter from "./hooks/ClassCounter";

//install axios
function App() {
  return (
    <div>
     <h1>Using functoin based component + hooks</h1>
      <HookCounter />
     <h1>Using class based component</h1>
      <ClassCounter/>
    </div>
  );
}
export default App;