import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import noteReducer from './reducers/noteReducer'
import productReducer from './reducers/productReducer'
import messageReducer from './reducers/messageReducer'
import shoppingcartReducer from './reducers/shoppingcartReducer'
import { loadState, saveState } from './localStorage'

const reducer = combineReducers({
  notes: noteReducer,
  products: productReducer,
  messages: messageReducer,
  shoppingcart: shoppingcartReducer
})

const persistedState = loadState()

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  saveState({
    shoppingcart: store.getState().shoppingcart
  })
})

export default store