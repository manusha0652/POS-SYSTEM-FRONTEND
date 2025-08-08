import React from 'react'
import biriyaniImage from '../../assets/images/biriyani.jpeg'

const PopularDishes = () => {
  const popularDishes = [
    { id: 1, name: 'Butter Chicken', orders: 250, image: biriyaniImage },
    { id: 2, name: 'Palak Paneer', orders: 180, image: biriyaniImage },
    { id: 3, name: 'Hyderabadi Biryani', orders: 300, image: biriyaniImage },
    { id: 4, name: 'Masala Dosa', orders: 220, image: biriyaniImage },
    { id: 5, name: 'Chole Bhature', orders: 270, image: biriyaniImage },
    { id: 6, name: 'Rajma Chawal', orders: 160, image: biriyaniImage },
    { id: 7, name: 'Paneer Tikka', orders: 210, image: biriyaniImage },
    { id: 8, name: 'Dal Tadka', orders: 190, image: biriyaniImage },
    { id: 9, name: 'Aloo Gobi', orders: 175, image: biriyaniImage }
  ];

  return (
    <div className='bg-[#1a1a1a] rounded-xl border border-[#262626] p-6 h-[600px] flex flex-col'>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-xl font-semibold text-white'>Popular Dishes</h3>
        <button className='text-blue-500 text-sm'>View all</button>
      </div>

      <div className='space-y-4 overflow-y-auto scrollbar-hide flex-1' style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
        {popularDishes.map((dish, index) => (
          <div key={dish.id} className='bg-[#262626] p-4 rounded-xl border flex border-[#262626] gap-2 '>
            <span className='text-gray-400 text-sm w-8 mt-3 font-medium '>
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            
            <div className='w-12 h-12 rounded-full overflow-hidden border border-[#404040]'>
              <img 
                src={dish.image} 
                alt={dish.name}
                className='w-full h-full object-cover'
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-[#404040] flex items-center justify-center text-xl">🍛</div>';
                }}
              />
            </div>
            
            <div className='flex-1 ml-6'>
              <div className='text-white font-medium text-lg'>{dish.name}</div>
              <div className='text-gray-400 text-sm'>Orders: {dish.orders}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularDishes
