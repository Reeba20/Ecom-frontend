
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { getCartItemsCount } = useCart()

  return (
    <header className='flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50'>
      <Link to='/' className='text-3xl font-bold text-gray-800'>Boutique</Link>
      
      <nav className='flex space-x-6 text-gray-700 font-medium'>
        <Link to="/" className='hover:text-black transition-colors'>Home</Link>
        <Link to="/explore" className='hover:text-black transition-colors'>Explore all</Link>
        <Link to="/new" className='hover:text-black transition-colors'>New in</Link>
        <Link to="/deals" className='hover:text-black transition-colors'>Top deals</Link>
      </nav>
      
      <div className="flex space-x-4 text-xl">
        <button className="p-2 hover:text-gray-600 transition-colors">
          <i className="fa fa-user"></i>
        </button>
        <button className="p-2 hover:text-gray-600 transition-colors">
          <i className="fa fa-heart"></i>
        </button>
        <Link to="/cart" className="p-2 hover:text-gray-600 transition-colors relative">
          <i className="fa fa-shopping-cart"></i>
          {getCartItemsCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {getCartItemsCount()}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Header