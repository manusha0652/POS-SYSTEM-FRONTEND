import React from 'react'

const Model = ({ title, onClose, isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-[#1a1a1a] shadow-lg w-full max-w-lg mx-4 rounded-lg p-4 relative'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold z-10'
          aria-label='Close'
        >
          &times;
        </button>
        <div className='flex items-center justify-between px-6 py-4 border-b border-[#262626]'>
          <h2 className='text-lg font-semibold text-white'>{title}</h2>
        </div>
        <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Model
