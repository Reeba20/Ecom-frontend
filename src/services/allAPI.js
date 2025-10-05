import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// Product APIs
export const getAllProductsAPI = async () => {
    return await commonAPI("GET", `${serverURL}/products`, null)
}

export const getProductByIdAPI = async (id) => {
    return await commonAPI("GET", `${serverURL}/products/${id}`, null)
}

export const addProductAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/products`, reqBody)
}

export const updateProductAPI = async (id, reqBody) => {
    return await commonAPI("PUT", `${serverURL}/products/${id}`, reqBody)
}

export const deleteProductAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/products/${id}`, null)
}

// Cart APIs
export const getCartAPI = async () => {
    return await commonAPI("GET", `${serverURL}/cart`, null)
}

export const addToCartAPI = async (product) => {
    return await commonAPI("POST", `${serverURL}/cart`, product)
}

export const updateCartItemAPI = async (id, updatedItem) => {
    return await commonAPI("PUT", `${serverURL}/cart/${id}`, updatedItem)
}

export const removeFromCartAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/cart/${id}`, null)
}

export const clearCartAPI = async () => {
    const cart = await getCartAPI()
    const deletePromises = cart.data.map(item => 
        commonAPI("DELETE", `${serverURL}/cart/${item.id}`, null)
    )
    return await Promise.all(deletePromises)
}