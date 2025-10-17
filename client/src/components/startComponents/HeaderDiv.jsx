import React from 'react'
import { NavLink } from 'react-router-dom'

const moles = "absolute bottom-10 w-20 h-10 bg-white rounded-full"

export default function BlockHeader() {
  return (
<div className="relative flex flex-col items-center justify-center text-white bg-[linear-gradient(90deg,#ff880c,#ef290e)] w-full h-[60vh] overflow-hidden">
<div className="absolute top-3 left-4">
  <NavLink 
    to="/" 
    className="text-3xl font-bold transition-transform duration-300 hover:scale-110"
  >
    Craftbook
  </NavLink>
</div>

<div className="absolute top-3 right-5">
  <NavLink 
    to="/about" 
    className="text-3xl font-bold transition-transform duration-300 hover:scale-110"
  >
    About
  </NavLink>
</div>

<hr className="absolute top-[2rem] left-[11rem] right-[8rem] border-t-4 border-orange-300 opacity-90" />

      {/* Main title */}
<h1 className="relative right-[8vw] text-[20vw] mt-[1.5rem] font-bold tracking-tight leading-none font-spartan">
  CRAFTERIA
</h1>

      {/* Bottom text */}
 <p className="relative text-[2vw] bottom-11 font-semibold ">
        What would you like to craft today?
      </p>

      {/* Decorative bottom line */}
      <hr className="absolute bottom-12 w-5/6 left-1/2 -translate-x-1/2 border-t-4 border-orange-300 opacity-90" />

      {/* Side white rounded shapes using moles */}
      <div className={`${moles} left-8`}></div>
      <div className={`${moles} right-8`}></div>
    </div>
  )
}
