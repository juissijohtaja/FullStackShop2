/* eslint-disable no-case-declarations */
import fire from '../fire'

const messageReducer = (state = [], action) => {
  console.log('ACTION: ', action)
  switch(action.type) {
  case 'NEW_MESSAGE':
    return [...state, action.data]
  case 'INIT_MESSAGES':
    return action.data
  default:
    return state
  }
}

const snapshotToArray = (snapshot) => {
  var returnArr = []
  snapshot.forEach((childSnapshot) => {
    const item = { text: childSnapshot.val(), id: childSnapshot.key }
    returnArr.push(item)
  })
  return returnArr
}

let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100)

export const fetchMessages = () => {
  return async dispatch => {
    messagesRef.on('value', snapshot => {
      const messages = snapshotToArray(snapshot)
      console.log('snapshot messages', messages)

      dispatch({
        type: 'INIT_MESSAGES',
        data: messages
      })
    })
  }
}


/* export const createNote = content => {
    return async dispatch => {
      const newNote = await noteService.createNew(content)
      dispatch({
        type: 'NEW_NOTE',
        data: newNote,
      })
    }
  } */

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const createMessage = (content) => {
  return {
    type: 'NEW_MESSAGE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }
}

export default messageReducer