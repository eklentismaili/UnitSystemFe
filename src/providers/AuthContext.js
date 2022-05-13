import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    avatar: JSON.parse(localStorage.getItem("user"))?.avatar ?? "",
    id: JSON.parse(localStorage.getItem("user"))?.id ?? "",
    firstName: JSON.parse(localStorage.getItem("user"))?.firstName ?? "",
    lastName: JSON.parse(localStorage.getItem("user"))?.lastName ?? "",
    email: JSON.parse(localStorage.getItem("user"))?.email ?? "",
  });

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
