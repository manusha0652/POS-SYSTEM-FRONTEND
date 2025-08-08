import React from 'react'

const TableCard = ({ 
  tableNumber = 1,
  status = "Available",
  customerInitials = "",
  customerName = ""
}) => {
  const getStatusConfig = (status) => {
    switch(status.toLowerCase()) {
      case 'booked':
        return {
          bgColor: 'bg-green-500',
          textColor: 'text-white',
          badgeColor: 'bg-green-500',
          badgeText: 'text-white'
        };
      case 'available':
        return {
          bgColor: 'bg-orange-500',
          textColor: 'text-white',
          badgeColor: 'bg-orange-500',
          badgeText: 'text-white'
        };
      case 'occupied':
        return {
          bgColor: 'bg-red-500',
          textColor: 'text-white',
          badgeColor: 'bg-green-500',
          badgeText: 'text-white'
        };
      default:
        return {
          bgColor: 'bg-gray-500',
          textColor: 'text-white',
          badgeColor: 'bg-gray-500',
          badgeText: 'text-white'
        };
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <div className='bg-[#1a1a1a] rounded-xl border border-[#262626] p-6 hover:border-[#f6b100]/30 transition-colors relative'>
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.badgeColor} ${statusConfig.badgeText}`}>
        {status}
      </div>

      {/* Table Info */}
      <div className='mb-6'>
        <h3 className='text-white font-semibold text-lg mb-2'>Table {tableNumber}</h3>
      </div>

      {/* Customer Avatar or Empty State */}
      <div className='flex justify-center mb-4'>
        {customerInitials ? (
          <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${statusConfig.bgColor} ${statusConfig.textColor}`}>
            {customerInitials}
          </div>
        ) : (
          <div className='w-16 h-16 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center'>
            <span className='text-gray-500 text-xs'>Empty</span>
          </div>
        )}
      </div>

      {/* Customer Name */}
      {customerName && (
        <div className='text-center'>
          <p className='text-gray-400 text-sm'>{customerName}</p>
        </div>
      )}
    </div>
  )
}

export default TableCard