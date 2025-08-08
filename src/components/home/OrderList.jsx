import React from 'react'
import { FaCheckDouble } from 'react-icons/fa'

const OrderList = ({ customerName = "Amrit Raj", customerInitials = "AM", itemsCount = 8, tableNo = 3, status = "ready" }) => {
  return (
    <div className='flex items-center justify-between py-3 border-b border-[#262626] last:border-b-0'>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 bg-[#f6b100] rounded-lg flex items-center justify-center font-bold text-white'>
          {customerInitials}
        </div>
        <div>
          <div className='text-white font-medium'>{customerName}</div>
          <div className='text-gray-400 text-sm'>{itemsCount} Items</div>
        </div>
      </div>
      
      <div className='flex items-center gap-4'>
        <div className='border border-[#f6b100] text-[#f6b100] px-3 py-1 rounded text-sm'>
          Table No: {tableNo}
        </div>
        
        <div className='flex flex-col items-end gap-1'>
          <span className='text-green-500 text-sm flex items-center gap-2'>
            <FaCheckDouble />Ready
          </span>
          <div className='text-gray-400 text-sm'>Ready to serve</div>
        </div>
      </div>
    </div>
  )
}

export default OrderList
