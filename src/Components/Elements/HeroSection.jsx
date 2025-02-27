import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import heroImage from "../../../public/heroImage.webp";
import google from "../../../public/google.svg";
function HeroSection() {
  return (
    <main className="pt-[7.6rem] relative lg:h-[130vh]">
      <h1
        className="text-5xl font-semibold text-[#1EE07F] text-center
      lg:text-[8rem] relative z-[5]
      "
      >
        Mortgages <br /> made simple
      </h1>
      <div className="grid place-items-center gap-[1.3rem]">
        <div className="lg:absolute left-[15%] bottom-[25%]">
          <h1
            className="bg-green-400 hover:bg-transparent font-semibold rounded-[4rem] 
            px-[5rem] h-[4rem] grid place-items-center mt-[1.6rem] w-[20rem] hover:cursor-pointer transition-colors duration-200 hover:text-white
              "
          >
            Start my approval
          </h1>
          <h2 className="grid justify-center items-center gap-2 grid-flow-col mt-[.6rem] text-gray-300">
            <FontAwesomeIcon icon={faClock} />
            <p className="text-sm ">3 min | No credit impact</p>
          </h2>
        </div>
        <img
          src={heroImage}
          alt="hand having phone"
          className=" w-[420px] lg:absolute  lg:w-[500px] bottom-0
          lg:left-[35%] lg:z-[1]
          "
        />
        <div
          className="bg-[#073126] h-fit grid gap-[.2rem] px-[1rem] py-[.5rem] rounded-[.3rem] absolute bottom-3
        lg:absolute lg:bottom-[28%] lg:right-[20%]
        "
        >
          <div className=" grid grid-flow-col items-center gap-[.3rem] ">
            <img src={google} alt="google icon" width="37px" />
            <div className="grid grid-flow-col  gap-[.3rem] ">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#FFBC14" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#FFBC14" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#FFBC14" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#FFBC14" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faStarHalfStroke}
                style={{
                  color: "#FFBC14",
                }}
                size="lg"
              />
            </div>
          </div>
          <p className="text-white text-[12px] text-center">
            4.6 Stars | 3177 Google reviews
          </p>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
