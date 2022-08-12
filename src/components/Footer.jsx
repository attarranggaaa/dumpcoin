import React from "react";
import coingecko from "../assets/coingecko.svg";

function Footer() {
  return (
    <>
      <div className="flex justify-center items-center p-14 bg-primary">
        <h3 className="font-semibold text-white">Powered by </h3>
        <a href="https://www.coingecko.com/">
          <img className="w-28 ml-2" src={coingecko} alt="" />
        </a>
      </div>
    </>
  );
}

export default Footer;
