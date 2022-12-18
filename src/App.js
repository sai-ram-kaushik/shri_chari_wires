import React from "react";
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero";
import { CompanyProfile } from "./components/CompanyProfile";
import { Infra } from "./components/Infra";
import { Products } from "./components/Products";
import { Plant } from "./components/Plant";
import { Query } from "./components/Query";
import { Contact } from "./components/Contact";
import { AlloySteelWires } from "./components/AlloySteelWires";
import { NonAlloy } from "./components/NonAlloy";
import { Footer } from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/company_profile" element={<CompanyProfile />} />
        <Route path="/infratructure" element={<Infra />} />
        <Route path="/products" element={<Products />} />
        <Route path="/plant_&_machinery" element={<Plant />} />
        <Route path="/query" element={<Query />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/alloy_steel_wire" element={<AlloySteelWires />} />
        <Route path="/non_alloy_steel_wire" element={<NonAlloy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
