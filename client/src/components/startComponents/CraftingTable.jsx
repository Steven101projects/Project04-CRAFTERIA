import React, { useState } from "react";

export default function Crafter({ setCraft }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setCraft(true);
    setOpen(true);
  };

  // Add the material into next available box
  const addMaterial = () => {
    if (text.trim() === "") return; // ignore empty input
    if (items.length >= 9) return; // max 9 boxes

    setItems((prev) => [...prev, text.trim().toUpperCase()]);
    setText(""); // clear input
  };

  if (open) {
    return (
      <div className="flex flex-col py-[4vh] items-center">
        {/* Crafting Table */}
        <div
          id="craftingTable"
          className="bg-gradient-to-br from-[#ffbf00] to-[#f15000] 
                     w-[35vw] h-[45vh] 
                     rounded-[2vh] 
                     grid grid-cols-3 grid-rows-3 
                     gap-[2vh] p-[3vh] 
                     box-border  shadow-orange-700 shadow-xl"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="text-[#ff880c] bg-white rounded-[2vh] w-full h-full flex items-center justify-center text-[1.5vw] font-semibold text-[#f15000]"
            >
              {items[i] || ""} {/* show item text if exists */}
            </div>
          ))}
        </div>

        {/* Input + Add Button */}
        <div className="w-[40vw] h-[20vh] mt-[.4vh] flex flex-col items-center">
          <button
            onClick={addMaterial}
            className="relative z-10 top-[6vh] right-[30vh] flex items-center justify-center w-[4vw] h-[4vw] rounded-full bg-orange-500 shadow-md active:scale-95 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-300 animate-float"
          >
            <div className="absolute w-[0.3vw] h-[2.5vw] bg-white rounded-sm"></div>
            <div className="absolute w-[2.5vw] h-[0.3vw] bg-white rounded-sm"></div>
          </button>

          <div className="bg-[#c74710] w-[34vw] h-[8vh] rounded-[3vw] flex justify-center animate-float shadow-red-900 shadow-md">
            <input
              type="text"
              placeholder="Enter material..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="relative rounded-[1vw] left-[4vh] bottom-[1vh] bg-white w-[25vw] h-[7vh] animate-float text-center text-[1.5vw] font-semibold text-gray-700 outline-none transition-all duration-300"
            />
          </div>
<button
  id="okButton"
  className="absolute right-[24vw] bottom-[4vh] font-bold flex items-center justify-center w-[7vw] h-[7vw] bg-orange-500 text-white text-3xl rounded-full shadow-red-900 shadow-md hover:bg-[#ffb507] transition-transform duration-300 hover:scale-110 cursor-pointer font-spartan"
>
  OK?
</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-[6vh]">
      {/* Floating Plus Button */}
      <button
        onClick={handleClick}
        className="relative shadow-orange-700 shadow-lg flex items-center justify-center w-[5vw] h-[5vw] rounded-full bg-orange-500 shadow-md hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 animate-float"
      >
        <div className="absolute w-[0.4vw] h-[3vw] bg-white rounded-sm"></div>
        <div className="absolute w-[3vw] h-[0.4vw] bg-white rounded-sm"></div>
      </button>

      {/* Placeholder Box */}
      <div className="w-[40vw] h-[14vh] mt-[4vh] flex flex-col items-center">
        <div className="bg-[#c74710] w-[38vw] h-[10vh] rounded-[3vw] flex justify-center animate-float shadow-red-900 shadow-lg">
          <div className="relative bottom-[1vh] bg-white w-[34vw] h-[8vh]"></div>
        </div>
      </div>
    </div>
  );
}
