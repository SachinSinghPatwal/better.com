import React, { useState } from "react";
import firstImg from "../../../public/one.png";
import secondImg from "../../../public/two.png";
import thirdImg from "../../../public/three.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function MemberStories() {
  const [imageState, setImageState] = useState(0);
  const userImages = [
    { img: firstImg, name: "Arian", size: "70px" },
    { img: secondImg, name: "Amanda", size: "90px" },
    { img: thirdImg, name: "paul", size: "65px" },
  ];
  const [currentUSersBtnStyles, setCurrentUSersBtnStyles] = useState("Arian");
  return (
    <article
      className="mt-[4rem] sm:place-items-center grid md:grid-flow-col 
      md:items-center justify-items-start md:my-[8rem]
    "
    >
      <div className="md:order-2 w-full sm:w-fit">
        <h1
          className="text-5xl font-semibold md:text-[3rem] lg:text-[5rem]
        "
        >
          Find out why <br className="sm:hidden md:block" /> we're better.
        </h1>
        <button className="bg-[#004733] w-full hover:bg-[#017848] text-[18px] text-white h-[4rem] rounded-[3rem] mt-[3rem] sm:w-[282.6px]">
          See all our stories
        </button>
        <p
          className="text-center mt-[.4rem] mb-[3.5rem] text-[18px]
        w-full sm:w-fit
        "
        >
          <span className="font-medium text-[16px]">
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              style={{ color: "#004733" }}
            />
            Trustpilot
          </span>
          <span className="text-gray-600">
            <span className="font-semibold text-gray-600"> Excellence 4.4</span>{" "}
            out of 5
          </span>
        </p>
        <div
          className="grid gap-[1rem] grid-flow-col w-fit mb-[2rem] 
        md:mb-[6rem]"
        >
          {userImages.map((each, index) => (
            <button
              key={each.name}
              className={`${
                currentUSersBtnStyles == each.name
                  ? "border-[#004733] border-[4px] "
                  : "border-gray-500 border-[1px]"
              }  text-center hover:cursor-pointer rounded-[3rem] h-[2.5rem] 
              transition-all duration-150 md:invisible visible sm:mb-[3rem]`}
              style={{ width: each.size }}
              onClick={() => {
                setCurrentUSersBtnStyles((prev) => (prev = each.name));
                setImageState(index);
              }}
            >
              {each.name}
            </button>
          ))}
        </div>
      </div>
      <div className="sm:grid place-items-center grid-rows-[600px_45px] gap-[.5rem]">
        <img
          src={userImages[imageState].img}
          alt="users images"
          className="sm:px-0 px-[2rem]  rounded- overflow-hidden 
          lg:h-[600px] md:h-[600px] sm:w-[400px] md:w-fit rounded-[10px]
          "
        />
        <div className="grid gap-[1rem] grid-flow-col  w-fit ">
          {userImages.map((each, index) => (
            <button
              key={each.name}
              className={`${
                currentUSersBtnStyles == each.name
                  ? "border-[#004733] border-[4px] "
                  : "border-gray-500 border-[1px]"
              }  text-center hover:cursor-pointer rounded-[3rem] h-[2.5rem] 
              transition-all duration-150 md:visible invisible`}
              style={{ width: each.size }}
              onClick={() => {
                setCurrentUSersBtnStyles((prev) => (prev = each.name));
                setImageState(index);
              }}
            >
              {each.name}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export default MemberStories;
