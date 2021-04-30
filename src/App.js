import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setToggle((prevValue) => !prevValue)}>
        Toggle
      </button>
      {toggle && <h1>Toggle on!</h1>}
    </div>
  );
}

export default App;
