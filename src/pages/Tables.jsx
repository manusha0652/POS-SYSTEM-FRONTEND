import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import TableCard from '../components/tables/TableCard'

const Tables = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const tables = [
    {
      id: 1,
      tableNumber: 1,
      status: "Booked",
      customerInitials: "AM",
      customerName: "Alex Morgan"
    },
    {
      id: 2,
      tableNumber: 2,
      status: "Available",
      customerInitials: "",
      customerName: ""
    },
    {
      id: 3,
      tableNumber: 3,
      status: "Booked",
      customerInitials: "JS",
      customerName: "John Smith"
    },
    {
      id: 4,
      tableNumber: 4,
      status: "Available",
      customerInitials: "",
      customerName: ""
    },
    {
      id: 5,
      tableNumber: 5,
      status: "Booked",
      customerInitials: "PL",
      customerName: "Peter Lee"
    },
    {
      id: 6,
      tableNumber: 6,
      status: "Available",
      customerInitials: "",
      customerName: ""
    },
    {
      id: 7,
      tableNumber: 7,
      status: "Booked",
      customerInitials: "LC",
      customerName: "Lisa Chen"
    },
    {
      id: 8,
      tableNumber: 8,
      status: "Available",
      customerInitials: "",
      customerName: ""
    },
    {
      id: 9,
      tableNumber: 9,
      status: "Booked",
      customerInitials: "NK",
      customerName: "Nina Kumar"
    },
    {
      id: 10,
      tableNumber: 10,
      status: "Available",
      customerInitials: "",
      customerName: ""
    },
    {
      id: 11,
      tableNumber: 11,
      status: "Booked",
      customerInitials: "GT",
      customerName: "George Taylor"
    },
    {
      id: 12,
      tableNumber: 12,
      status: "Available",
      customerInitials: "",
      customerName: ""
    },
    {
      id: 13,
      tableNumber: 13,
      status: "Booked",
      customerInitials: "EK",
      customerName: "Emma Klein"
    },
    {
      id: 14,
      tableNumber: 14,
      status: "Available",
      customerInitials: "",
      customerName: ""
    },
    {
      id: 15,
      tableNumber: 15,
      status: "Booked",
      customerInitials: "TW",
      customerName: "Tom Wilson"
    }
  ];

  const filters = ['All', 'Booked'];

  const filteredTables = activeFilter === 'All' 
    ? tables 
    : tables.filter(table => table.status === activeFilter);

  return (
    <div className='bg-[#1f1f1f] min-h-screen pb-20'>
      <div className='p-6'>
        {/* Page Header */}
        <div className='mb-6 flex justify-between items-center'>
            <div>
          <h1 className='text-2xl font-bold text-white mb-6'>Tables</h1>
          </div>
          {/* Filter Tabs */}
          <div>
          
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-2 mr-2 rounded-lg text-sm font-medium transition-colors ${
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

        {/* Tables Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-y-auto scrollbar-hide max-h-[calc(100vh-240px)]'>
          {filteredTables.map((table) => (
            <TableCard
              key={table.id}
              tableNumber={table.tableNumber}
              status={table.status}
              customerInitials={table.customerInitials}
              customerName={table.customerName}
            />
          ))}
        </div>

        {filteredTables.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-gray-400 text-lg mb-2'>No tables found</div>
            <div className='text-gray-500 text-sm'>Try selecting a different filter</div>
          </div>
        )}
      </div>

      <BottomNav/>
    </div>
  )
}

export default Tables
