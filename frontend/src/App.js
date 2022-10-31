import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import { NavBar, WhatsAppPopUp } from "./components/";
import { Categoria, Login, Main, Producto, Registro } from "./components/Pages";



export const App = () => {
  return (
    <div>     
        <Router>
        <NavBar/>
        <WhatsAppPopUp />
          <Routes>
            <Route path="/" exact element={<Main />}></Route>
            <Route path="/categoria" element={<Categoria/>}></Route>
            <Route path="/producto" element={<Producto/>}></Route>
            <Route path="/registro" element={<Registro/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </Router>  
    </div>
  );
};




