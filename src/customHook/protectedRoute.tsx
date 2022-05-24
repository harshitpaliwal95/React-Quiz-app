import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";

export const ProtectedRoute = ({ children }: any) => {
  const { auth } = useSelector((store: RootState) => store);
  return auth.isAuth ? children : <Navigate to="/login" />;
};
