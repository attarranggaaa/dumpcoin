import React, { useContext } from "react";
import { AppContext } from "../context";

function Coin() {
  const { coins } = useContext(AppContext);

  const dollars = (value) => {
    return new Intl.NumberFormat(`en-US`, {
      currency: `USD`,
      style: "currency",
    }).format(value);
  };
  return (
    <>
      {coins.map((coin, i) => (
        <tr className="border-dark6 border-y" key={i}>
          <td className="text-center text-light3">{coin.market_cap_rank}</td>
          <td>
            <div className="flex items-center">
              <img
                src={coin.image}
                alt={coin.symbol.toUpperCase()}
                className="w-5 h-5 mr-3"
              />
              <span>{coin.name}</span>
            </div>
          </td>
          <td className="text-light3 text-xs">
            <span>{coin.symbol.toUpperCase()}</span>
          </td>
          <td className="text-right  text-light3 ">
            {dollars(coin.current_price)}
          </td>
          <td
            className={`text-right  ${
              coin.price_change_percentage_1h_in_currency
                .toFixed(1)
                .includes("-")
                ? "text-merah"
                : "text-hijau"
            }`}
          >
            {coin.price_change_percentage_1h_in_currency.toFixed(1)}%
          </td>
          <td
            className={`text-right  ${
              coin.price_change_percentage_24h_in_currency
                .toFixed(1)
                .includes("-")
                ? "text-merah"
                : "text-hijau"
            }`}
          >
            {coin.price_change_percentage_24h_in_currency.toFixed(1)}%
          </td>
          <td
            className={`text-right  ${
              coin.price_change_percentage_7d_in_currency
                .toFixed(1)
                .includes("-")
                ? "text-merah"
                : "text-hijau"
            }`}
          >
            {coin.price_change_percentage_7d_in_currency.toFixed(1)}%
          </td>
          <td className="text-right  text-light3">
            {dollars(coin.total_volume)}
          </td>
          <td className="text-right  text-light3 ">
            {dollars(coin.market_cap)}
          </td>
        </tr>
      ))}
    </>
  );
}

export default Coin;
