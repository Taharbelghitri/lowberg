import React from "react";
import events from "../../utils/event.utils";
import { motion, useAnimation } from "framer-motion";
const navbarContent = ["menu", "grap & go", "gifts", "cart", "signup"];

let sideBarIsVisible = true;

const Navbar = () => {
  const signAnimation = useAnimation();
  signAnimation.start({
    opacity: 0.2,
    transition: { repeat: "Infinity", repeatType: "reverse", duration: 0.5 },
  });

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b-2 font-bold backdrop-blur-xl flex justify-center">
      <div className="w-full flex justify-between h-[50px]  border-black  bg-white bg-opacity-50 items-center px-[2vw] max-w-[1500px]">
        <span className="font-bold text-[18px] "> Lowberg </span>
        <div className="w-[50%] hidden justify-between tablet:flex">
          {navbarContent.map((e, i) => {
            return (
              <div
                key={i}
                className="relative flex justify-center items-center cursor-pointer "
              >
                {["gifts", "cart"].includes(e) && (
                  <motion.div
                    animate={signAnimation}
                    className="absolute top-0 left-[-10px] bg-red rounded-3xl w-[10px] h-[10px]"
                  />
                )}
                <span>{e}</span>
              </div>
            );
          })}
        </div>
        <span
          className="tablet:hidden p-[30px] pr-0 touch-none"
          onClick={() => {
            events.popUpSideNavbar(sideBarIsVisible);
            sideBarIsVisible = !sideBarIsVisible;
          }}
        >
          Menu
        </span>
      </div>
    </div>
  );
};
export default Navbar;
