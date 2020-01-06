
const shoppingcartReducer = (state = [], action) => {
  console.log('ACTION: ', action)
  const stateCopy = [...state]
  switch(action.type) {
  case 'ADD_PRODUCT_TO_CART':
    return [...state, action.data]
  case 'REMOVE_PRODUCT_FROM_CART':
    return state
  case 'UPDATE_CART':
    return stateCopy.map(item => item.product.id === action.data.product.id ? action.data : item)
  default:
    return state
  }
}

export const addProductToCart = (cartProduct) => {
  const item = { product: cartProduct.product, amount: cartProduct.amount }
  return async dispatch => {
    console.log('addProductToCart')
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      data: item
    })
  }
}

export const removeProductFromCart = (product) => {
  return async dispatch => {
    console.log('removeProductFromCart')
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_CART',
      data: product
    })
  }
}

export const increaseAmountInCart = (cartProduct) => {
  console.log('increaseAmountInCart cartProduct.amount before', cartProduct.amount)
  cartProduct.amount += 1
  console.log('increaseAmountInCart cartProduct.amount after', cartProduct.amount)
  return async dispatch => {
    dispatch({
      type: 'UPDATE_CART',
      data: cartProduct
    })
  }
}

export default shoppingcartReducer