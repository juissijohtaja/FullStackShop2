//import noteService from '../services/notes'

const productReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    default:
      return state
  }
}

export const initializeProducts = () => {
  return async dispatch => {
    //const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: null,
    })
  }
}

//const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createNote = content => {
  return async dispatch => {
    //const newNote = await noteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
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