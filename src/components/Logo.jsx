import React from 'react'
import Rattle from "../Images/Rattle.webp";

function Logo({width = "10px"}) {
  const logo = Rattle;
  return (
    <div className="w-[40px]">
      <img src={logo}  alt="Logo" className='rounded-3xl'/>
    </div>
  )
}

export default Logo