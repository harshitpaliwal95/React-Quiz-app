import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { NavBar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mockman" element={<Mockman colorScheme="dark" />} />
      </Routes>
    </div>
  );
}

export default App;
