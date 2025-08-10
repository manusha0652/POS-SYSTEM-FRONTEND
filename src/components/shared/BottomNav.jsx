import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReceipt, MdTableBar } from 'react-icons/md'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidDish } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Model from './Model'


const BottomNav = () => {
const navigate=useNavigate();
const [isModelOpen, setIsModelOpen] = useState(false);
const [guestCount, setGuestCount] = useState(0);
const [customerName, setCustomerName] = useState('');
const [customerContact, setCustomerContact] = useState('');
const openModel=()=>{
  setIsModelOpen(true);
}
const closeModel=()=>{
  setIsModelOpen(false);
}
const incrementGuest = () => {
  setGuestCount(prevCount => prevCount + 1);
}

const decrementGuest = () => {
  setGuestCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
}


  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#1a1a1a] h-16 flex justify-around items-center text-[#f5f5f5] border-t border-[#262626]'>
      <style>
        {`
          /* Hide number input spin buttons for Chrome, Safari, Edge, Opera */
          input[type=number]::-webkit-inner-spin-button, 
          input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none;
            margin: 0;
          }
          /* Hide number input spin buttons for Firefox */
          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <button onClick={()=>navigate("/")} className='flex flex-col items-center'>
        <FaHome className='text-xl mb-1'/>
        <span className='text-xs'>Home</span>
      </button> 
      <button onClick={()=>navigate("/orders")} className='flex flex-col items-center'>
        <MdOutlineReceipt className='text-xl mb-1'/>
        <span className='text-xs'>Orders</span>
      </button>
      <button onClick={openModel}
        className='bg-[#f6b100] text-white p-3 rounded-full'>
        <BiSolidDish className='text-xl'/>
      </button>
      <Model isOpen={isModelOpen} onClose={closeModel} title="Create Order">
        
        <div>
           <label className='block text-[#ababab] mb-2 text-sm font-medium'> Customer Name </label>
            <div>
              <input 
                type="text" 
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter customer name" 
                className='w-full bg-transparent border border-[#262626] rounded-lg p-2 text-white placeholder-gray-400 outline-none'
              />
            </div>
            <div>
              <label className='block text-[#ababab] mb-2 mt-4 text-sm font-medium'> Customer Contact Number </label>
              <div className='mb-4'>
                <input 
                  type="number" 
                  onChange={(e) => setCustomerContact(e.target.value)}
                  placeholder="Enter customer Mobile Number" 
                  className='w-full bg-transparent border border-[#262626] rounded-lg p-2 text-white placeholder-gray-400 outline-none'
                />
              </div>
            </div>
            <div>
              <label className='block mb-2 mt-3 text-sm font-medium text-[#ababab]'>Guest</label>
              <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg'>
                <button className='bg-[#262626] text-yellow-500 text-2xl px-2 rounded-full'
                onClick={decrementGuest} 
                type='button'
                >
                  &minus;</button>
               <span className='text-white  text-lg'>{guestCount} Person{guestCount !== 1 ? 's' : ''}</span>
                <button className='bg-[#262626] text-yellow-500 text-2xl px-2 rounded-full'
                onClick={incrementGuest}
                type='button'
                >
                  &#43;</button>
              </div>
            </div>
            <button 
            
            className='w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 '  onClick={() => {
    closeModel();
    navigate("/tables",{
      state: {
         customerName,
          customerContact,
          guestCount,
      }

             } );
    
  }}>
               Create Order
               </button>
        </div>
         
      </Model>
      <button onClick={()=>navigate("/tables")} className='flex flex-col items-center'>
        <MdTableBar className='text-xl mb-1'/>
        <span className='text-xs'>Tables</span>
      </button>
      <button onClick={()=>navigate("/More ")} className='flex flex-col items-center'>
        <CiCircleMore className='text-xl mb-1'/>
        <span className='text-xs'>More</span>
      </button> 
    </div>
  )
}

export default BottomNav
