import axios from "axios";
import { useState, useEffect, createContext } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [searchData, setSearchData] = useState([]);
  
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("");

  const [pageNum, setPageNum] = useState(1);
  const [curr, setCurr] = useState(1);

  const [loadingMain, setLoadingMain] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const pages = [
    { page: pageNum },
    { page: pageNum + 1 },
    { page: pageNum + 2 },
    { page: pageNum + 3 },
  ];

  const next = () => {
    pageNum < 247 && setPageNum((prev) => prev + 1);
  };

  const back = () => {
    pageNum > 1 && setPageNum((prev) => prev - 1);
  };

  useEffect(() => {
    const getData = async () => {
      setLoadingMain(true);
      try {
        let response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${
            selected === null ? "" : selected
          }&order=market_cap_desc&per_page=10&page=${
            selected ? setCurr(1) : curr
          }&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
        );
        setCoins(response.data);
        setLoadingMain(false);
      } catch (e) {
        alert(e);
        setLoadingSearch(true);
      }
    };
    getData();
  }, [selected, curr]);

  useEffect(() => {
    const search = async () => {
      setLoadingSearch(true);
      try {
        let response = await axios.get(
          `https://api.coingecko.com/api/v3/search?query=${input}`
        );
        setSearchData(response.data.coins.slice(0, 6));
        setLoadingSearch(false);
      } catch (e) {
        alert(e);
        setLoadingSearch(true);
      }
    };
    search();
  }, [input]);

  const value = {
    coins,
    searchData,
    setSearchData,
    input,
    setInput,
    selected,
    setSelected,
    pages,
    pageNum,
    setPageNum,
    next,
    back,
    curr,
    setCurr,
    loadingMain,
    loadingSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
