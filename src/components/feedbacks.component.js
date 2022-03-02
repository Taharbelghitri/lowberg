import React from "react";

const Feedbacks = () => {
  return (
    <div className="mt-[100px] max-w-[1500px] flex flex-col items-center">
      <span className="font-bold text-[30px] tablet:text-[50px] text-violet text-center">
        what people are saying
      </span>
      <div className="flex tablet:w-[550px] w-full mt-[50px] font-bold ">
        <span className="text-green whitespace-nowrap mr-[20px]">
          moniques Encalade
        </span>
        <span>
          food is prepared perfectly. makes meal prepping more convenient and
          saves time. Taste grete. Highly recommend
        </span>
      </div>
      <div className="flex tablet:w-[550px] w-full mt-[50px] font-bold opacity-50">
        <span className="text-green whitespace-nowrap mr-[20px]">
          moniques Encalade
        </span>
        <span>
          food is prepared perfectly. makes meal prepping more convenient and
          saves time. Taste grete. Highly recommend
        </span>
      </div>
    </div>
  );
};

export default Feedbacks;
