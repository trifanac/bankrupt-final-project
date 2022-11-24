/* eslint-disable react/prop-types */
import React from "react";
import CoinItem from "./CoinItem";
import Coin from "../routes/Coin";
import { Link } from "react-router-dom";

const Coins = (props) => {
  return (
    <div className="min-h-screen pt-16">
      <div className="mx-4 lg:mx-8">
        <div className="flex items-center justify-between text-center text-indigo-500 text-lg lg:text-2xl font-semibold uppercase tracking-wide px-4 py-2 mb-8 rounded-lg">
          <p>
            Coin<span className="text-lightestIndigo">.</span>
          </p>
          <p>
            Value<span className="text-lightestIndigo">.</span>
          </p>
          <p className="hidden lg:block">
            24H<span className="text-lightestIndigo">.</span>
          </p>
          <p className="hidden lg:block">
            Volume<span className="text-lightestIndigo">.</span>
          </p>
          <p className="hidden lg:block">
            Market Cap<span className="text-lightestIndigo">.</span>
          </p>
        </div>

        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
