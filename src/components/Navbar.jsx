import React from "react";
import logo from "../assets/logo.svg";
import Search from "./Search";

function Navbar() {
  return (
    <>
      <nav className="z-10 backdrop-blur-md fixed w-full h-32">
        <div className="container mx-auto px-5 flex justify-between items-center h-full">
          <div className="hidden md:flex items-center">
            <img className="w-10 mr-3" src={logo} alt="" />
            <h4 className="text-xl text-white font-semibold">Dumpcoin</h4>
          </div>
          <div className="w-full relative md:w-auto">
            <Search />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
