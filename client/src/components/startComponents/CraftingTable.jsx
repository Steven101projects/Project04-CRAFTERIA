import React, { useState } from "react";

export default function Crafter({ setCraft }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setCraft(true);   // update parent state (e.g. shrink BlockHeader)
    setOpen(true);    // mark as "opened"
  };

  // If clicked, show only an empty div
  if (open) {
    return <div className="flex flex-col py-[6vh] items-center">

        <div
      id="craftingTable"
      className="bg-[linear-gradient(135deg,#ffbf00,#f15000)] 
                 w-[800px] h-[450px] rounded-[2vh] 
                 grid grid-cols-3 grid-rows-3 gap-[20px] p-[30px]
                 justify-items-center items-center 
                 shadow-lg"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="bg-white w-[210px] h-[105px] rounded-[2vh] 
                     shadow-md hover:scale-105 hover:shadow-xl 
                     transition-all duration-300 ease-in-out"
        ></div>
      ))}
    </div>
      {/* Brown & White Boxes */}
      <div className="w-[40vw] h-[20vh] mt-[4vh] flex flex-col items-center">
              <button
        className="relative z-10 top-[6vh] right-[28vh] flex items-center justify-center w-[4vw] h-[4vw] rounded-full bg-orange-500 shadow-md hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 animate-float"
      >
        <div className="absolute w-[0.3vw] h-[2.5vw] bg-white rounded-sm"></div>
        <div className="absolute w-[2.5vw] h-[0.3vw] bg-white rounded-sm"></div>
      </button>
        <div className="bg-[#c74710] w-[34vw] h-[8vh] rounded-[3vw] flex justify-center animate-float">
<input
  type="text"
  placeholder="Enter material..."
  className="relative rounded-[1vw] left-[4vh] bottom-[1vh] bg-white w-[25vw] h-[7vh]  text-center text-[1.5vw] font-semibold text-gray-700 outline-none transition-all duration-300"
/>
        </div>
      </div>
    </div>;
  }
  return (
    <div className="flex flex-col items-center justify-center py-[6vh]">
      {/* Floating Plus Button */}
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center w-[5vw] h-[5vw] rounded-full bg-orange-500 shadow-md hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 animate-float"
      >
        <div className="absolute w-[0.4vw] h-[3vw] bg-white rounded-sm"></div>
        <div className="absolute w-[3vw] h-[0.4vw] bg-white rounded-sm"></div>
      </button>
      {/* Brown & White Boxes */}
      <div className="w-[40vw] h-[14vh] mt-[4vh] flex flex-col items-center">
        <div className="bg-[#c74710] w-[38vw] h-[10vh] rounded-[3vw] flex justify-center animate-float">
          <div className="relative bottom-[1vh] bg-white w-[34vw] h-[8vh]"></div>
        </div>
      </div>
    </div>
  );
}
