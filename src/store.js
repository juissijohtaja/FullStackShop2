import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import noteReducer from './reducers/noteReducer'
import productReducer from './reducers/productReducer'
import messageReducer from './reducers/messageReducer'
import shoppingcartReducer from './reducers/shoppingcartReducer'

const reducer = combineReducers({
  notes: noteReducer,
  products: productReducer,
  messages: messageReducer,
  shoppingcart: shoppingcartReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store