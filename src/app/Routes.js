import React, { useContext } from "react";
import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Orders from "../pages/Orders";
import Users from "../pages/Users/Users";
import { AuthContext } from "../providers/AuthContext";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import User from "../pages/Users/User";
import Tasks from "../pages/Tasks/Tasks";
import Task from "../pages/Tasks/Task";

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
            path="/users/:id"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/tasks/:taskId"
            element={
              <ProtectedRoute>
                <Task />
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
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
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
