import React, { useContext } from "react";
import { AppContext } from "../context";

function Pagination() {
  const { pages, next, back, curr, setCurr } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-center items-center text-sm  h-32">
        <button
          className="h-12 w-12  hover:text-secondary/50 rounded-l-lg border border-r-0 border-dark6 text-secondary"
          onClick={() => back()}
        >
          {"<"}
        </button>
        {pages.map((num, i) => {
          return (
            <button
              key={i}
              onClick={() => setCurr(num.page)}
              className={`h-12 w-12  hover:text-secondary/50  border-dark6 border border-r-0 ${
                curr === num.page ? "text-secondary" : "text-light2"
              }`}
            >
              {num.page}
            </button>
          );
        })}
        <button
          className="h-12 w-12  hover:text-secondary/50 rounded-r-lg border border-dark6 text-secondary"
          onClick={() => next()}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default Pagination;
