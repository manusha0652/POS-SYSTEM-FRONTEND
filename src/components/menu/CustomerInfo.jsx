import React from 'react';
import { FaUser, FaPhone, FaUsers, FaChair } from 'react-icons/fa';

const CustomerInfo = ({ orderDetails }) => {
  if (!orderDetails) return null;

  return (
    <div className='bg-[#262626] rounded-lg p-4 mb-6'>
      <h3 className='text-white font-semibold mb-4 text-lg'>Customer Information</h3>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex items-center gap-3'>
          <FaUser className='text-[#f6b100]' />
          <div>
            <p className='text-gray-400 text-sm'>Name</p>
            <p className='text-white font-medium'>{orderDetails.customerName}</p>
          </div>
        </div>
        
        <div className='flex items-center gap-3'>
          <FaPhone className='text-[#f6b100]' />
          <div>
            <p className='text-gray-400 text-sm'>Contact</p>
            <p className='text-white font-medium'>{orderDetails.customerContact}</p>
          </div>
        </div>
        
        <div className='flex items-center gap-3'>
          <FaUsers className='text-[#f6b100]' />
          <div>
            <p className='text-gray-400 text-sm'>Guests</p>
            <p className='text-white font-medium'>{orderDetails.guestCount} People</p>
          </div>
        </div>
        
        <div className='flex items-center gap-3'>
          <FaChair className='text-[#f6b100]' />
          <div>
            <p className='text-gray-400 text-sm'>Table</p>
            <p className='text-white font-medium'>Table {orderDetails.tableNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
