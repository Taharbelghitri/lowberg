import React from "react";

const Footer = () => {
  return (
    <div className="h-[300px] min-h-[400px]  flex justify-center w-full">
      <div className="relative max-w-[1500px] h-full w-full bg-black pl-[5vw] text-white flex flex-col pt-[100px]">
        <span className="text-[30px] tablet:text-[50px] font-bold mb-[50px]">
          Lowberg restaurant
        </span>
        <span>123-123-134</span>
        <span>exampl@exampl.com</span>
        <span className="absolute bottom-0 w-[88vw] flex justify-center text-center">
          2022 Lowber restaurant. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
