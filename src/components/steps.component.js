import React from "react";

const StepsComponent = () => {
  return (
    <div className="max-w-[1500px] relative flex flex-col px-[2vw] mt-[100px] tablet:mt-[200px] w-full">
      <div className="flex flex-col tablet:flex-row ">
        <span className="text-violet font-bold  text-[25px] tablet:text-[50px] leading-[110px] tablet:leading-[100px] ">
          how it works
        </span>
        <span className="tablet:ml-[20px] text w-[200px] text-black">
          thereis three steps to deal with your order and you must know it
        </span>
      </div>
      <div className="relative flex flex-col justify-between h-[30vw] mt-[100px] min-h-[300px] max-h-[100px]">
        <span className="text-green font-bold z-20 ">PLACE YOUR ORDER</span>
        <div className="tablet:absolute top-0 right-0 h-full w-full max-w-[800px] tablet:w-[70vw] bg-[url('./assets/ORDER01.png')] bg-cover bg-center max-h-[500px]" />
        <span className="w-full max-w-[700px] z-20">
          f an element is taller than the element containing it, and it is
          floated, it will overflow outside of its container. You can use the
          "clearfix hack" to fix this (see example below).
        </span>
      </div>
      <div className="relative flex flex-col justify-between h-[30vw] mt-[100px] min-h-[300px] max-h-[100px]">
        <span className="text-green font-bold z-20 ">COOK</span>
        <div className="tablet:absolute top-0 right-0 h-full w-full max-w-[800px] tablet:w-[70vw] bg-[url('./assets/placeorder.png')] bg-cover bg-center max-h-[500px]" />
        <span className="w-full max-w-[700px] z-20">
          our staff will carefully prepare, cook, and package all of your meals
          and have them fresh and ready to go!
        </span>
      </div>
      <div className="relative flex flex-col justify-between h-[30vw] mt-[100px] min-h-[300px] max-h-[100px]">
        <span className="text-green font-bold z-20 ">PICKUP / DELIVR</span>
        <div className="tablet:absolute top-0 right-0 h-full w-full max-w-[800px] tablet:w-[70vw] bg-[url('./assets/pickup1.png')] bg-cover bg-center max-h-[500px]" />
        <span className="w-full max-w-[700px] z-20">
          yo choose whether to pick up your meals in our very own brick and
          martar location or even choose a delivery method in case you are busy.
          We never want you to miss out
        </span>
      </div>
    </div>
  );
};

export default StepsComponent;
