import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-sky-50 ">
        <Header></Header>
      </div>
      <div className="min-h-[calc(100vh-100px)] mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="bg-black">
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
