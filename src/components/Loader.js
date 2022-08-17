import React from 'react'
import {FaInstagram} from "react-icons/fa"
export const Loader = () => {
  return (
    <div className='fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full text-2xl text-pink-600 bg-zinc-50'>
      <FaInstagram size={100}/>
      <h6>Instagram</h6>
    </div>
  )
}
