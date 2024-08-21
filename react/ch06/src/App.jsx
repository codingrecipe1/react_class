import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Header from "./Header";
import Param1 from "./Param1";
import "./App.css";
import Param2 from "./Param2";

function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/param/:id" element={<Param1 />} />
          <Route path="/param" element={<Param2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
