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

  async function getMenu() {
                await fetch("https://my-json-server.typicode.com/MariaSSch/foodDeliveryDeploy/menu", {
                  method: "get",
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json;odata.metadata=full",
                    "Content-Type": "application/json"
                  }
                })
                          .then(res => res.json())
                          .then(data => setMenu(data))
                        }

  useEffect(()=>{
    getMenu();
  }, [])



  return (
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signinpage/>}/>
          <Route path="/register" element={<Registerpage/>}/>
          <Route path="/aware" element={<Awarepage/>} />
          <Route index path="/"  element={<Catalogpage menu={menu}/>} />
                                               
          <Route path="/cart" element={
                              <RequireAuth>
                                {<Cartpage/>}
                              </RequireAuth>     }/>
          <Route path="/:id" element={<SingleProdpage/> }/>
        </Routes>
      </div>
  );
}

export default App;
