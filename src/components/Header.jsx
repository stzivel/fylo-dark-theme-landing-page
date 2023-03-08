import React from "react";
import illustration_intro from "../images/illustration-intro.png";

function Header() {
  return (
    <div className="header bg-primary-intro-mail flex h-full ">
      <div className="header__content flex flex-col justify-center items-center w-full p-8 ">
        <div className="header__content-image ">
          <img src={illustration_intro} alt="illustration-intro" />
        </div>

        <div className="header__content-text flex flex-col flex-wrap justify-center items-center  max-w-[80%] md:max-w-[60%] lg:max-w-[30%] my-1 text-white text-center">
          <h1 className=" text-2xl md:text-3xl font-bold my-2 ">
            {" "}
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-sm my-2">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>

        <div className="header__content-button mt-3 text-white font-bold cursor-pointer">
          <button className="bg-accent-cyan py-2 px-16 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
