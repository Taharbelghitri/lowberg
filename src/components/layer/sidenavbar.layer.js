import React from "react";
import { motion, useAnimation } from "framer-motion";
import eventUtils from "../../utils/event.utils";
const navbarContent = ["menu", "grap & go", "gifts", "cart", "signup"];

const SideNavbar = () => {
  const animation = useAnimation();
  const signAnimation = useAnimation();
  signAnimation.start({
    opacity: 0.2,
    transition: { repeat: "Infinity", repeatType: "reverse", duration: 0.5 },
  });
  eventUtils.notifSideNavbar(async (status) => {
    if (status) {
      await animation.start({ zIndex: 45 });
      animation.start({ opacity: 1 });
    } else {
      await animation.start({ opacity: 0 });
      animation.start({ zIndex: -45 });
    }
  });
  return (
    <motion.div
      animate={animation}
      className="fixed z-[45] backdrop-blur-md h-full w-full bg-white bg-opacity-50 pt-[100px] text-[20px] font-bold opacity-0"
    >
      <div className="justify-between flex flex-col items-start min-h-[300px] pl-[30px]">
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
    </motion.div>
  );
};

export default SideNavbar;
