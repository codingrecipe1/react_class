import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        {/* <Link to="/">Home</Link>
        <Link to="/info">Info</Link> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
