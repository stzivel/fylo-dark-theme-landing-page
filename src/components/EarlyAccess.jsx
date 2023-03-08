import React from "react";

function EarlyAccess() {
  return (
    <div className="earlyAcess   bg-primary-intro-mail xs:max-w-[600px] lg:max-w[800px] mx-auto p-8 absolute  -top-10 left-0 right-0 ">
      <div className="earlyAccess__text flex flex-col justify-center  text-center space-y-3 text-white">
        <h1 className="text-2xl">Get early access today</h1>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>

      <div className="earlyAccess__form flex  justify-center mt-4 ">
        <input
          className="block  rounded-full placeholder:text-center mx-2"
          type="text"
          placeholder="example@email.com"
        />
        <button className="bg-accent-cyan py-1 px-4  ml-1 lg:py-2 lg:px-6 rounded-full">
          Get Started for Free
        </button>
      </div>
    </div>
  );
}

export default EarlyAccess;
