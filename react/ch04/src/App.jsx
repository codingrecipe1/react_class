import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import ConditionalRendering1 from "./ConditionalRendering1";
import ConditionalRendering2 from "./ConditionalRendering2";

function App() {
  const [count, setCount] = useState(0);

  const up = () => {
    // alert("up 함수 호출!");
    setCount(count + 1);
  };

  const down = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>count값: {count}</h2>
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <Form1 />
      <Form2 />
      <ConditionalRendering1 />
      <ConditionalRendering2 />
    </>
  );
}

export default App;
