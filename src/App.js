import React, { useEffect, useState } from 'react';
import { Route, Routes} from "react-router-dom";
import Catalogpage from "./pages/Catalogpage/Catalogpage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Signinpage from "./pages/Signinpage/Signinpage";
import Cartpage from "./pages/Cartpage/Cartpage";
import './App.sass';
import SingleProdpage from "./pages/SingleProdpage/SingleProdpage";
import Awarepage from './pages/Awarepage/Awarepage';
import RequireAuth from './hoc/RequireAuth';

function App() {
  const [menu, setMenu] = useState([]);

  async function getMenu() {await fetch("http://localhost:8000/menu")
                          .then(res => res.json())
                          .then(data => setMenu(data));}

  useEffect(()=>{
    getMenu();
  }, [])



  return (
      <div className="App">
        <Routes>
          <Route path="/app/signin" element={<Signinpage/>}/>
          <Route path="/app/register" element={<Registerpage/>}/>
          <Route path="/app/aware" element={<Awarepage/>} />
          <Route index path="/app"  element={<Catalogpage menu={menu}/>} />
                                               
          <Route path="/app/cart" element={
                              <RequireAuth>
                                {<Cartpage/>}
                              </RequireAuth>     }/>
          <Route path="/app/:id" element={<SingleProdpage/> }/>
        </Routes>
      </div>
  );
}

export default App;
