import React from "react";
import aboutImage from "./about.svg";

function About() {
  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center min-h-screen py-8"
    >
      <div className="mx-4 lg:mx-10 text-center mb-8 lg:mb-16">
        <h2 className="text-3xl lg:text-5xl font-medium leading-normal mb-4 lg:mb-8">
          <span className="text-indigo-500 font-bold -tracking-widest">
            Bankrupt
          </span>
          . has all you need in crypto, but{" "}
          <span className="text-indigo-500 font-bold">simplified.</span>
        </h2>

        <p className="text-lighterIndigo text-lg lg:text-2xl leading-normal mb-4 lg:mb-2">
          Send, receive & exchange Bitcoin and 100+ cryptocurrencies with ease
          on the world&apos;s leading Desktop, Mobile and Hardware crypto
          wallets.
        </p>

        <p className="text-lighterIndigo text-lg lg:text-2xl leading-normal mb-8 lg:mb-16">
          We offer mouthwatering daily offers, rocket-fast transaction speed,
          FBI-like privacy & security, and the lowest transaction cost since
          2020.
        </p>

        <img
          src={aboutImage}
          alt=""
          className="w-full h-auto max-w-md lg:max-w-xl mx-auto"
        />
      </div>
    </div>
  );
}

export default About;
