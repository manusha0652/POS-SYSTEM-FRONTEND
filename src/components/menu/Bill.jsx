import React from 'react';
import { FaCreditCard, FaMoneyBill, FaQrcode } from 'react-icons/fa';

const Bill = ({ cartItems }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  return (
    <div className='bg-[#262626] rounded-lg p-4'>
      <h3 className='text-white font-semibold mb-4 text-lg'>Bill Summary</h3>
      
      <div className='space-y-3 mb-4'>
        <div className='flex justify-between text-white'>
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        
        <div className='flex justify-between text-white'>
          <span>GST (18%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        
        <div className='border-t border-gray-600 pt-3'>
          <div className='flex justify-between text-white font-bold text-lg'>
            <span>Total</span>
            <span className='text-[#f6b100]'>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {cartItems.length > 0 && (
        <>
          <div className='mb-4'>
            <h4 className='text-white font-medium mb-3'>Payment Method</h4>
            <div className='grid grid-cols-2 gap-2'>
              <button className='bg-[#1f1f1f] text-white p-3 rounded-lg hover:bg-[#333] transition-colors flex flex-col items-center gap-1'>
                <FaCreditCard />
                <span className='text-xs'>Card</span>
              </button>
              <button className='bg-[#1f1f1f] text-white p-3 rounded-lg hover:bg-[#333] transition-colors flex flex-col items-center gap-1'>
                <FaMoneyBill />
                <span className='text-xs'>Cash</span>
              </button>
              {/* <button className='bg-[#1f1f1f] text-white p-3 rounded-lg hover:bg-[#333] transition-colors flex flex-col items-center gap-1'>
                <FaQrcode />
                <span className='text-xs'>UPI</span>
              </button> */}
            </div>
          </div>
         <div className='mb-10 grid grid-cols-2 gap-2'>  
          <button className='w-full bg-[#3253e8] text-white font-bold py-3 rounded-lg hover:bg-[#152776] transition-colors'>
           Print Receipt
          </button>
           <button className='w-full bg-[#f6b100] text-black font-bold py-3 rounded-lg hover:bg-[#e6a000] transition-colors'>
            Place Order
          </button>
          </div> 
        </>
      )}
    </div>
  );
};

export default Bill;
