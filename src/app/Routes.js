import React, { useContext } from "react";
import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Orders from "../pages/Orders";
import Users from "../pages/Users";
import { AuthContext } from "../providers/AuthContext";
import NotFound from "../pages/NotFound";

const Routes = () => {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Layout>
        <ReactRoutes>
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate to="/" /> : <SignUp />}
          />
          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </Layout>
    </>
  );
};

export default Routes;
