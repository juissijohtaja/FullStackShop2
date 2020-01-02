import fire from '../fire'

const messageReducer = (state = [], action) => {
  console.log('ACTION: ', action)
  switch(action.type) {
  case 'CREATE_MESSAGE':
    return state
  case 'FETCH_MESSAGES':
    return action.data
  case 'REMOVE_MESSAGE':
    return state
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

let messagesRef = fire.database().ref('messages')

export const fetchMessages = () => {
  return async dispatch => {
    messagesRef.orderByKey().limitToLast(100).on('value', snapshot => {
      const messages = snapshotToArray(snapshot)
      console.log('fetchMessages', messages)
      dispatch({
        type: 'FETCH_MESSAGES',
        data: messages
      })
    })
  }
}

export const createMessage = (message) => {
  return async dispatch => {
    messagesRef.push(message)
    console.log('createMessage', message)
    dispatch({
      type: 'CREATE_MESSAGE',
      data: message
    })
  }
}

export const removeMessage = (message) => {
  return async dispatch => {
    messagesRef.child(message.id).remove()
    console.log('removeMessage', message)
    dispatch({
      type: 'REMOVE_MESSAGE',
      data: message
    })
  }
}

export default messageReducer