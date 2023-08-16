import { useEffect, useState } from "react";
import Clock from "./pages/Clock";
import { timeConverter } from "./helper";

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

export default App;
