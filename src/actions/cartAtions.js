import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstant'

export const addToCart = (id, qty ) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.id,
      name: data.title,
      image: data.image,
      price: data.price,
      qty
    }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}