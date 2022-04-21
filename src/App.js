import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="mockman" element={<Mockman colorScheme="dark" />} />
      </Routes>
    </div>
  );
}

export default App;
