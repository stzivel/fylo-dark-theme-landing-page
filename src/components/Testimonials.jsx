import React from "react";
import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";
import quotes from "../images/bg-quotes.png";

function Testimonials() {
  return (
    <div className="testimonials bg-primary-main p-24">
      <div className="testimonials__container grid grid-cols-1    gap-12 lg:grid-cols-3  lg:gap-6  text-white ">
        <div className="testimonials__container-contentA  bg-primary-testimonials flex flex-col p-8 md:px-12 md:py-10 mx-auto ">
          <p>
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="testimonials__container-contentA-info flex justify-start items-center space-x-2 space-y-2">
            <img
              className="max-w-[40px] rounded-full"
              src={profile1}
              alt="profile1"
            />
            <h2>Satish Patel</h2>
            <p className="text-sm">Founder & CEO, Huddle </p>
          </div>
        </div>

        <div className="testimonials__container-contentB bg-primary-testimonials  flex flex-col  p-8 md:px-12 md:py-10 mx-auto ">
          <p>
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="testimonials__container-contentB-info flex justify-start items-center space-x-2 space-y-2">
            <img
              className="max-w-[40px] rounded-full"
              src={profile2}
              alt="profile2"
            />
            <h2>Satish Patel</h2>
            <p className="text-sm">Founder & CEO, Huddle </p>
          </div>
        </div>

        <div className="testimonials__container-contentC bg-primary-testimonials  flex flex-col  p-8 md:px-12 md:py-10 mx-auto ">
          <p>
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="testimonials__container-contentC-info flex justify-start items-center space-x-2 space-y-2">
            <img
              className="max-w-[40px] rounded-full"
              src={profile3}
              alt="profile3"
            />
            <h2>Satish Patel</h2>
            <p className="text-sm">Founder & CEO, Huddle </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
