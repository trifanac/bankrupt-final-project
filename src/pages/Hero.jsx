import React from "react";
import Typed from "react-typed";
import heroImage from "./hero.svg";

function Hero() {
  return (
    <div
      id="Hero"
      className="flex flex-col items-center justify-center min-h-screen py-8"
    >
      <div className="mx-4 lg:mx-10 text-center">
        <div>
          <Typed
            className="text-indigo-500 font-medium text-lg lg:text-2xl uppercase leading-tight"
            strings={["Jack of all trades", "Crypto trades"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </div>

        <h1 className="text-4xl lg:text-6xl font-medium leading-normal mt-1 lg:mt-2 mb-8 lg:mb-16">
          Never become{" "}
          <span className="text-indigo-500 font-bold -tracking-widest">
            Bankrupt<span className="text-lightestIndigo">.</span>
          </span>
        </h1>
        <img
          src={heroImage}
          alt=""
          className="w-full h-auto max-w-md lg:max-w-xl mx-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
