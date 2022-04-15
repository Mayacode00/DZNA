import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Typical from "react-typical";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <body className="px-8 md:px-16 font-body lg:text-xs md:text-xs xl:text-base">
      <div className="py-4 px-4 flex border-x-2 border-black justify-between">
        <h1 className="text-xl md:text-black-900 font-black text-3xl">DZNA.</h1>
        <nav className="w-3/5">
          <ul className="hidden lg:flex justify-between font-bold items-center">
            <li className="anchor">My Story</li>
            <li className="anchor">My Projects</li>
            <li className="anchor">My Contacts</li>
            <li className="anchor-two">View my resume</li>
            <li className="anchor-two">Contact me</li>
          </ul>
        </nav>
        <div className="lg:hidden" onClick={handleClick}>
          {!nav ? (
            <FaBars size={20} style={{ color: " #000000" }} />
          ) : (
            <FaTimes size={20} style={{ color: " #000000" }} />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-white w-4/5 px-8"}>
        <li className="anchor border-b-2 border-zinc-300 w-4/5 mb-6">
          My Story
        </li>
        <li className="anchor border-b-2 border-zinc-300 w-4/5 mb-6">
          My Projects
        </li>
        <li className="anchor border-b-2 border-zinc-300 w-4/5 mb-6">
          My Contacts
        </li>
        <li className="anchor-two border-b-2 border-zinc-300 w-4/5 mb-6">
          View my resume
        </li>
        <li className="anchor-two border-b-2 border-zinc-300 w-4/5 mb-6">
          Contact me
        </li>
      </ul>
      <div className="px-4 py-10 lg:px-6 py-24 border-black border-2 md:px-6 py-36">
        <p className="font-semibold">Hey! I'm...</p>
        <h1 className="text-5xl lg:text-9xl font-extrabold md:text-8xl">
          {" "}
          <Typical
            loop={Infinity}
            steps={[
              " Not your regular DZNA.",
              1000,
              "Not your regular designer.",
              1000,
            ]}
          />
          <span className="text-sm md:text-4xl font-normal">ALABA BADIRU</span>
        </h1>
      </div>
      <div className="px-0 lg:px-4 py-10 border-black border-x-2 md:text-left px-44">
        <h4 className="font-bold mb-4 px-3">Some Stories</h4>
        <div className="lg:flex justify-between md:text-left">
          <p className="mb-10 mr-5 px-3 sm:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Atconsequat,
            lorem et et lectus. Odio massa tellus volutpat adipisc.
          </p>
          <p className="mb-10 mr-5 px-3 sm:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Atconsequat, lorem et et lectus. Odio massa tellus volutpat adipisc.
          </p>
          <a
            href="readmore"
            className="px-16 py-3 h-12 text-center cursor-pointer hover:bg-black hover:text-white transition ease-in lg:px-36"
          >
            Continue
          </a>
        </div>
      </div>
    </body>
  );
};

export default Home;
