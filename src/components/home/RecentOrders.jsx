import React from 'react'
import { FaSearch } from 'react-icons/fa'
import OrderList from './OrderList'

const RecentOrders = ({ orders = [] }) => {
  return (
    <div className='bg-[#1a1a1a] w-full h-[450px] rounded-lg'>
      <div className='bg-[#1a1a1a] p-6 rounded-xl border border-[#262626] h-full'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-xl font-semibold text-white'>Recent Orders</h1>
          <a href='' className='text-blue-500 text-sm'>View all</a>
        </div>
        
        {/* Search Bar */}
        <div className='mb-6'>
          <div className='bg-[#262626] rounded-lg p-3 flex items-center gap-3'>
            <span className='text-gray-400'><FaSearch /></span>
            <input 
              type="text" 
              placeholder="Search recent orders" 
              className='bg-transparent outline-none text-white flex-1 placeholder-gray-400'
            />
          </div>
        </div>

        {/* Orders List */}
        <div className='space-y-2 overflow-y-auto scrollbar-hide max-h-[280px]'>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <OrderList 
                key={index}
                customerName={order.customerName}
                customerInitials={order.customerInitials}
                itemsCount={order.itemsCount}
                tableNo={order.tableNo}
                status={order.status}
              />
            ))
          ) : (
            <div className='text-center py-8'>
              <div className='text-gray-400 text-lg mb-2'>No orders yet</div>
              <div className='text-gray-500 text-sm'>Orders will appear here when customers place them</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentOrders
