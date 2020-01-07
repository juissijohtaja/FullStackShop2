
const loginReducer = (state = [], action) => {
  console.log('ACTION: ', action)
  switch(action.type) {
  case 'ADD_USER':
    return action.data
  case 'LOGIN_DENIED':
    return state
  default:
    return state
  }
}

export const loginUser = (user) => {
  console.log('loginUser', user)
  //const item = { userid: user.userid, password: user.password }
  if (user.password === 'admin') {
    return async dispatch => {
      dispatch({
        type: 'ADD_USER',
        data: user
      })
    }
  } else {
    return async dispatch => {
      dispatch({
        type: 'LOGIN_DENIED',
        data: null
      })
    }
  }
}

export const removeProductFromCart = (cartProduct) => {
  console.log('removeProductFromCart', cartProduct)
  return async dispatch => {
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_CART',
      data: cartProduct
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

export const decreaseAmountInCart = (cartProduct) => {
  console.log('decreaseAmountInCart cartProduct.amount before', cartProduct.amount)
  if (cartProduct.amount > 1) {
    cartProduct.amount -= 1
  }
  console.log('decreaseAmountInCart cartProduct.amount after', cartProduct.amount)
  return async dispatch => {
    dispatch({
      type: 'UPDATE_CART',
      data: cartProduct
    })
  }
}

export default loginReducer