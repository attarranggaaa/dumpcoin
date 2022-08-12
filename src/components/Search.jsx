import { useContext } from "react";
import { Combobox } from "@headlessui/react";
import { AppContext } from "../context";
import faSearch from "../assets/search.svg";
import { SearchLoad } from "../components/SkeletonLoad";

function Search() {
  const { searchData, input, setInput, selected, setSelected, loadingSearch } =
    useContext(AppContext);

  const value = searchData.find((item) => {
    return item.id === selected;
  });

  return (
    <>
      <Combobox
        value={value ? value.name : selected}
        onChange={setSelected}
        nullable
      >
        <div className="flex w-full md:w-96 text-sm bg-dark5 rounded-lg py-3 px-5 items-center">
          <Combobox.Input
            placeholder="Search"
            className="w-full h-full bg-transparent text-white focus:outline-none"
            onChange={(event) => setInput(event.target.value)}
            value={input}
            spellCheck="false"
          />
          <img className="md:w-5 w-4 h-5 ml-5" src={faSearch} alt="" />
        </div>
        <Combobox.Options className="bg-dark4 space-y-5 drop-shadow-2xl text-sm absolute md:w-96 w-full mt-5 text-white p-5 rounded-lg">
          {loadingSearch ? (
            <SearchLoad />
          ) : searchData.length !== 0 ? (
            searchData.map((coin) => (
              <Combobox.Option key={coin.id} value={coin.id}>
                <div className="cursor-pointer flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="mr-3 w-6 h-6 " src={coin.thumb} alt="" />
                    <span className="text-light3 hover:text-white">{`${coin.name} (${coin.symbol})`}</span>
                  </div>
                  <div className="text-light2">#{coin.market_cap_rank}</div>
                </div>
              </Combobox.Option>
            ))
          ) : (
            <Combobox.Option>
              <div className="mt-5 flex items-center">Nothing found</div>
            </Combobox.Option>
          )}
        </Combobox.Options>
      </Combobox>
    </>
  );
}

export default Search;
