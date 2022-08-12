import React, { useContext } from "react";
import Coin from "./Coin";
import { MainLoad } from "./SkeletonLoad";
import { AppContext } from "../context";

const List = () => {
  const { loadingMain } = useContext(AppContext);

  return (
    <>
      <div className="scrollbar-thin scrollbar-thumb-secondary overflow-x-scroll text-white">
        <table className="table-fixed w-full text-sm  rounded-lg">
          <thead>
            <tr className="border-b border-dark6 text-light3 w-full">
              <th className="w-14">#</th>
              <th className="text-left w-48">Coin</th>
              <th className="w-14"></th>
              <th className="text-right w-40">Price</th>
              <th className="text-right w-24">1h</th>
              <th className="text-right w-24">24h</th>
              <th className="text-right w-24">7d</th>
              <th className="text-right w-48">24h Volume</th>
              <th className="text-right w-48">Market Cap</th>
            </tr>
          </thead>
          <tbody>{loadingMain ? <MainLoad /> : <Coin />}</tbody>
        </table>
      </div>
    </>
  );
};

export default List;
