import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="mockman" element={<Mockman colorScheme="dark" />} />
      </Routes>
    </div>
  );
}

export default App;
