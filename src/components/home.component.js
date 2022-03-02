import React from "react";
const HomeComponent = () => {
  return (
    <div className="relative pt-[100px] max-w-[1500px] px-[2vw] w-full ">
      <div className="absolute top-0 left-0 h-full w-full flex z-[-10] blur-3xl opacity-40">
        <div className="h-full w-[50%] bg-[url('./assets/Rectangle2.png')] bg-cover bg-center backdrop-blur-lg bg-opacity-50 " />
        <div className="relative top-[100px] h-[50%] w-[30%] bg-[url('./assets/Rectangle1.png')] bg-cover bg-center backdrop-blur-lg bg-opacity-50 " />
      </div>
      <div className="flex flex-col font-bold ">
        <span className="text-red text-[20px]">lowberg restaurant </span>
        <span className="tablet:w-[500px] text-[40px] tablet:text-[80px] text-green">
          it's not just food, it's an Experiance
        </span>
      </div>
      <div className="relative laptop:h-[30vw] max-h-[600px] flex flex-col justify-between  w-full">
        <span className="p-[15px] tablet:p-[15px] bg-green rounded-xl tablet:h-[65px] text-[15px] tablet:text-[25px] w-[150px] mt-[30px] tablet:mt-0 tablet:w-[200px] flex justify-center cursor-pointer text-white ">
          get started
        </span>
        <div className="laptop:absolute right-0 h-[60vw] laptop:h-full w-full laptop:w-[500px] laptop:rounded-3xl mt-[30px] laptop:mt-0 bg-grey_white  bg-[url('./assets/food01.png')] bg-cover bg-center " />
        <span className="mt-[30px] laptop:mt-0 laptop:w-[500px]">
          It’s true – you are what you eat. Foods that contain unnatural
          ingredients are surprisingly quick to prepare and cheap. But you will
          pay a heavy price later. So, be mindful about the food choices you
          make now.
        </span>
      </div>
    </div>
  );
};
export default HomeComponent;
