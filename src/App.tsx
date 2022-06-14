import "./App.css";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "./components";
import { Category, Home, Login, Quiz, Result, Rules, SignUp } from "./pages";
import { ToastContainer } from "react-toastify";
import { ProtectedRoute } from "./customHook/protectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const { auth } = useSelector((store: RootState) => store);
  return (
    <div className={`App ${auth.theme === "light" ? null : "dark-mode"}`}>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="category/:categoryName"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="rules"
          element={
            <ProtectedRoute>
              <Rules />
            </ProtectedRoute>
          }
        />
        <Route
          path="quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="result"
          element={
            <ProtectedRoute>
              <Result />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
