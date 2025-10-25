import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BlockHeader({ craft }) {
  // Base layout styles
  const container = `relative flex flex-col h-[59vh] items-center justify-center text-white 
    bg-[linear-gradient(90deg,#ff880c,#ef290e)] w-full overflow-hidden 
    transition-all duration-700 ease-in-out shadow-orange-700 shadow-lg`

  const containerMin = `relative flex flex-col h-[30vh] items-center justify-center text-white 
    bg-[linear-gradient(90deg,#ff880c,#ef290e)] w-full overflow-hidden 
    transition-all duration-700 ease-in-out shadow-orange-700 shadow-lg`

  // Navigation links
  const navLink = `font-bold transition-all duration-700 ease-in-out hover:scale-110`
  const navLeft = `absolute top-3 left-4 text-3xl ${navLink}`
  const navRight = `absolute top-3 right-5 text-3xl ${navLink}`

  const navLeftMin = `absolute top-2 left-4 text-2xl ${navLink}`
  const navRightMin = `absolute top-2 right-5 text-2xl ${navLink}`

  // Decorative lines
  const topLine = `absolute top-[2rem] left-[11rem] right-[8rem] border-t-4 border-orange-300 opacity-90 transition-all duration-700 ease-in-out`
  const topLineMin = `absolute top-[1rem] left-[11rem] right-[8rem] border-t-2 border-orange-300 opacity-90 transition-all duration-700 ease-in-out`

  const bottomLine = `absolute bottom-12 w-5/6 left-1/2 -translate-x-1/2 border-t-4 border-orange-300 opacity-90 animate-fadeIn delay-[1s] transition-all duration-700 ease-in-out`
  const bottomLineMin = `absolute bottom-8 w-5/6 left-1/2 -translate-x-1/2 border-t-2 border-orange-300 opacity-90 animate-fadeIn delay-[1s] transition-all duration-700 ease-in-out`

  // Main title and subtitle
const title = "relative right-[6vw] text-[22vw] mt-[3rem] font-bold tracking-tight leading-none font-spartan animate-floatlr";
  const titleMin = `relative text-[8vw] mt-[1rem] font-bold tracking-tight leading-none font-spartan animate-slideDown transition-all duration-700 ease-in-out`

  const subtitle = `relative text-[2vw] bottom-[10vh] font-semibold animate-fadeUp delay-[0.5s]`
  const subtitleMin = `relative text-[1.5vw] bottom-6 font-semibold animate-fadeUp delay-[0.5s] animate-floatlr transition-all duration-700 ease-in-out`

  // Floating “moles”
  const moleBase = `absolute bottom-8 bg-white rounded-full`
  const moleLeft = `${moleBase} left-8 w-20 h-10`
  const moleRight = `${moleBase} right-8 w-20 h-10`

  const moleLeftMin = `${moleBase} left-8 w-10 h-5`
  const moleRightMin = `${moleBase} right-8 w-10 h-5`

  // Active style selection
  const activeContainer = craft ? containerMin : container
  const activeTitle = craft ? titleMin : title
  const activeSubtitle = craft ? subtitleMin : subtitle
  const activeTopLine = craft ? topLineMin : topLine
  const activeBottomLine = craft ? bottomLineMin : bottomLine
  const activeMoleLeft = craft ? moleLeftMin : moleLeft
  const activeMoleRight = craft ? moleRightMin : moleRight
  const activeNavLeft = craft ? navLeftMin : navLeft
  const activeNavRight = craft ? navRightMin : navRight

  return (
    <div className={activeContainer}>

      {/* Top navigation */}
      <NavLink to="/craftbook" className={activeNavLeft}>
        Craftbook
      </NavLink>

      <NavLink to="/about" className={activeNavRight}>
        About
      </NavLink>

      {/* Decorative top line */}
      <hr className={activeTopLine} />

      {/* Main title */}
      <h1 className={activeTitle}>CRAFTERIA</h1>

      {/* Bottom text */}
      <p className={activeSubtitle}>What would you like to craft today?</p>

      {/* Decorative bottom line */}
      <hr className={activeBottomLine} />

      {/* Side moles */}
      <div className={activeMoleLeft}></div>
      <div className={activeMoleRight}></div>
    </div>
  )
}
