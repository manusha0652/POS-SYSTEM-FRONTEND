import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const MenuContainer = ({ selectedCategory, onCategorySelect, onAddToCart, cartItems, onUpdateQuantity }) => {
  const categories = [
    'Pizzas',
    'Burgers',
    'Starters',
    'Main Course',
    'Desserts',
    'Beverages',
    'Salads',
    'Pasta'
  ];

  const menuItems = {
    Pizzas: [
      { id: 1, name: 'Margherita Pizza', price: 299, image: '/src/assets/images/biriyani.jpeg' },
      { id: 2, name: 'Pepperoni Pizza', price: 399, image: '/src/assets/images/biryani.jpg' },
      { id: 3, name: 'Chicken Supreme', price: 449, image: '/src/assets/images/butter-chicken.jpg' },
      { id: 4, name: 'Veggie Delight', price: 329, image: '/src/assets/images/chole-bhature.jpg' },
    ],
    Burgers: [
      { id: 5, name: 'Classic Burger', price: 199, image: '/src/assets/images/masala-dosa.jpg' },
      { id: 6, name: 'Chicken Burger', price: 249, image: '/src/assets/images/palak-paneer.jpg' },
      { id: 7, name: 'Cheese Burger', price: 229, image: '/src/assets/images/paneer-tikka.jpg' },
    ],
    Starters: [
      { id: 8, name: 'Chicken Wings', price: 299, image: '/src/assets/images/rajma-chawal.jpg' },
      { id: 9, name: 'Garlic Bread', price: 149, image: '/src/assets/images/biriyani.jpeg' },
      { id: 10, name: 'Nachos', price: 199, image: '/src/assets/images/biryani.jpg' },
    ],
    'Main Course': [
      { id: 11, name: 'Chicken Biryani', price: 349, image: '/src/assets/images/butter-chicken.jpg' },
      { id: 12, name: 'Paneer Butter Masala', price: 289, image: '/src/assets/images/chole-bhature.jpg' },
      { id: 13, name: 'Dal Tadka', price: 229, image: '/src/assets/images/masala-dosa.jpg' },
    ],
    Desserts: [
      { id: 14, name: 'Chocolate Cake', price: 149, image: '/src/assets/images/palak-paneer.jpg' },
      { id: 15, name: 'Ice Cream', price: 99, image: '/src/assets/images/paneer-tikka.jpg' },
    ],
    Beverages: [
      { id: 16, name: 'Coca Cola', price: 49, image: '/src/assets/images/rajma-chawal.jpg' },
      { id: 17, name: 'Fresh Juice', price: 79, image: '/src/assets/images/biriyani.jpeg' },
    ],
    Salads: [
      { id: 18, name: 'Caesar Salad', price: 199, image: '/src/assets/images/biryani.jpg' },
      { id: 19, name: 'Greek Salad', price: 179, image: '/src/assets/images/butter-chicken.jpg' },
    ],
    Pasta: [
      { id: 20, name: 'Alfredo Pasta', price: 249, image: '/src/assets/images/chole-bhature.jpg' },
      { id: 21, name: 'Arrabbiata Pasta', price: 229, image: '/src/assets/images/masala-dosa.jpg' },
    ]
  };

  const getItemQuantity = (itemId) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className='flex gap-6 h-[calc(100vh-120px)]'>
      {/* Categories */}
      <div className='w-48 bg-[#1a1a1a] rounded-lg p-4'>
        <h3 className='text-white font-semibold mb-4'>Categories</h3>
        <div className='space-y-2'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-[#f6b100] text-black font-semibold'
                  : 'bg-[#262626] text-white hover:bg-[#333]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className='flex-1 bg-[#1a1a1a] rounded-lg p-6'>
        <h3 className='text-white font-bold text-xl mb-6'>{selectedCategory}</h3>
        <div className='grid grid-cols-2 gap-6 overflow-y-auto max-h-[calc(100vh-220px)]'>
          {menuItems[selectedCategory]?.map(item => {
            const quantity = getItemQuantity(item.id);
            return (
              <div key={item.id} className='bg-[#262626] rounded-lg p-4 hover:bg-[#333] transition-colors'>
                <div className='aspect-square mb-3 rounded-lg overflow-hidden bg-gray-600'>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <h4 className='text-white font-semibold mb-2'>{item.name}</h4>
                <div className='flex items-center justify-between'>
                  <span className='text-[#f6b100] font-bold text-lg'>₹{item.price}</span>
                  
                  {quantity === 0 ? (
                    <button
                      onClick={() => onAddToCart(item)}
                      className='bg-[#f6b100] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#e6a000] transition-colors flex items-center gap-2'
                    >
                      <FaPlus className='text-sm' />
                      Add
                    </button>
                  ) : (
                    <div className='flex items-center gap-3'>
                      <button
                        onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                        className='bg-[#f6b100] text-black p-2 rounded-lg hover:bg-[#e6a000] transition-colors'
                      >
                        <FaMinus className='text-sm' />
                      </button>
                      <span className='text-white font-semibold min-w-[20px] text-center'>{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                        className='bg-[#f6b100] text-black p-2 rounded-lg hover:bg-[#e6a000] transition-colors'
                      >
                        <FaPlus className='text-sm' />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
