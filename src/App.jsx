import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { NavBar } from "./components";
import { Category, Home, Quiz, Result, Rules } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="rules" element={<Rules />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Result />} />
        <Route path="mockman" element={<Mockman colorScheme="dark" />} />
      </Routes>
    </div>
  );
}

export default App;
