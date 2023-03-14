import React, { useEffect, useState } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Registerpage from "./pages/Registerpage/Registerpage";
import Signinpage from "./pages/Signinpage/Signinpage";
import Cartpage from "./pages/Cartpage/Cartpage";
import './App.sass';
import SingleProdpage from "./pages/SingleProdpage/SingleProdpage";
import { useSelector } from "react-redux";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/menu")
        .then(res => res.json())
        .then(data => setMenu(data))
  }, [])

  const isAuth = useSelector(state => state.auth.isAuth);


  return (
      <div className="App">
        <Routes>
          <Route index path="/app" element={<Signinpage/>}/>
          <Route path="/app/register" element={<Registerpage/>}/>

          <Route path="/app/catalog"  element={(() => {
                                                if(isAuth) return <Catalog menu={menu}/>
                                                else return <Navigate to="/app"/>}
                                                )()}/>
          <Route path="/app/cart" element={(() => {
                                                if(isAuth) return <Cartpage/>
                                                else  return <Navigate to="/app"/>})()}/>
          <Route path="/app/:id" element={(()=>{
                                                if(isAuth) return <SingleProdpage/>
                                                else  return <Navigate to="/app"/>})()}/>
        </Routes>
      </div>
  );
}

export default App;
