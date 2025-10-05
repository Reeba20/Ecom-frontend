import React from 'react'
import { useCart } from '../context/CartContext'
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa'

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount,
    loading 
  } = useCart()



  if (cartItems.length === 0) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          Shopping Cart ({getCartItemsCount()} items)
        </h2>
        <button 
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-20 h-20 object-cover rounded"
            />
            
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">Rs.{item.price}</p>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaMinus className="text-sm" />
              </button>
              
              <span className="px-3 py-1 border rounded">{item.quantity}</span>
              
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaPlus className="text-sm" />
              </button>
            </div>

            <div className="text-right">
              <p className="font-semibold">Rs.{(item.price * item.quantity).toFixed(2)}</p>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors mt-2"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-2xl font-bold">Rs.{getCartTotal().toFixed(2)}</span>
        </div>
        
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart