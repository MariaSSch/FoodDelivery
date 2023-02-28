import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import './App.sass';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
      <div className="App">
      </div>
    </HashRouter>
  );
}

export default App;
