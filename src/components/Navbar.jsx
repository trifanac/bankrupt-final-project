import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-darkestIndigo py-4 lg:py-8">
      <nav className="flex items-center justify-between mx-4 lg:mx-10">
        <Link to="/">
          <h1 className="text-indigo-500 text-2xl lg:text-4xl font-bold -tracking-widest">
            Bankrupt<span className="text-lightestIndigo">.</span>
          </h1>
        </Link>

        <ul className="hidden lg:flex items-center justify-between gap-8 text-lg lg:text-2xl font-medium uppercase">
          <li className="inline-block hover:text-lighterIndigo hover:transform hover:scale-110 duration-300">
            <Link to="/">Home</Link>
          </li>

          <li className="inline-block hover:text-lighterIndigo hover:transform hover:scale-110 duration-300">
            <Link to="/About">About</Link>
          </li>

          <li className="inline-block hover:text-lighterIndigo hover:transform hover:scale-110 duration-300">
            <Link to="/Coins">Coins</Link>
          </li>

          <li className="inline-block hover:text-lighterIndigo hover:transform hover:scale-110 duration-300">
            <Link to="/Contact">Contact us</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="lg:hidden text-2xl">
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        <div
          className={
            !nav
              ? "lg:hidden fixed left-[-100%]  top-0 w-3/4 h-full p-4 bg-indigo-500 ease-in-out duration-500"
              : "lg:hidden fixed left-0 top-0 w-3/4 h-full p-4 bg-indigo-500 ease-in-out duration-500"
          }
        >
          <Link to="/">
            <h1 className="text-2xl lg:text-4xl font-bold -tracking-widest">
              Bankrupt<span className="text-lightestIndigo">.</span>
            </h1>
          </Link>
          <ul className="flex flex-col justify-center gap-8 mt-16 text-lg font-medium uppercase">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
              <Link to="/Coins">Coins</Link>
            </li>

            <li>
              <Link to="/Contact">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
