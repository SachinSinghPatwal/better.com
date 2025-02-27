import {
  faBars,
  faChevronDown,
  faPhone,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import { NavLink } from "react-router";
function Header({ navIsClicked, setNavIsClicked }) {
  const links = ["Buy", "Refinance", "HELOC", "Rates", "Better"];
  const [scrollY, setScrollY] = useState(false);
  const [currentColor, setCurrentColor] = useState("");
  const handleScroll = () => {
    if (window.scrollY > 837.5) {
      setCurrentColor("black");
      setScrollY(true);
    } else {
      setCurrentColor("white");
      setScrollY(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  useEffect(() => {
    if (isScrollDisabled) {
      // Save the scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      // Restore the scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isScrollDisabled]);
  // const bigscreenStatus = useMediaQuery({ query: "(max-width:)" });
  const navLinks = ["Start Page", "About Us", "Mortgage Calculator"];
  return (
    <>
      <div
        className={`${
          !scrollY ? "bg-[#004733] " : "bg-white"
        } transition-colors duration-200 w-full fixed grid place-items-center lg:h-[5rem]
        ${navIsClicked ? "pr-[1rem]" : ""}
        `}
      >
        <div
          className={`
        grid grid-flow-col justify-between w-[93vw]  h-[4.4rem] 
    items-center`}
        >
          <div className="grid grid-flow-col items-center lg:gap-[2rem]">
            <Logo currentColor={currentColor} w="64px" />
            <div className="grid grid-flow-col w-fit gap-[2rem] invisible lg:visible text-[17px]">
              {navLinks.map((each) => (
                <NavLink
                  to={`${each.replace(" ", "")}`}
                  key={each}
                  className={({ isActive }) => `
              ${isActive ? "underline underline-offset-2 text-green-600" : ""}
              ${scrollY ? "text-black" : "text-white"}
              `}
                >
                  {each}
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            <nav
              className="grid grid-flow-col items-center gap-[1rem] 
            xl:gap-[2rem]"
            >
              <FontAwesomeIcon
                className={`border-[1px] ${
                  !scrollY ? "border-white" : "border-black"
                } rounded-full p-[7px]`}
                icon={faPhone}
                size="sm"
                style={{ color: !scrollY ? "white" : "black" }}
              />
              {false && (
                <button
                  className={`bg-green-400 rounded-[1rem] font-semibold px-[1rem] h-[2rem]`}
                >
                  Get started
                </button>
              )}
              <button
                className="hover:cursor-pointer"
                onClick={() => {
                  setIsScrollDisabled((prev) => !prev);
                  setNavIsClicked((prev) => !prev);
                }}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  size="lg"
                  style={{ color: !scrollY ? "white" : "black" }}
                />
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* side hidden nav */}
      <div
        className={`bg-white h-screen w-full sm:w-[450px] fixed top-0 px-[6%] sm:px-[3rem] border-r-[1px] border-gray-600 ${
          !navIsClicked
            ? "translate-x-[-102%]"
            : "translate-x-0 xl:translate-x-0"
        } transition-all duration-500`}
      >
        <div>
          <div className="grid grid-flow-col justify-between  mt-[1rem]">
            <Logo currentColor={"black"} w="85px" />
            <button
              className="hover:cursor-pointer"
              onClick={() => {
                setIsScrollDisabled((prev) => !prev);
                setNavIsClicked((prev) => !prev);
              }}
            >
              <FontAwesomeIcon
                icon={faXmark}
                size="2x"
                style={{ color: "black" }}
              />
            </button>
          </div>
          <div className="grid gap-[2rem] text-[16px] mb-[1rem]">
            {links.map((each) => (
              <div
                key={each}
                className="grid grid-flow-col justify-between gap-[1rem]  hover:cursor-pointer"
              >
                <h1>{each}</h1>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            ))}
          </div>
          <button
            className="bg-[#F0F7F1] grid grid-flow-col gap-[1rem] justify-center items-center w-full h-[3rem] 
          rounded-[2rem] hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faPhone} />
            <h1>Call us anytime at</h1>
            <span className="underline hover:cursor-pointer">
              (415) 523 88371
            </span>
          </button>
        </div>
        <div className="mt-[9.5rem] grid gap-[1rem]">
          <button
            className="bg-green-400 h-[4rem] grid grid-flow-row items-center justify-center content-center 
          justify-items-center rounded-[2rem] hover:bg-[#004733] transition-color duration-300 hover:cursor-pointer 
          hover:text-white"
          >
            <h1 className="text-lg font-semibold">Get started</h1>
            <h1 className="text-[12px]">3min | No credit impact</h1>
          </button>
          <button className="h-[4rem] grid grid-flow-col gap-[1rem] items-center justify-center border-gray-800 border-[1px] rounded-[2rem] hover:border-5 hover:border-green-800 transition-[border] duration-75">
            <h1 className="text-lg">Sign in </h1>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
