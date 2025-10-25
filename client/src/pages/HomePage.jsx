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
  <div className="inline-block shadow-[#9d8606] shadow-md h-[3vw] w-[13vw] bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold text-3xl px-8 py-4 rounded-full hover:from-orange-500 hover:to-red-500 transition animate-float flex items-center justify-center gap-2">
    <NavLink to="/register" className="underline">
      Register?
    </NavLink>
    <span>or</span>
    <NavLink to="/login" className="underline">
      Log In
    </NavLink>
  </div>
</div>
    </div>
    
  )
}
