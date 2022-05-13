import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
// import NotFound from "../pages/NotFound"; useful incase there would be routing based on roles
function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
