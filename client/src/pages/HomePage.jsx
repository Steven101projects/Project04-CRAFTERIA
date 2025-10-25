import React, {useState}from 'react'
import BlockHeader from '../components/startComponents/HeaderDiv'
import Crafter from '../components/startComponents/CraftingTable'
import { NavLink } from "react-router-dom";

export default function Home() {

  const [craft, setCraft] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_50%_40%,#fa5f07,#ffc187,#faf0c4,#ffdc42)] flex flex-col items-center">
      <BlockHeader craft={craft}/>
        <Crafter setCraft={setCraft}/>
<div className="mt-10 text-center absolute z-10 bottom-[3vh] left-[2vw]">
  <div className="inline-flex items-center justify-center gap-2 rounded-full shadow-[#9d8606] shadow-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold hover:from-orange-500 hover:to-red-500 transition animate-float cursor-pointer w-[20vw] h-[9vh]">
    <NavLink
      to="/register"
      className="underline text-[1.5vw]"
    >
      Register?
    </NavLink>
    <span className="text-[1.5vw]">
      or
    </span>
    <NavLink
      to="/login"
      className="underline text-[1.5vw]"
    >
      Log In
    </NavLink>
  </div>
</div>
    </div>
    
  )
}
