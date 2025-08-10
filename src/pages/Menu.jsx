import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BottomNav from '../components/shared/BottomNav';
import MenuContainer from '../components/menu/MenuContainer';
import CustomerInfo from '../components/menu/CustomerInfo';
import CartInfo from '../components/menu/CartInfo';
import Bill from '../components/menu/Bill';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state;
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Pizzas');

  useEffect(() => {
    if (orderDetails) {
      console.log('Order Details:', orderDetails);
    }
  }, [orderDetails]);

  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <div className='bg-[#1f1f1f] min-h-screen flex'>
      {/* Left Side - Menu */}
      <div className='flex-[3] p-6'>
        {/* Header */}
        <div className='flex items-center gap-4 mb-6'>
          <button 
            onClick={() => navigate('/tables')}
            className='bg-[#262626] p-2 rounded-lg hover:bg-[#333] transition-colors'
          >
            <FaArrowLeft className='text-white text-lg' />
          </button>
          <h1 className='text-2xl font-bold text-white'>Menu</h1>
        </div>

        {/* Menu Container */}
        <MenuContainer 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>

      {/* Right Side - Order Summary */}
      <div className='flex-[2] bg-[#1a1a1a] p-6 flex flex-col'>
        {/* Customer Info */}
        <CustomerInfo orderDetails={orderDetails} />
        
        {/* Cart Items */}
        <CartInfo 
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
        />
        
        {/* Bill Summary */}
        <Bill cartItems={cartItems} />
      </div>

      <BottomNav />
    </div>
  );
};

export default Menu;