import React from "react";
import MySuspense from "./topic/Suspense/MySuspense";
import HookUseTransition from "./topic/HookUseTransition/HookUseTransition";
import HookUseDeferredValue from "./topic/HookUseDeferredValue/HookUseDeferredValue";
import User from "./topic/LazyLoading/User";

function App() {
  return (
    <div className="App">
      <MySuspense />
      <div className="hooks">
        <HookUseTransition />
        <HookUseDeferredValue />
      </div>
      <User />
    </div>
  );
}

export default App;
