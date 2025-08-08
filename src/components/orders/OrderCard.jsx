import React from 'react'
import { FaCheckCircle, FaClock, FaUtensils } from 'react-icons/fa'

const OrderCard = ({ 
  customerName = "Devon Lane",
  customerInitials = "AD",
  orderNumber = "#235",
  dineOption = "Dine In",
  status = "Ready",
  date = "June 10, 2024",
  time = "09:52 AM",
  itemsCount = 8,
  totalAmount = "$70.74",
  statusColor = "text-green-500",
  statusBg = "bg-green-500/10",
  statusIcon = <FaCheckCircle />
}) => {
  const getStatusDetails = (status) => {
    switch(status.toLowerCase()) {
      case 'ready':
        return {
          color: 'text-green-500',
          bg: 'bg-green-500/10',
          icon: <FaCheckCircle className="w-3 h-3" />
        };
      case 'in progress':
        return {
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
          icon: <FaClock className="w-3 h-3" />
        };
      case 'completed':
        return {
          color: 'text-blue-500',
          bg: 'bg-blue-500/10',
          icon: <FaCheckCircle className="w-3 h-3" />
        };
      default:
        return {
          color: 'text-gray-500',
          bg: 'bg-gray-500/10',
          icon: <FaClock className="w-3 h-3" />
        };
    }
  };

  const statusDetails = getStatusDetails(status);

  return (
    <div className='bg-[#1a1a1a] rounded-xl border border-[#262626] p-6 hover:border-[#f6b100]/30 transition-colors'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-[#f6b100] rounded-lg flex items-center justify-center font-bold text-white text-lg'>
            {customerInitials}
          </div>
          <div>
            <div className='text-white font-semibold text-lg'>{customerName}</div>
            <div className='text-gray-400 text-sm'>{orderNumber} / {dineOption}</div>
          </div>
        </div>
        
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusDetails.bg}`}>
          {statusDetails.icon}
          <span className={`text-sm font-medium ${statusDetails.color}`}>{status}</span>
        </div>
      </div>

      {/* Details */}
      <div className='flex items-center justify-between mb-4'>
        <div className='text-gray-400 text-sm'>
          {date}, {time}
        </div>
        <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <FaUtensils className="w-3 h-3" />
          <span>{itemsCount} Items</span>
        </div>
      </div>

      {/* Total */}
      <div className='pt-4 border-t border-[#262626]'>
        <div className='flex items-center justify-between'>
          <span className='text-gray-400 text-sm font-medium'>Total</span>
          <span className='text-white font-bold text-xl'>{totalAmount}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
