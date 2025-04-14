import { BrowserRouter, Route, Routes } from "react-router-dom";
import HouseList from "../houses/HouseList";
import "./App.css";
import Header from "./Header";
import { HouseDetail } from "../houses/HouseDetail";
import HouseAdd from "../houses/HouseAdd";
import HouseEdit from "../houses/HouseEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Providing hourses all over the world"/>
        <Routes>
          <Route path="/" element={<HouseList />} />
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route path="/house/add" element={<HouseAdd/>} />
          <Route path="/house/update/:id" element={<HouseEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
