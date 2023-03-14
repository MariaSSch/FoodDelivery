import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Registerpage from "./pages/Registerpage/Registerpage";
import Signinpage from "./pages/Signinpage/Signinpage";
import Cartpage from "./pages/Cartpage/Cartpage";
import './App.sass';
import SingleProdpage from "./pages/SingleProdpage/SingleProdpage";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/menu")
        .then(res => res.json())
        .then(data => setMenu(data))
  }, [])

  return (
      <div className="App">
        <Routes>
          <Route index element={<Catalog menu={menu}/>}/>
          <Route path="/app/register" element={<Registerpage/>}/>
          <Route path="/app/signin" element={<Signinpage/>}/>
          <Route path="/app/cart" element={<Cartpage/>}/>
          <Route path="/app/:id" element={<SingleProdpage/>}/>
        </Routes>
      </div>
  );
}

export default App;
