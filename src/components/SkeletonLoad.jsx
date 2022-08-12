import React from "react";
import { Combobox } from "@headlessui/react";

const MainLoad = () => {
  const itemsMain = [];
  for (let i = 0; i < 10; i++) {
    itemsMain.push(
      <tr className="animate-pulse border-y border-dark6">
        <td className="">
          <div className="h-3 bg-dark6 rounded"></div>
        </td>
        <td className="" colSpan="2">
          <div className="h-3 bg-dark6 rounded"></div>
        </td>
        <td className=" ">
          <div className="h-3 bg-dark6 rounded"></div>
        </td>
        <td className="">
          <div className="h-3 bg-dark6 rounded"></div>
        </td>
        <td className="">
          <div className="h-3 bg-dark6 rounded"></div>
        </td>
        <td className="">
          <div className="h-3 bg-dark6 rounded"></div>
        </td>
        <td className="">
          <div className="h-3 bg-dark6 rounded"></div>
        </td>
        <td className=" ">
          <div className="h-3 bg-dark6 rounded"></div>
        </td>
      </tr>
    );
  }
  return <>{itemsMain}</>;
};

const SearchLoad = () => {
  const itemsSearch = [];
  for (let a = 0; a < 6; a++) {
    itemsSearch.push(
      <Combobox.Option>
        <div className="animate-pulse flex items-center justify-between space-x-5">
          <div className="h-5 w-full bg-dark6 rounded-md"></div>
          <div className="h-5 w-14 bg-dark6 rounded-md"></div>
        </div>
      </Combobox.Option>
    );
  }
  return <>{itemsSearch}</>;
};

export { SearchLoad, MainLoad };
