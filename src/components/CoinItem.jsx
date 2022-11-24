/* eslint-disable react/prop-types */
import React from "react";

const CoinItem = (props) => {
  return (
    <div className="flex items-center justify-between text-center border-b-2 border-lightestIndigo text-base lg:text-xl font-medium uppercase px-4 py-2 mb-16 rounded-lg cursor-pointer hover:bg-indigo-500 duration-300">
      <div className="flex items-center gap-4">
        <img className="w-4 h-4 lg:w-8 lg:h-8" src={props.coins.image} alt="" />
        <p>{props.coins.symbol}</p>
      </div>
      <p>{props.coins.current_price.toLocaleString()} €</p>
      <p className="hidden lg:block">
        {props.coins.price_change_percentage_24h.toLocaleString()} %
      </p>
      <p className="hidden lg:block">
        {props.coins.total_volume.toLocaleString()} €
      </p>
      <p className="hidden lg:block">
        {props.coins.market_cap.toLocaleString()} €
      </p>
    </div>
  );
};

export default CoinItem;
