import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import Greetings from '../components/home/Greetings'
import MiniCard from '../components/home/MIniCard'
import RecentOrders from '../components/home/RecentOrders'
import PopularDishes from '../components/home/PopularDishes'

const Home = () => {
  // State to manage orders - each order will be displayed as an OrderList component
  const [orders, setOrders] = useState([
    {
      customerName: "Amrit Raj",
      customerInitials: "AM", 
      itemsCount: 8,
      tableNo: 3,
      status: "ready"
    },
    {
      customerName: "John Smith",
      customerInitials: "JS",
      itemsCount: 5,
      tableNo: 7,
      status: "ready"
    }
  ]);

  

  return (
   <div className='bg-[#1f1f1f] min-h-screen pb-20'>
     {/* Main Content */}
     <div className='flex gap-6 p-6 h-[calc(100vh-120px)]'>
        {/* Left Side - Dashboard */}
        <div className='flex-[3] space-y-6 overflow-y-auto scrollbar-hide pr-2'>
          {/* Greeting and Current Time */}
          <Greetings/>

          {/* Stats Cards - MiniCard Components */}
          <div className='grid grid-cols-2 gap-4'>
            <MiniCard
              title="Total Earning"
              icon="$"
              number="$526"
              footnum="+3.5"
              iconBg="bg-green-500"
              changeColor="text-green-500"
            />
            <MiniCard
              title="In Progress"
              icon="⏱"
              number={orders.length.toString()}
              footnum="+21"
              iconBg="bg-orange-500"
              changeColor="text-green-500"
            />
            
          </div>

          {/* Recent Orders - Now displays multiple OrderList components */}
          <RecentOrders orders={orders} />
        </div>
          
        {/* Right Side - Popular Dishes */}
        <div className='flex-[2]'>
          <PopularDishes />
        </div>
     </div>
     
     {/* Bottom Navigation */}
     <BottomNav />
   </div>
  )
}

export default Home
