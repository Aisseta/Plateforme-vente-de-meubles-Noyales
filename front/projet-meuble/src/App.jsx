import "./App.css";
// import React from "react";
import {Navbar,Header,Produit,AllProduits,Cart,ScrollToTopButton} from "./PagePrincipal/PagePrincipal";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}
      {/* <Route path="/page detail" element={< page />} /> */}
      </Routes>

   
    </BrowserRouter>
    <Navbar />
       {/* <Header />
       <Produit /> */}
      <Cart />
     
      <AllProduits />
      <ScrollToTopButton />
    </>
  )
}

export default App;

