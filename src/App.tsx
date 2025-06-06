import { useState } from "react";
import "./App.css";
import { Button } from "@progress/kendo-react-buttons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1 className="title">Count: {count}</h1>
      <div className="card">
        <div className="counter">
          <Button
            fillMode="flat"
            themeColor="primary"
            size="small"
            onClick={() => setCount((count) => count + 1)}
          >
            Plus 1
          </Button>
          <Button
            fillMode="outline"
            themeColor="primary"
            size="small"
            onClick={() => setCount((count) => count + 2)}
          >
            Plus 2
          </Button>
          <Button
            fillMode="solid"
            themeColor="primary"
            size="small"
            onClick={() => setCount((count) => count + 5)}
          >
            Plus 5
          </Button>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
