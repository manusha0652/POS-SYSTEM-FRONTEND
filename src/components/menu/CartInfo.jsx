import React from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const CartInfo = ({ cartItems, onUpdateQuantity }) => {
  return (
    <div className='bg-[#262626] rounded-lg p-4 mb-6 flex-1'>
      <h3 className='text-white font-semibold mb-4 text-lg'>Order Items</h3>
      
      {cartItems.length === 0 ? (
        <div className='text-center py-8'>
          <p className='text-gray-400'>No items added to cart</p>
          <p className='text-gray-500 text-sm mt-1'>Add items from the menu to see them here</p>
        </div>
      ) : (
        <div className='space-y-3 overflow-y-auto max-h-[300px]'>
          {cartItems.map(item => (
            <div key={item.id} className='bg-[#1f1f1f] rounded-lg p-3'>
              <div className='flex items-center justify-between mb-2'>
                <h4 className='text-white font-medium'>{item.name}</h4>
                <button
                  onClick={() => onUpdateQuantity(item.id, 0)}
                  className='text-red-400 hover:text-red-300 p-1'
                >
                  <FaTrash className='text-sm' />
                </button>
              </div>
              
              <div className='flex items-center justify-between'>
                <span className='text-[#f6b100] font-semibold'>₹{item.price}</span>
                
                <div className='flex items-center gap-3'>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className='bg-[#f6b100] text-black p-1.5 rounded hover:bg-[#e6a000] transition-colors'
                  >
                    <FaMinus className='text-xs' />
                  </button>
                  
                  <span className='text-white font-medium min-w-[20px] text-center'>
                    {item.quantity}
                  </span>
                  
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className='bg-[#f6b100] text-black p-1.5 rounded hover:bg-[#e6a000] transition-colors'
                  >
                    <FaPlus className='text-xs' />
                  </button>
                </div>
              </div>
              
              <div className='text-right mt-2'>
                <span className='text-white text-sm'>
                  Subtotal: ₹{item.price * item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartInfo;
