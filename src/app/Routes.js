import React from "react";
import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";

const Routes = () => {
  return (
    <>
      <Layout>
        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </ReactRoutes>
      </Layout>
    </>
  );
};

export default Routes;
