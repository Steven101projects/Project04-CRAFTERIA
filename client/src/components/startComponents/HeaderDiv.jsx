import React from 'react'
import { NavLink } from 'react-router-dom'

const moles = "absolute bottom-10 w-20 h-10 bg-white rounded-full"

export default function BlockHeader() {
  return (
    <div className="relative flex flex-col items-center justify-center text-white bg-gradient-to-r from-orange-500 to-red-500 w-full h-[60vh] overflow-hidden">
      
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

      <hr className="absolute top-8 w-4/5 left-1/2 -translate-x-1/2 border-t-4 border-orange-300 opacity-90"/>

      {/* Main title */}
<h1 className="relative text-[30rem] font-bold tracking-tight leading-none mt-10 font-spartan -translate-x-10">
  CRAFTERIA
</h1>

      {/* Bottom text */}
 <p className="text-3xl font-semibold italic mt-4">
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
