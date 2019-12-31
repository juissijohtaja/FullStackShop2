//import noteService from '../services/notes'

const productReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
  case 'NEW_PRODUCT':
    return [...state, action.data]
  case 'INIT_PRODUCTS':
    return action.data
  default:
    return state
  }
}

export const initializeProducts = () => {
  return async dispatch => {
    //const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_PRODUCTS',
      data: null,
    })
  }
}

//const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createProduct = content => {
  return async dispatch => {
    //const newNote = await noteService.createNew(content)
    dispatch({
      type: 'NEW_PRODUCT',
      data: null,
    })
  }
}

export const toggleImportanceOf = (id) => { // highlight-line
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export default productReducer