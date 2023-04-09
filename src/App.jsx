import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div style={{maxWidth: '1400px'}} className=" mx-auto">
        <Header></Header>
      </div>
      <div className="h-[calc(100vh-70px)]">
        <Outlet></Outlet>
      </div>
      <div className="bg-black">
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
