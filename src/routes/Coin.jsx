import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        error;
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen py-8">
      <div className="text-lg lg:text-2xl mx-4 lg:mx-10">
        <div>
          <h1 className="text-indigo-500 text-4xl lg:text-6xl font-bold text-center mb-4 lg:mb-8">
            {coin.name}
            <span className="text-lightestIndigo">.</span>
          </h1>
        </div>

        <div>
          <div className="flex items-center justify-center gap-4 mb-8 lg:mb-16">
            <div className="flex items-center gap-4">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div>
              {coin.market_data?.current_price ? (
                <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mb-8 lg:mb-16">
          <div className="flex items-center justify-between lg:justify-around">
            <div className="flex flex-col lg:flex-row items-center gap-x-4">
              <h4 className="text-indigo-500 font-semibold">24H Low</h4>
              <p>-</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-x-4">
              <h4 className="text-indigo-500 font-semibold">24H High</h4>
              <p>-</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}{" "}
            </div>
          </div>
        </div>

        <div>
          <p
            className="leading-normal"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ""
              ),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
