import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Save from "./pages/Save";
import List from "./pages/List";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Update from "./pages/Update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/list" element={<List />} />
          <Route path="/board/:id" element={<Detail />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
