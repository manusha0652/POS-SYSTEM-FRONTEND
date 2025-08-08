import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import OrderCard from '../components/orders/OrderCard'

const Orders = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const orders = [
    {
      id: 1,
      customerName: "Devon Lane",
      customerInitials: "AD",
      orderNumber: "#235",
      dineOption: "Dine In",
      status: "Ready",
      date: "June 10, 2024",
      time: "09:52 AM",
      itemsCount: 8,
      totalAmount: "$70.74"
    },
    {
      id: 2,
      customerName: "Floyd Miles",
      customerInitials: "AS",
      orderNumber: "#238",
      dineOption: "Dine In",
      status: "Ready",
      date: "June 10, 2024",
      time: "09:54 AM",
      itemsCount: 4,
      totalAmount: "$77.93"
    },
    {
      id: 3,
      customerName: "Jane Cooper",
      customerInitials: "AS",
      orderNumber: "#235",
      dineOption: "Dine In",
      status: "Ready",
      date: "June 10, 2024",
      time: "10:37 AM",
      itemsCount: 6,
      totalAmount: "$85.36"
    },
    {
      id: 4,
      customerName: "Savannah Nguyen",
      customerInitials: "Ta",
      orderNumber: "#233",
      dineOption: "Takeaway",
      status: "In Progress",
      date: "June 10, 2024",
      time: "10:34 AM",
      itemsCount: 2,
      totalAmount: "$27.98"
    },
    {
      id: 5,
      customerName: "Leslie Alexander",
      customerInitials: "A6",
      orderNumber: "#239",
      dineOption: "Dine In",
      status: "In Progress",
      date: "June 10, 2024",
      time: "10:48 AM",
      itemsCount: 7,
      totalAmount: "$87.24"
    },
    {
      id: 6,
      customerName: "Dianne Russell",
      customerInitials: "A12",
      orderNumber: "#276",
      dineOption: "Dine In",
      status: "In Progress",
      date: "June 10, 2024",
      time: "10:44 AM",
      itemsCount: 6,
      totalAmount: "$82.23"
    },
    {
      id: 7,
      customerName: "Arlene McCoy",
      customerInitials: "A7",
      orderNumber: "#276",
      dineOption: "Dine In",
      status: "In Progress",
      date: "June 10, 2024",
      time: "10:43 AM",
      itemsCount: 5,
      totalAmount: "$78.32"
    },
    {
      id: 8,
      customerName: "Jenny Wilson",
      customerInitials: "A13",
      orderNumber: "#272",
      dineOption: "Dine In",
      status: "Completed",
      date: "June 10, 2024",
      time: "08:23 AM",
      itemsCount: 5,
      totalAmount: "$76.98"
    },
    {
      id: 9,
      customerName: "Darrell Steward",
      customerInitials: "A18",
      orderNumber: "#271",
      dineOption: "Dine In",
      status: "Completed",
      date: "June 10, 2024",
      time: "09:23 AM",
      itemsCount: 4,
      totalAmount: "$84.45"
    }
  ];

  const filters = ['All', 'In Progress', 'Ready', 'Completed'];

  const filteredOrders = activeFilter === 'All' 
    ? orders 
    : orders.filter(order => order.status === activeFilter);

  return (
    <div className='bg-[#1f1f1f] min-h-screen pb-20'>
      <div className='p-6'>
       
          <div className='mb-6 flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-bold text-white mb-6'>Orders</h1>
            </div>
            {/* Filter Tabs */}
          <div className='flex gap-2'>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#f6b100] text-white'
                    : 'bg-[#262626] text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto scrollbar-hide max-h-[calc(100vh-240px)]'>
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              customerName={order.customerName}
              customerInitials={order.customerInitials}
              orderNumber={order.orderNumber}
              dineOption={order.dineOption}
              status={order.status}
              date={order.date}
              time={order.time}
              itemsCount={order.itemsCount}
              totalAmount={order.totalAmount}
            />
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-gray-400 text-lg mb-2'>No orders found</div>
            <div className='text-gray-500 text-sm'>Try selecting a different filter</div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}

export default Orders
