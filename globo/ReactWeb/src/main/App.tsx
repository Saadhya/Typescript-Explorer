import { BrowserRouter, Route, Routes } from "react-router-dom";
import HouseList from "../houses/HouseList";
import "./App.css";
import Header from "./Header";
import { HouseDetail } from "../houses/HouseDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Providing hourses all over the world"/>
        <Routes>
          <Route path="/" element={<HouseList />} />
          <Route path="/house/:id" element={<HouseDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
