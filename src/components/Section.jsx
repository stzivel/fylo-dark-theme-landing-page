import React from "react";
import illustration_productive from "../images/illustration-stay-productive.png";

function Section() {
  return (
    <div className="section bg-primary-main p-12  ">
      <div className="section__content  mx-auto flex flex-col md:flex-row justify-center items-center gap-4  ">
        <div className="section__content-img flex max-w-[500px]">
          <img src={illustration_productive} alt="" />
        </div>

        <div className="section__content-text flex flex-col  space-y-4 justify-between items-start max-w-[90%] md:max-w-[50%] lg:max-w-[30%] mx-2 p-8 text-white ">
          <h1 className=" text-2xl md:text-3xl font-bold">
            {" "}
            Stay productive, wherever you are
          </h1>
          <p className="text-sm">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. Securely share files
            and folders with friends, family and colleagues for live
            collaboration. No email attachments required.
          </p>
          <button className="text-accent-cyan underline decoration-accent-cyan">
            See how Fylo works
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section;
