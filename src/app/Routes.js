import React from "react";
import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Routes = () => {
  return (
    <>
      <Layout>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </ReactRoutes>
      </Layout>
    </>
  );
};

export default Routes;
