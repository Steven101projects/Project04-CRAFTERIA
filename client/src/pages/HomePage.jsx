import React, {useState}from 'react'
import BlockHeader from '../components/startComponents/HeaderDiv'
import Crafter from '../components/startComponents/CraftingTable'

export default function Home() {

  const [craft, setCraft] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_50%_40%,#fa5f07,#ffc187,#faf0c4,#ffdc42)] flex flex-col items-center">
      <BlockHeader craft={craft}/>
        <Crafter setCraft={setCraft}/>
      <div className="mt-10 text-center">
        <p className="text-2xl font-semibold text-gray-800">REGISTER OR LOG IN</p>
      </div>
    </div>
  )
}
