import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Registerpage from "./pages/Registerpage/Registerpage";
import Signinpage from "./pages/Signinpage/Signinpage";
import Cartpage from "./pages/Cartpage/Cartpage";
import './App.sass';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="/register" element={<Registerpage/>}/>
          <Route path="/signin" element={<Signinpage/>}/>
          <Route path="/cart" element={<Cartpage/>}/>
        </Routes>
      </div>
  );
}

export default App;
