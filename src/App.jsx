import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";

export const JobContext = createContext([]);

function App() {
  const Jobs = useLoaderData()
  return (
    <JobContext.Provider value={Jobs}>
      <div className="bg-sky-50 ">
        <Header></Header>
      </div>
      <div className="min-h-[calc(100vh-100px)] mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="bg-black">
      <Footer></Footer>
      </div>
    </JobContext.Provider>
  );
}

export default App;
