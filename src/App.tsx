import "./App.css";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "./components";
import { Category, Home, Login, Quiz, Result, Rules, SignUp } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="rules" element={<Rules />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Result />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
