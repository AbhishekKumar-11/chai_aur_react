import React, { useState } from 'react'

function Navbar() {
     let [colour,setColour] =  useState("white")
    

  return (
    <>
    <div style={{backgroundColor:colour}} className='h-screen w-full '>
    <div className="w-9/12 h-36 bg-zinc-600 absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 rounded-full flex items-center justify-evenly z-10" >
        <button onClick={ () => setColour("red")} className='h-[40px] w-[70px] rounded-xl text-white font-semibold  bg-red-600'>red</button>
        <button onClick={ () => setColour("yellow")} className='h-[40px] w-[70px] rounded-xl text-white font-semibold  bg-yellow-400'>yellow</button>
        <button onClick={() => setColour("blue")} className='h-[40px] w-[70px] rounded-xl text-white font-semibold  bg-sky-400'>blue</button>
        <button onClick={() => setColour("indigo")} className='h-[40px] w-[70px] rounded-xl text-white font-semibold  bg-indigo-600'>lavender</button>
        <button onClick={() => setColour("white")} className='h-[40px] w-[70px] rounded-xl text-black font-semibold  bg-white '>white</button>
        <button onClick={() => setColour ("black")} className='h-[40px] w-[70px] rounded-xl text-white font-semibold  bg-black '>black</button>
    </div>
    </div>
   
    </>
  )
}

export default Navbar