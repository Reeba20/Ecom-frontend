
import React, { createContext, useContext, useState, useEffect } from 'react'
import { getCartAPI, addToCartAPI, updateCartItemAPI, removeFromCartAPI, clearCartAPI } from '../services/allAPI'

const CartContext = createContext()

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(false)

 
    useEffect(() => {
        fetchCartItems()
    }, [])

    const fetchCartItems = async () => {
        try {
            setLoading(true)
            const response = await getCartAPI()
            if (response.status === 200) {
                setCartItems(response.data)
            }
        } catch (error) {
            console.error('Error fetching cart items:', error)
        } finally {
            setLoading(false)
        }
    }

   
   
const addToCart = async (product) => {
    try {
       
        const existingItem = cartItems.find(item => item.productId === product.id)
        
        if (existingItem) {
         
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            const response = await updateCartItemAPI(existingItem.id, updatedItem)
            if (response.status === 200) {
                setCartItems(prev => 
                    prev.map(item => 
                        item.id === existingItem.id ? updatedItem : item
                    )
                )
            }
        } else {
        
            const cartItem = {
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            }
            const response = await addToCartAPI(cartItem)
            if (response.status === 201) {
                setCartItems(prev => [...prev, response.data])
            }
        }
    } catch (error) {
        console.error('Error adding to cart:', error)
    }
}
    const removeFromCart = async (cartItemId) => {
        try {
            const response = await removeFromCartAPI(cartItemId)
            if (response.status === 200) {
                setCartItems(prev => prev.filter(item => item.id !== cartItemId))
            }
        } catch (error) {
            console.error('Error removing from cart:', error)
        }
    }

    const updateQuantity = async (cartItemId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(cartItemId)
            return
        }

        try {
            const itemToUpdate = cartItems.find(item => item.id === cartItemId)
            const updatedItem = { ...itemToUpdate, quantity: newQuantity }
            
            const response = await updateCartItemAPI(cartItemId, updatedItem)
            if (response.status === 200) {
                setCartItems(prev => 
                    prev.map(item => 
                        item.id === cartItemId ? updatedItem : item
                    )
                )
            }
        } catch (error) {
            console.error('Error updating quantity:', error)
        }
    }

    const clearCart = async () => {
        try {
            await clearCartAPI()
            setCartItems([])
        } catch (error) {
            console.error('Error clearing cart:', error)
        }
    }

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const getCartItemsCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0)
    }

    const value = {
        cartItems,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount,
        fetchCartItems
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}