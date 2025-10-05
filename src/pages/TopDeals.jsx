
import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { getAllProductsAPI } from '../services/allAPI'

const TopDeals = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { addToCart, cartItems } = useCart()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await getAllProductsAPI()
      if (response.status === 200) {
        // For demo, show last 3 products as "Top Deals"
        setProducts(response.data.slice(-3))
      }
    } catch (err) {
      setError('Failed to fetch top deals')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const isInCart = (productId) => {
    return cartItems.some(item => item.productId === productId)
  }

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-lg">Loading top deals...</div>
    </div>
  )

  if (error) return (
    <div className="text-center p-6 text-red-500 text-lg">
      Error: {error}
    </div>
  )

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Top Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="relative">
              <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                HOT DEAL
              </span>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="font-medium text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600 font-semibold mb-3">Rs.{product.price}</p>
            <p className="text-sm text-gray-500 mb-3">{product.category}</p>
            
            <button 
              onClick={() => handleAddToCart(product)}
              className={`w-full py-2 px-4 rounded transition-colors ${
                isInCart(product.id) 
                  ? 'bg-green-600 text-white cursor-default' 
                  : 'bg-red-600 text-white hover:bg-red-700'
              }`}
              disabled={isInCart(product.id)}
            >
              {isInCart(product.id) ? 'Added to Cart' : 'Get Deal'}
            </button>
            
           
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopDeals