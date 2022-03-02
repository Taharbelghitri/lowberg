import React from "react";

const SignupComponents = () => {
  return (
    <div className="relative max-w-[1500px] w-full h-[40vw] mt-[100px] tablet:mt-[200px]  bg-[url('./assets/food05.png')] bg-cover bg-center min-h-[600px]">
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#00000000] to-black " />
      <div className="absolute bottom-0 font-bold  flex flex-col items-center w-full ">
        <span className="text-white text-[30px] tablet:text-[50px] text-center">
          signup and enjoy our menu
        </span>
        <span className="text-[25px] tablet:text-[40px] text-red cursor-pointer">
          signup now
        </span>
      </div>
    </div>
  );
};

export default SignupComponents;
