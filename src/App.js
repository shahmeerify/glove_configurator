import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from "./components/pages/product";
import Fielder from "./components/loaders/Fielder";
import FirstBaseMain from "./components/loaders/FirstBaseMain"
import CatcherMain from "./components/loaders/CatcherMain"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/fielder" element={<Fielder />} />
        <Route path="/firstbase" element={<FirstBaseMain />} />
        <Route path="/catcher" element={<CatcherMain />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
