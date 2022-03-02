import React from "react";

const MenuPLans = () => (
  <div className="flex relative h-[250px] w-full laptop:w-[43vw] m-[30px] ml-0 max-w-[650px]">
    <div className="absolute top-0 left-0 bg-red w-[100px] phone:w-[150px] h-[30px] flex justify-center items-center text-white font-bold rounded-t-xl ">
      premium
    </div>
    <div className="h-full w-[100px] phone:w-[150px] rounded-xl  bg-[url('./assets/food21.png')] bg-cover bg-center phone:min-w-[150px] min-w-[100px] max-w-[150px]" />
    <div className=" flex flex-col justify-between phone:w-[70%] min-w-[130px] ml-[30px] ">
      <div className="flex flex-col w-full">
        <span className="font-bold"> Agave Lime Chickpeas </span>
        <span className="text-green">590 colories</span>
      </div>
      <span className=" w-auto ">
        over Quinoa, topped with Roasted Red Peppers, served with Agave Lime and
        House Edamane
      </span>
    </div>
  </div>
);

const MenuComponent = () => {
  return (
    <div className="max-w-[1500px] relative flex flex-col px-[2vw] mt-[200px] w-full  ">
      <div className="flex flex-col tablet:flex-row ">
        <span className="text-violet font-bold  text-[25px] tablet:text-[50px] leading-[110px] tablet:leading-[150px]  ">
          online menu
        </span>
        <span className="tablet:ml-[20px] text w-[200px] text-black">
          not interedted in a plan ? shop our online menu and pick as many or
          few meals as you need
        </span>
      </div>
      <div className="flex flex-wrap justify-between">
        <MenuPLans />
        <MenuPLans />
        <MenuPLans />
        <MenuPLans />
      </div>
      <span className="mt-[50px] p-[10px] bg-green w-[200px] flex justify-center items-center text-white font-bold cursor-pointer rounded-lg">
        view entire menu
      </span>
    </div>
  );
};

export default MenuComponent;
