import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
