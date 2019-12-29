import React, { useState, useEffect } from 'react'
import './App.css'
import fire from './fire'
import BookForm from './Components/BookForm'
import Books from './Components/Books'

const App = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  

  useEffect(() => {
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100)
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key }
      console.log('message', message)
      setMessages(messages => [...messages, message])
    })
  }, [])

  const AddMessage = (e) => {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( newMessage );
    setNewMessage('') // <- clear the input
  }

  return (
    <div className="App">
      <h2>Johtaja appsi</h2>
      <form onSubmit={AddMessage}>
        <div>
          Message
          <input
            type="text"
            value={newMessage}
            onChange={({ target }) => setNewMessage(target.value)}
          />
        </div>
        <input type="submit" value="Save"/>
        <h3>Messages</h3>
        <ul>
          { messages.map( message => <li key={message.id}>{message.text}</li> ) }
        </ul>
      </form>
      <BookForm />
      <Books />
    </div>
  );
}

export default App;
