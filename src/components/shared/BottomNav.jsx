import React, { use } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReceipt, MdTableBar } from 'react-icons/md'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidDish } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


const BottomNav = () => {
const navigate=useNavigate();

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#1a1a1a] h-16 flex justify-around items-center text-[#f5f5f5] border-t border-[#262626]'>
      <button onClick={()=>navigate("/")} className='flex flex-col items-center'>
        <FaHome className='text-xl mb-1'/>
        <span className='text-xs'>Home</span>
      </button> 
      <button onClick={()=>navigate("/orders")} className='flex flex-col items-center'>
        <MdOutlineReceipt className='text-xl mb-1'/>
        <span className='text-xs'>Orders</span>
      </button>
      <button onClick={()=>navigate("/orders")}className='bg-[#f6b100] text-white p-3 rounded-full'>
        <BiSolidDish className='text-xl'/>
      </button>
      <button onClick={()=>navigate("/tables")} className='flex flex-col items-center'>
        <MdTableBar className='text-xl mb-1'/>
        <span className='text-xs'>Tables</span>
      </button>
      <button onClick={()=>navigate("/More")} className='flex flex-col items-center'>
        <CiCircleMore className='text-xl mb-1'/>
        <span className='text-xs'>More</span>
      </button> 
    </div>
  )
}

export default BottomNav
