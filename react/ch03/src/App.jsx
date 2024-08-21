import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <Child1 p1="안녕하세요" />
      <Child2 p1="hello" p2={100} p3="반갑습니다" />
      <Child3
        p1="hello"
        p2={100}
        p3="반갑습니다"
        person={{ name: "이름1", age: 20 }}
      />
    </>
  );
}

export default App;
