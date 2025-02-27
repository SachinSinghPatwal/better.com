import React, { useState } from "react";
import productImageOne from "../../../public/product1.png";
import productImageTwo from "../../../public/product2.png";
import productImageThree from "../../../public/product3.png";
import productImageFour from "../../../public/product4.png";
import calculatorOne from "../../../public/Calculators1.png";
import calculatorTwo from "../../../public/Calculators2.png";
import calculatorThree from "../../../public/Calculators3.png";
import calculatorFour from "../../../public/Calculators4.png";
import guidesOne from "../../../public/Guides1.png";
import guidesTwo from "../../../public/Guides2.png";
import guidesThree from "../../../public/Guides3.png";
import guidesFour from "../../../public/Guides4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Answers() {
  const Options = [
    { name: "Our product", size: "120px" },
    { name: "Calculator", size: "100px" },
    { name: "Guides & FAQs", size: "140px" },
  ];
  const [currentOptionsBtnStyles, setCurrentOptionsBtnStyles] =
    useState("Our product");
  const [optionsImageStatus, setOptionsImageStatus] = useState(0);
  const optionsImages = [
    [
      {
        heading: "Buying your first home with Better",
        img: productImageOne,
      },
      {
        heading: "One Day Mortgage",
        img: productImageTwo,
        sup: 1,
        span: 2,
        para: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
      },
      {
        heading: "Better HELOC",
        img: productImageThree,
        span: 2,
        para: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit 2. Access up to 90% of your home equity as cash in as little as 7 days 3",
      },
      { heading: "Insurance", img: productImageFour },
    ],
    [
      { heading: "Mortgage calculator", img: calculatorOne },
      {
        heading: "Affordability calculator",
        img: calculatorTwo,
        span: 2,
        para: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
      },
      {
        heading: "HELOC calculator",
        img: calculatorThree,
        span: 2,
        para: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
      },
      { heading: "Fixed-rate loan comparison calculator", img: calculatorFour },
    ],
    [
      {
        heading: "What is a good debt-to-income ratio for a home loan?",
        img: guidesOne,
      },
      {
        heading: "Buying a house without realtor",
        img: guidesTwo,
        span: 2,
        para: "Thinking about buying a house without a real estate agent? Read this first.",
      },
      {
        heading: "Timeline for home buying process",
        img: guidesThree,
        span: 2,
        para: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
      },
      { heading: "Conventional loan requirements", img: guidesFour },
    ],
  ];
  return (
    <article className="lg:mx-[1rem]">
      <div className="grid md:grid-flow-col md:justify-between">
        <h1 className="text-5xl font-semibold my-[3rem]">
          Got questions? <br /> We've got answers
        </h1>
        <div className="grid gap-[1rem] grid-flow-col w-fit h-full items-end">
          {Options.map((each, index) => (
            <button
              key={each.name}
              className={`${
                currentOptionsBtnStyles == each.name
                  ? "border-[#004733] border-[4px] "
                  : "border-gray-500 border-[1px]"
              }  text-center hover:cursor-pointer rounded-[3rem] h-[2.5rem] 
                        transition-all duration-150 `}
              style={{ width: each.size }}
              onClick={() => {
                setCurrentOptionsBtnStyles((prev) => (prev = each.name));
                setOptionsImageStatus(index);
              }}
            >
              {each.name}
            </button>
          ))}
        </div>
      </div>

      <div
        className="grid lg:grid-flow-row sm:grid-cols-1 lg:grid-cols-5 gap-[1rem] mb-[6rem] mt-[2rem] 
      "
      >
        {optionsImages[optionsImageStatus].map((each, index) => (
          <div
            className={`bg-[#F0F7F1] rounded-[5px] px-[1.5rem] grid md:grid-flow-col gap-[0.2rem] py-[1.3rem] lg:h-fit  w-full
              ${index == 1 || index == 2 ? "lg:col-span-3" : "lg:col-span-2 "}
              `}
            key={each.heading}
          >
            <div>
              <h1 className="text-[25px] font-semibold ">
                {each.heading}
                {each.sup ? <sup>{each.sup}</sup> : null}
              </h1>
              <button
                className="border-[1px] border-gray-600 rounded-full w-[42px] 
                hover:cursor-pointer hover:bg-[#004733] my-[1.7rem] text-green-800 
                hover:text-white transition-colors duration-200 p-[.5rem]"
              >
                <FontAwesomeIcon icon={faArrowRight} size="xl" />
              </button>
              <p className="hidden md:block">{each.para}</p>
            </div>
            <img
              src={each.img}
              alt="Features images"
              className="w-full rounded-base object-cover h-[160px] 
              md:h-full rounded-[5px]"
            />
          </div>
        ))}
      </div>
    </article>
  );
}

export default Answers;
