import React, { useState, useEffect } from 'react'
import './App.css'
import fire from './fire'
import ProductForm from './Components/ProductForm'
import Products from './Components/Products'

const App = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [page, setPage] = useState('products')
  console.log('page', page)


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
      <div>
        <button onClick={() => setPage('products')}>Products</button>
        <button onClick={() => setPage('productform')}>Product form</button>
      </div>
      <h2>Old School Shop</h2>

      <Products show={page === 'products'} />
      <ProductForm show={page === 'productform'}  />

      <h3>Messages</h3>
        <ul>
          { messages.map( message => <li key={message.id}>{message.text}</li> ) }
        </ul>

      <form onSubmit={AddMessage}>
        <div>
          Add message
          <input
            type="text"
            value={newMessage}
            onChange={({ target }) => setNewMessage(target.value)}
          />
        </div>
        <input type="submit" value="Save"/>
        
      </form>
      
    </div>
  )
}

export default App;
