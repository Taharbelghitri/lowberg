import React from "react";
const PlansOptins = () => (
  <div className="mt-[20px] laptop:mt-0 flex flex-col items-center text-white laptop:w-[13%] phone:w-[45%] w-[90%]">
    <span className="font-bold text-center "> The Life Style Plan </span>
    <span>as low as</span>
    <span className="mt-[20px] text-center">$9.76 per meal</span>
    <span className="p-[10px] w-full flex justify-center bg-white rounded-lg text-black font-bold cursor-pointer ">
      choose
    </span>
  </div>
);
const PlansComponents = () => {
  return (
    <div className="max-w-[1500px] mt-[100px] laptop:mt-[200px] flex flex-col items-center w-full">
      <span className="text-[50px] font-bold text-grey_black text-center">
        plans for everyone
      </span>
      <span className="text-grey_black text-center">
        we already think about all of you
      </span>
      <div className="flex justify-center phone:justify-between mt-[50px] w-full p-[50px] bg-green flex-wrap items-center">
        <PlansOptins />
        <PlansOptins />
        <PlansOptins />
        <PlansOptins />
        <PlansOptins />
      </div>
    </div>
  );
};

export default PlansComponents;
